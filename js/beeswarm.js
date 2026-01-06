// dots go on x-axis by value, then get pushed up/down to avoid overlap

class Beeswarm {
  constructor(width, height, padding = 20, isMobile = false) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.centerY = height / 2;
    this.isMobile = isMobile;
  }

  layout(items) {
    if (!items.length) return [];

    // process cheap items first - they cluster on the left and this
    // gives a more balanced distribution when we push dots up/down
    const sorted = [...items].sort((a, b) => a.cost - b.cost);

    const costs = sorted.map(d => d.cost);
    const minCost = Math.min(...costs);
    const maxCost = Math.max(...costs);

    // fewer pixels to work with on mobile, so smaller dots
    const maxRadius = this.isMobile ? 28 : 45;
    const minRadius = this.isMobile ? 16 : 22;
    const spacing = this.isMobile ? 2.8 : 2.2;

    const baseRadius = Math.min(
      maxRadius,
      Math.max(minRadius, (this.width - this.padding * 2) / (items.length * spacing))
    );

    const xScale = (cost) => {
      if (maxCost === minCost) return this.width / 2;
      const ratio = (cost - minCost) / (maxCost - minCost);
      return this.padding + baseRadius + ratio * (this.width - this.padding * 2 - baseRadius * 2);
    };

    const placed = [];

    const positioned = sorted.map(item => {
      const x = xScale(item.cost);
      const y = this._findYPosition(x, baseRadius, placed);

      const result = { ...item, x, y, radius: baseRadius };
      placed.push(result);
      return result;
    });

    return this._normalizeY(positioned);
  }

  _findYPosition(x, radius, placed) {
    // start center, then zigzag up/down until we find a free spot
    let y = this.centerY;
    let offset = 0;
    let direction = 1;
    const step = radius * 0.8;

    while (this._hasCollision(x, y, radius, placed)) {
      offset += step;
      y = this.centerY + offset * direction;
      direction *= -1;

      if (offset > this.height) break; // shouldn't happen but just in case
    }

    return y;
  }

  _hasCollision(x, y, radius, placed) {
    // 1.8x radius means small gap between circles, looks cleaner
    const minDistance = radius * 1.8;

    for (const item of placed) {
      const dx = x - item.x;
      const dy = y - item.y;
      if (Math.sqrt(dx * dx + dy * dy) < minDistance) {
        return true;
      }
    }
    return false;
  }

  _normalizeY(items) {
    if (!items.length) return items;

    // the zigzag placement can make the swarm off-center or overflow
    // so we scale and recenter everything to fit nicely
    const ys = items.map(d => d.y);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const rangeY = maxY - minY;

    const availableHeight = this.height - this.padding * 2;
    const scale = rangeY > 0 ? Math.min(1, availableHeight / rangeY) : 1;
    const centerCurrent = (minY + maxY) / 2;

    return items.map(item => ({
      ...item,
      y: this.centerY + (item.y - centerCurrent) * scale,
    }));
  }
}

function renderBeeswarm() {
  const container = document.getElementById("beeswarm-container");
  if (!container || !subs.length) {
    if (container) {
      container.innerHTML = '<div class="flex items-center justify-center h-full text-slate-400"><p>' + t("subscriptions.noSubscriptions") + '</p></div>';
    }
    return;
  }

  const rect = container.getBoundingClientRect();
  const width = rect.width || 800;
  const height = rect.height || 600;
  const isMobile = width < 500;
  const padding = isMobile ? 20 : 40;

  const items = subs.map(sub => ({ ...sub, cost: toMonthly(sub) }));
  const beeswarm = new Beeswarm(width, height, padding, isMobile);
  const positioned = beeswarm.layout(items);

  const costs = positioned.map(d => d.cost);
  const minCost = Math.min(...costs);
  const maxCost = Math.max(...costs);

  let html = `
    <div class="absolute left-4 right-4 sm:left-10 sm:right-10 top-1/2 h-0.5 bg-slate-200 -translate-y-1/2"></div>
    <div class="absolute left-4 sm:left-10 top-1/2 mt-6 sm:mt-8 text-[10px] sm:text-xs text-slate-400 font-medium">
      ${formatCurrencyShort(minCost)}
    </div>
    <div class="absolute right-4 sm:right-10 top-1/2 mt-6 sm:mt-8 text-[10px] sm:text-xs text-slate-400 font-medium">
      ${formatCurrencyShort(maxCost)}
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">
      ${t("visualization.monthlyCost")}
    </div>
  `;

  positioned.forEach(item => {
    const color = getColor(item.color);
    const size = item.radius * 2;
    const domain = extractDomain(item.url);
    const logoUrl = domain
      ? `https://img.logo.dev/${domain}?token=pk_KuI_oR-IQ1-fqpAfz3FPEw&size=100&retina=true&format=png`
      : null;

    html += `
      <div
        class="beeswarm-dot absolute cursor-pointer group"
        data-id="${item.id}"
        style="left: ${item.x}px; top: ${item.y}px; width: ${size}px; height: ${size}px; transform: translate(-50%, -50%);"
      >
        <div
          class="w-full h-full rounded-full shadow-md sm:shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl flex items-center justify-center overflow-hidden"
          style="background: linear-gradient(135deg, ${color.bg} 0%, ${color.accent} 100%); border: 2px solid ${color.accent};"
        >
          ${logoUrl
            ? `<img src="${logoUrl}" alt="${item.name}" class="w-3/4 h-3/4 object-contain rounded-sm sm:rounded-md" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><span class="text-[10px] sm:text-sm font-bold hidden items-center justify-center" style="color: ${color.accent};">${item.name.charAt(0)}</span>`
            : `<span class="text-[10px] sm:text-sm font-bold" style="color: ${color.accent};">${item.name.charAt(0)}</span>`
          }
        </div>
        <div class="beeswarm-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
          <div class="bg-slate-900 text-white text-[10px] sm:text-xs rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 whitespace-nowrap shadow-xl">
            <div class="font-semibold">${item.name}</div>
            <div class="text-slate-300">${formatCurrency(item.cost)}/mo</div>
          </div>
          <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // mobile needs tap-to-show-tooltip, then tap-again-to-edit
  // desktop just clicks to edit directly
  let activeTooltip = null;

  container.querySelectorAll(".beeswarm-dot").forEach(dot => {
    let tapCount = 0;
    let tapTimer = null;

    dot.addEventListener("click", e => {
      if (window.innerWidth < 500) {
        tapCount++;
        if (tapCount === 1) {
          if (activeTooltip && activeTooltip !== dot) {
            activeTooltip.classList.remove("active");
          }
          dot.classList.add("active");
          activeTooltip = dot;
          tapTimer = setTimeout(() => { tapCount = 0; }, 300);
        } else {
          clearTimeout(tapTimer);
          tapCount = 0;
          editSub(dot.dataset.id);
        }
      } else {
        editSub(dot.dataset.id);
      }
    });
  });

  container.addEventListener("click", e => {
    if (!e.target.closest(".beeswarm-dot") && activeTooltip) {
      activeTooltip.classList.remove("active");
      activeTooltip = null;
    }
  });
}

function extractDomain(url) {
  if (!url) return "";
  try {
    if (!url.startsWith("http")) url = "https://" + url;
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url.replace("www.", "");
  }
}
