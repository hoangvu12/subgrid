/*
 * squarified treemap layout
 * based on the bruls et al. algorithm
 * https://www.win.tue.nl/~vanwijk/stm.pdf
 */
class Treemap {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cellGap = 4; // gap between cells in px
  }

  layout(items) {
    if (items.length === 0) return [];

    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].val;
    }

    const normalized = [];
    const totalArea = this.width * this.height;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      normalized.push({
        id: item.id,
        name: item.name,
        url: item.url,
        color: item.color,
        price: item.price,
        currency: item.currency,
        cycle: item.cycle,
        cost: item.cost,
        val: item.val,
        idx: item.idx,
        area: (item.val / total) * totalArea
      });
    }

    const rectangles = [];
    this._squarify(normalized, [], 0, 0, this.width, this.height, rectangles);
    return rectangles;
  }

  // recursive squarification - tries to make cells as square as possible
  _squarify(remaining, currentRow, x, y, w, h, output) {
    if (remaining.length === 0) {
      this._layoutRow(currentRow, x, y, w, h, output);
      return;
    }

    const next = remaining[0];
    const withNext = currentRow.concat([next]);

    if (currentRow.length === 0 || this._worstRatio(currentRow, w, h) >= this._worstRatio(withNext, w, h)) {
      this._squarify(remaining.slice(1), withNext, x, y, w, h, output);
    } else {
      const bounds = this._layoutRow(currentRow, x, y, w, h, output);
      this._squarify(remaining, [], bounds.nx, bounds.ny, bounds.nw, bounds.nh, output);
    }
  }

  _worstRatio(row, w, h) {
    if (row.length === 0) return Infinity;

    let areaSum = 0;
    for (let i = 0; i < row.length; i++) {
      areaSum += row[i].area;
    }

    const shortSide = Math.min(w, h);
    const rowThickness = areaSum / shortSide;

    let worstRatio = 0;
    for (let i = 0; i < row.length; i++) {
      const itemLength = row[i].area / rowThickness;
      const ratio = Math.max(rowThickness / itemLength, itemLength / rowThickness);
      if (ratio > worstRatio) {
        worstRatio = ratio;
      }
    }

    return worstRatio;
  }

  _layoutRow(row, x, y, w, h, output) {
    if (row.length === 0) {
      return { nx: x, ny: y, nw: w, nh: h };
    }

    let areaSum = 0;
    for (let i = 0; i < row.length; i++) {
      areaSum += row[i].area;
    }

    const horizontal = (w >= h);
    const shortSide = horizontal ? h : w;
    const thickness = areaSum / shortSide;
    const gap = this.cellGap;

    let offset = 0;

    for (let i = 0; i < row.length; i++) {
      const item = row[i];
      const length = item.area / thickness;

      if (horizontal) {
        output.push({
          id: item.id,
          name: item.name,
          url: item.url,
          color: item.color,
          price: item.price,
          currency: item.currency,
          cycle: item.cycle,
          cost: item.cost,
          val: item.val,
          idx: item.idx,
          area: item.area,
          x: x + gap / 2,
          y: y + offset + gap / 2,
          w: thickness - gap,
          h: length - gap
        });
      } else {
        output.push({
          id: item.id,
          name: item.name,
          url: item.url,
          color: item.color,
          price: item.price,
          currency: item.currency,
          cycle: item.cycle,
          cost: item.cost,
          val: item.val,
          idx: item.idx,
          area: item.area,
          x: x + offset + gap / 2,
          y: y + gap / 2,
          w: length - gap,
          h: thickness - gap
        });
      }

      offset += length;
    }

    if (horizontal) {
      return { nx: x + thickness, ny: y, nw: w - thickness, nh: h };
    } else {
      return { nx: x, ny: y + thickness, nw: w, nh: h - thickness };
    }
  }
}

function renderGrid() {
  const gridEl = document.getElementById("bento-grid");
  const totalDisplay = document.getElementById("step-2-total");
  const yearlyDisplay = document.getElementById("step-2-yearly");
  const searchSectionGrid = document.getElementById("search-section-grid");
  const searchResultsInfoGrid = document.getElementById("search-results-info-grid");

  // Use filtered subscriptions if search is active
  const displaySubs = (typeof window.searchQueryGrid !== 'undefined' && window.searchQueryGrid) ? window.filteredSubsGrid : subs;

  let monthlyTotal = 0;
  const items = [];

  // Show/hide search section
  if (subs.length > 0 && searchSectionGrid) {
    searchSectionGrid.classList.remove("hidden");
  } else if (searchSectionGrid) {
    searchSectionGrid.classList.add("hidden");
  }

  // Show search results info
  if (window.searchQueryGrid && searchResultsInfoGrid) {
    searchResultsInfoGrid.classList.remove("hidden");
    if (displaySubs.length === 0) {
      searchResultsInfoGrid.textContent = `No subscriptions found for "${window.searchQueryGrid}"`;
      searchResultsInfoGrid.classList.add("text-red-500", "dark:text-red-400");
      searchResultsInfoGrid.classList.remove("text-slate-500", "dark:text-slate-400");
    } else {
      searchResultsInfoGrid.textContent = `Found ${displaySubs.length} of ${subs.length} subscriptions`;
      searchResultsInfoGrid.classList.remove("text-red-500", "dark:text-red-400");
      searchResultsInfoGrid.classList.add("text-slate-500", "dark:text-slate-400");
    }
  } else if (searchResultsInfoGrid) {
    searchResultsInfoGrid.classList.add("hidden");
  }

  for (let i = 0; i < displaySubs.length; i++) {
    const sub = displaySubs[i];
    const monthlyCost = toMonthly(sub);
    monthlyTotal += monthlyCost;

    items.push({
      id: sub.id,
      name: sub.name,
      url: sub.url,
      color: sub.color,
      price: sub.price,
      currency: sub.currency,
      cycle: sub.cycle,
      cost: monthlyCost
    });
  }

  items.sort(function(a, b) { return b.cost - a.cost; });

  totalDisplay.innerText = formatCurrency(monthlyTotal);
  yearlyDisplay.innerText = formatCurrency(monthlyTotal * 12);

  if (items.length === 0) {
    if (window.searchQueryGrid) {
      gridEl.innerHTML = '<div class="flex flex-col items-center justify-center h-full text-slate-400 dark:text-slate-500 p-8"><span class="iconify mb-3 h-12 w-12" data-icon="ph:magnifying-glass-bold"></span><p class="text-sm font-medium">No subscriptions found</p><p class="text-xs mt-1">Try a different search term</p></div>';
    } else {
      gridEl.innerHTML = '<div class="flex items-center justify-center h-full text-slate-400">Add subscriptions to see visualization</div>';
    }
    return;
  }

  const bounds = gridEl.getBoundingClientRect();
  const gridWidth = bounds.width || 600;
  const gridHeight = bounds.height || 450;

  const treemapData = [];
  for (let i = 0; i < items.length; i++) {
    treemapData.push({
      id: items[i].id,
      name: items[i].name,
      url: items[i].url,
      color: items[i].color,
      price: items[i].price,
      currency: items[i].currency,
      cycle: items[i].cycle,
      cost: items[i].cost,
      val: items[i].cost,
      idx: i
    });
  }

  const treemap = new Treemap(gridWidth, gridHeight);
  const cells = treemap.layout(treemapData);

  let html = "";

  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const percent = (cell.cost / monthlyTotal) * 100;
    const colorPalette = getColor(cell.color);

    const minDim = Math.min(cell.w, cell.h);
    const clampedPct = Math.max(3, Math.min(60, percent));

    const padding = Math.round(Math.max(6, Math.min(minDim * 0.08, 16)) + (clampedPct / 60) * 8);
    const borderRadius = Math.round(Math.max(6, Math.min(minDim * 0.12, 20)) + (clampedPct / 60) * 6);

    const innerWidth = cell.w - padding * 2;
    const innerHeight = cell.h - padding * 2;

    // font sizes - these formulas took some trial and error to get right
    const maxPriceFont = Math.min(Math.floor(innerWidth * 0.16), Math.floor(innerHeight * 0.28));
    const priceFont = Math.max(10, Math.min(12 + (clampedPct / 60) * 36, maxPriceFont, 48));
    const titleFont = Math.max(8, Math.min(9 + (clampedPct / 60) * 15, priceFont * 0.55, 24));
    const iconSize = Math.max(14, Math.min(18 + (clampedPct / 60) * 30, innerHeight * 0.3, innerWidth * 0.35, 48));

    const isMicro = minDim < 40 || (cell.w < 50 && cell.h < 50);
    const isTiny = minDim < 55 || (cell.w < 65 && cell.h < 65);
    const isSmall = minDim < 85 || cell.w < 95;

    let cellContent = "";

    if (isMicro) {
      const sz = Math.max(12, Math.min(iconSize, minDim * 0.5));
      cellContent = '<div class="flex items-center justify-center h-full w-full">' + iconHtml(cell, "w-[" + sz + "px] h-[" + sz + "px]") + '</div>';

    } else if (isTiny) {
      const sz = Math.max(14, Math.min(iconSize, minDim * 0.4));
      const ps = Math.max(9, Math.min(priceFont, 13, innerWidth * 0.16));
      cellContent = '<div class="flex flex-col items-center justify-center h-full w-full gap-1">';
      cellContent += iconHtml(cell, "w-[" + sz + "px] h-[" + sz + "px]");
      cellContent += '<div class="font-bold text-slate-900" style="font-size:' + ps + 'px">' + formatOriginalMonthlyShort(cell) + '</div>';
      cellContent += '</div>';

    } else if (isSmall) {
      const sz = Math.max(16, Math.min(iconSize, innerWidth * 0.35, innerHeight * 0.25));
      const ts = Math.max(8, Math.min(titleFont, 11, innerWidth * 0.12));
      const ps = Math.max(11, Math.min(priceFont, 18, innerWidth * 0.18));

      cellContent = '<div class="flex flex-col items-center justify-center h-full w-full gap-1 text-center">';
      cellContent += iconHtml(cell, "w-[" + sz + "px] h-[" + sz + "px]");
      cellContent += '<div class="min-w-0 w-full">';
      cellContent += '<div class="font-semibold text-slate-900 treemap-cell-name" style="font-size:' + ts + 'px">' + cell.name + '</div>';
      cellContent += '<div class="font-black text-slate-900" style="font-size:' + ps + 'px">' + formatOriginalMonthlyShort(cell) + '</div>';
      cellContent += '</div></div>';

    } else {
      const showPercentBadge = cell.w > 80 && cell.h > 70;
      const showYearlyEstimate = cell.h > 130 && cell.w > 110 && percent > 8;

      cellContent = '<div class="flex justify-between items-start">';
      cellContent += iconHtml(cell, "w-[" + iconSize + "px] h-[" + iconSize + "px]");
      if (showPercentBadge) {
        cellContent += '<span class="text-[10px] font-bold bg-white/70 px-2 py-1 rounded-full text-slate-700">' + Math.round(percent) + '%</span>';
      }
      cellContent += '</div>';
      cellContent += '<div class="mt-auto min-w-0">';
      cellContent += '<div class="font-bold text-slate-900 treemap-cell-name" style="font-size:' + titleFont + 'px">' + cell.name + '</div>';
      cellContent += '<div class="font-black text-slate-900 tracking-tight leading-none" style="font-size:' + priceFont + 'px">' + formatOriginalMonthly(cell) + '</div>';
      if (showYearlyEstimate) {
        cellContent += '<div class="text-xs font-medium text-slate-500 mt-1">~' + formatOriginalYearlyShort(cell) + '/yr</div>';
      }
      cellContent += '</div>';
    }

    html += '<div class="treemap-cell" data-id="' + cell.id + '" style="left:' + cell.x + 'px;top:' + cell.y + 'px;width:' + cell.w + 'px;height:' + cell.h + 'px;border-radius:' + borderRadius + 'px">';
    html += '<div class="treemap-cell-inner" style="background:linear-gradient(135deg,' + colorPalette.bg + ' 0%,' + colorPalette.accent + ' 100%);padding:' + padding + 'px;border-radius:' + Math.max(4, borderRadius - 3) + 'px">';
    html += cellContent;
    html += '</div></div>';
  }

  gridEl.innerHTML = html;
}

async function exportAsImage() {
  const exportContainer = document.getElementById("export-container");
  if (!exportContainer) return;

  const btn = event.target.closest("button");
  const originalHtml = btn.innerHTML;
  btn.innerHTML = '<span class="iconify h-5 w-5 animate-spin" data-icon="ph:spinner-bold"></span> Exporting...';
  btn.disabled = true;

  try {
    // using modern-screenshot library for this
    const pngUrl = await modernScreenshot.domToPng(exportContainer, {
      scale: 2, // 2x for retina
      backgroundColor: "#ffffff",
      style: {
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        borderRadius: "2.5rem",
        overflow: "hidden"
      },
      onCloneNode: function(node) {
        // force font family on all cloned elements
        // otherwise the screenshot sometimes uses weird fonts
        if (node.style) {
          node.style.fontFamily = "system-ui, -apple-system, sans-serif";
        }
        if (node.querySelectorAll) {
          var elements = node.querySelectorAll("*");
          for (var i = 0; i < elements.length; i++) {
            if (elements[i].style) {
              elements[i].style.fontFamily = "system-ui, -apple-system, sans-serif";
            }
          }
        }
        return node;
      },
      fetch: { bypassingCache: true }
    });

    var downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "subs-" + new Date().toISOString().split("T")[0] + ".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

  } catch (err) {
    console.error("export failed:", err);
    alert("Export failed: " + err.message);
  }

  btn.innerHTML = originalHtml;
  btn.disabled = false;
}
