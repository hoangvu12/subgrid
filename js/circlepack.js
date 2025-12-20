// attempt at d3's circle packing without d3
// ref: https://observablehq.com/@d3/circle-packing

class CirclePack {
  constructor(width, height, padding = 20) {
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.centerX = width / 2;
    this.centerY = height / 2;
  }

  layout(items) {
    if (!items.length) return [];

    // big circles are harder to fit later, so place them first
    const sorted = [...items].sort((a, b) => b.cost - a.cost);

    const costs = sorted.map(d => d.cost);
    const minCost = Math.min(...costs);
    const maxCost = Math.max(...costs);

    const availableArea = Math.min(this.width, this.height) * 0.45;
    const minRadius = 20;
    const maxRadius = Math.min(80, availableArea * 0.4);

    const withRadius = sorted.map(item => {
      // sqrt because circle area grows with r², not r
      const ratio = maxCost === minCost ? 0.5 : (item.cost - minCost) / (maxCost - minCost);
      const radius = minRadius + Math.sqrt(ratio) * (maxRadius - minRadius);
      return { ...item, radius };
    });

    return this._packCircles(withRadius);
  }

  _packCircles(circles) {
    if (circles.length === 0) return [];
    if (circles.length === 1) {
      return [{ ...circles[0], x: this.centerX, y: this.centerY }];
    }

    const placed = [];

    placed.push({
      ...circles[0],
      x: this.centerX,
      y: this.centerY
    });

    placed.push({
      ...circles[1],
      x: this.centerX + circles[0].radius + circles[1].radius + 4,
      y: this.centerY
    });

    for (let i = 2; i < circles.length; i++) {
      const circle = circles[i];
      const pos = this._findBestPosition(circle.radius, placed);
      placed.push({ ...circle, x: pos.x, y: pos.y });
    }

    return this._centerPack(placed);
  }

  _findBestPosition(radius, placed) {
    // prefer positions closer to center for a tighter pack
    let bestPos = null;
    let bestDist = Infinity;

    for (let i = 0; i < placed.length; i++) {
      for (let j = i + 1; j < placed.length; j++) {
        const positions = this._tangentPositions(placed[i], placed[j], radius);

        for (const pos of positions) {
          if (!this._hasCollision(pos.x, pos.y, radius, placed)) {
            const dist = Math.sqrt(
              Math.pow(pos.x - this.centerX, 2) +
              Math.pow(pos.y - this.centerY, 2)
            );
            if (dist < bestDist) {
              bestDist = dist;
              bestPos = pos;
            }
          }
        }
      }
    }

    // tangent-to-two failed, try tangent-to-one at fixed angles
    if (!bestPos) {
      for (const p of placed) {
        const angles = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
        for (const angle of angles) {
          const dist = p.radius + radius + 4;
          const x = p.x + Math.cos(angle) * dist;
          const y = p.y + Math.sin(angle) * dist;

          if (!this._hasCollision(x, y, radius, placed)) {
            const centerDist = Math.sqrt(
              Math.pow(x - this.centerX, 2) +
              Math.pow(y - this.centerY, 2)
            );
            if (centerDist < bestDist) {
              bestDist = centerDist;
              bestPos = { x, y };
            }
          }
        }
      }
    }

    // shouldn't happen, but just in case
    if (!bestPos) {
      bestPos = { x: this.centerX, y: this.centerY + 100 };
    }

    return bestPos;
  }

  _tangentPositions(c1, c2, r) {
    const d = Math.sqrt(Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y, 2));
    const r1 = c1.radius + r + 4; // 4px gap looks cleaner than touching
    const r2 = c2.radius + r + 4;

    if (d > r1 + r2) return [];
    if (d < Math.abs(r1 - r2)) return [];

    const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
    const h2 = r1 * r1 - a * a;

    if (h2 < 0) return [];

    const h = Math.sqrt(h2);

    const px = c1.x + a * (c2.x - c1.x) / d;
    const py = c1.y + a * (c2.y - c1.y) / d;

    const dx = h * (c2.y - c1.y) / d;
    const dy = h * (c2.x - c1.x) / d;

    return [
      { x: px + dx, y: py - dy },
      { x: px - dx, y: py + dy }
    ];
  }

  _hasCollision(x, y, radius, placed) {
    const gap = 4;
    for (const p of placed) {
      const dist = Math.sqrt(Math.pow(x - p.x, 2) + Math.pow(y - p.y, 2));
      if (dist < radius + p.radius + gap) {
        return true;
      }
    }
    return false;
  }

  _centerPack(circles) {
    if (!circles.length) return circles;

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    for (const c of circles) {
      minX = Math.min(minX, c.x - c.radius);
      maxX = Math.max(maxX, c.x + c.radius);
      minY = Math.min(minY, c.y - c.radius);
      maxY = Math.max(maxY, c.y + c.radius);
    }

    const packWidth = maxX - minX;
    const packHeight = maxY - minY;
    const packCenterX = (minX + maxX) / 2;
    const packCenterY = (minY + maxY) / 2;

    const scaleX = (this.width - this.padding * 2) / packWidth;
    const scaleY = (this.height - this.padding * 2) / packHeight;
    const scale = Math.min(1, scaleX, scaleY);

    return circles.map(c => ({
      ...c,
      x: this.centerX + (c.x - packCenterX) * scale,
      y: this.centerY + (c.y - packCenterY) * scale,
      radius: c.radius * scale
    }));
  }
}

function renderCirclePack() {
  const container = document.getElementById("circlepack-container");
  if (!container || !subs.length) {
    if (container) {
      container.innerHTML = `
        <div class="flex items-center justify-center h-full text-slate-400">
          <p>Add subscriptions to see the circle pack</p>
        </div>
      `;
    }
    return;
  }

  const rect = container.getBoundingClientRect();
  const width = rect.width || 800;
  const height = rect.height || 600;

  const items = subs.map(sub => ({ ...sub, cost: toMonthly(sub) }));
  const packer = new CirclePack(width, height, 30);
  const positioned = packer.layout(items);

  let html = "";

  positioned.forEach(item => {
    const color = getColor(item.color);
    const size = item.radius * 2;
    const domain = extractDomain(item.url);
    const logoUrl = domain
      ? `https://img.logo.dev/${domain}?token=pk_KuI_oR-IQ1-fqpAfz3FPEw&size=100&retina=true&format=png`
      : null;

    // these thresholds were tuned by eye
    const showName = item.radius > 28;
    const showPrice = item.radius > 38;

    const fontSize = Math.max(8, Math.min(item.radius * 0.22, 12));
    const priceSize = Math.max(9, Math.min(item.radius * 0.26, 14));
    const logoSize = Math.max(20, Math.min(item.radius * 0.7, 50));

    let content = "";

    const logoHtml = logoUrl ? `
      <img src="${logoUrl}" alt="${item.name}"
        class="object-contain rounded-md shrink-0"
        style="width: ${logoSize}px; height: ${logoSize}px;"
        onerror="this.style.display='none';" />
    ` : "";

    if (showPrice && showName) {
      content = `
        <div class="flex flex-col items-center justify-center gap-0.5 text-center px-1">
          ${logoHtml}
          <div class="font-semibold text-slate-800 truncate max-w-full" style="font-size: ${fontSize}px;">${item.name}</div>
          <div class="font-bold text-slate-900" style="font-size: ${priceSize}px;">${formatCurrencyShort(item.cost)}</div>
        </div>
      `;
    } else if (showName) {
      content = `
        <div class="flex flex-col items-center justify-center gap-0.5 text-center px-1">
          ${logoHtml}
          <div class="font-semibold text-slate-800 truncate max-w-full" style="font-size: ${fontSize}px;">${item.name}</div>
        </div>
      `;
    } else if (logoUrl) {
      content = `
        <img src="${logoUrl}" alt="${item.name}"
          class="object-contain rounded-sm"
          style="width: ${logoSize}px; height: ${logoSize}px;"
          onerror="this.parentElement.innerHTML='<span style=\\'font-size:${fontSize}px\\' class=\\'font-bold text-slate-700\\'>${item.name.charAt(0)}</span>';" />
      `;
    } else {
      content = `<span class="font-bold text-slate-700" style="font-size: ${fontSize}px;">${item.name.charAt(0)}</span>`;
    }

    html += `
      <div
        class="circlepack-bubble absolute cursor-pointer group transition-transform duration-200 hover:scale-105"
        data-id="${item.id}"
        style="left: ${item.x}px; top: ${item.y}px; width: ${size}px; height: ${size}px; transform: translate(-50%, -50%);"
      >
        <div
          class="w-full h-full rounded-full shadow-lg flex items-center justify-center overflow-hidden transition-shadow hover:shadow-xl"
          style="background: linear-gradient(135deg, ${color.bg} 0%, ${color.accent} 100%); border: 3px solid ${color.accent};"
        >
          ${content}
        </div>
        <div class="circlepack-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
          <div class="bg-slate-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
            <div class="font-semibold">${item.name}</div>
            <div class="text-slate-300">${formatCurrency(item.cost)}/mo</div>
          </div>
          <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // mobile: tap once to show tooltip, tap again to edit
  // desktop: just click to edit
  let activeTooltip = null;

  container.querySelectorAll(".circlepack-bubble").forEach(bubble => {
    let tapCount = 0;
    let tapTimer = null;

    bubble.addEventListener("click", e => {
      if (window.innerWidth < 500) {
        tapCount++;
        if (tapCount === 1) {
          if (activeTooltip && activeTooltip !== bubble) {
            activeTooltip.classList.remove("active");
          }
          bubble.classList.add("active");
          activeTooltip = bubble;
          tapTimer = setTimeout(() => { tapCount = 0; }, 300);
        } else {
          clearTimeout(tapTimer);
          tapCount = 0;
          editSub(bubble.dataset.id);
        }
      } else {
        editSub(bubble.dataset.id);
      }
    });
  });

  container.addEventListener("click", e => {
    if (!e.target.closest(".circlepack-bubble") && activeTooltip) {
      activeTooltip.classList.remove("active");
      activeTooltip = null;
    }
  });
}
