/**
 * AlliedRank - Side-by-Side Comparison Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('compareMatrixContainer')) {
    initComparePage();
  }
});

function initComparePage() {
  const container = document.getElementById('compareMatrixContainer');
  const slot1 = document.getElementById('compareSelectSlot1');
  const slot2 = document.getElementById('compareSelectSlot2');
  const slot3 = document.getElementById('compareSelectSlot3');

  // Parse tools from URL or fallback to top 3
  const urlParams = new URLSearchParams(window.location.search);
  let toolIds = [];
  if (urlParams.has('tools')) {
    toolIds = urlParams.get('tools').split(',').map(s => s.trim()).filter(Boolean);
  }
  
  if (toolIds.length === 0) {
    toolIds = ['learning-allied', 'khan-academy', 'physics-wallah'];
  }

  // Populate Select Boxes
  [slot1, slot2, slot3].forEach((selectEl, index) => {
    if (!selectEl) return;
    
    // Fill options
    selectEl.innerHTML = ALLIED_TOOLS.map(tool => {
      const selected = toolIds[index] === tool.id ? 'selected' : '';
      return `<option value="${tool.id}" ${selected}>#${tool.rank} - ${tool.name}</option>`;
    }).join('');

    selectEl.addEventListener('change', () => {
      toolIds[index] = selectEl.value;
      updateCompareUrl(toolIds);
      renderMatrix(toolIds, container);
    });
  });

  renderMatrix(toolIds, container);
}

function updateCompareUrl(toolIds) {
  const newUrl = `${window.location.pathname}?tools=${toolIds.join(',')}`;
  window.history.replaceState(null, '', newUrl);
}

function renderMatrix(toolIds, container) {
  if (!container) return;

  const tools = toolIds.map(id => ALLIED_TOOLS.find(t => t.id === id)).filter(Boolean);
  if (tools.length === 0) return;

  const colWidth = `${Math.floor(75 / tools.length)}%`;

  let html = `
    <table class="compare-table">
      <thead>
        <tr>
          <th style="width: 25%;">Platform Dimension</th>
          ${tools.map(tool => `
            <th style="width: ${colWidth};">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <div style="width: 32px; height: 32px; border-radius: 6px; background: ${tool.brandColor}; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">
                  ${tool.logoChar}
                </div>
                <div>
                  <a href="tool.html?id=${tool.id}" style="color: var(--text-primary); font-weight: 700; font-size: 1.05rem;">${tool.name}</a>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Rank #${tool.rank} Overall</div>
                </div>
              </div>
              ${tool.affiliated ? '<span class="badge-affiliated" style="font-size: 0.7rem; padding: 2px 6px;">Affiliated Partner</span>' : ''}
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <!-- Overall Score -->
        <tr>
          <td class="compare-feature-label">AlliedRank Overall Score</td>
          ${tools.map(tool => `
            <td>
              <div style="display: flex; align-items: baseline; gap: 4px;">
                <span style="font-size: 1.4rem; font-weight: 800; color: var(--brand-primary);">${tool.scores.overall.toFixed(1)}</span>
                <span style="color: var(--text-subtle); font-size: 0.8rem;">/ 10</span>
              </div>
            </td>
          `).join('')}
        </tr>

        <!-- Pricing Model -->
        <tr>
          <td class="compare-feature-label">Pricing & Free Tier</td>
          ${tools.map(tool => `
            <td>
              <div style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem;">${tool.pricing.startingPrice}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${tool.pricing.summary}</div>
            </td>
          `).join('')}
        </tr>

        <!-- Curriculum Rigor Score -->
        <tr>
          <td class="compare-feature-label">Curriculum Alignment (25%)</td>
          ${tools.map(tool => `
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 700; font-size: 0.95rem;">${tool.scores.curriculum} / 10</span>
                <div style="flex: 1; height: 6px; background: var(--bg-tertiary); border-radius: 99px;">
                  <div style="height: 100%; width: ${tool.scores.curriculum * 10}%; background: var(--brand-primary); border-radius: 99px;"></div>
                </div>
              </div>
            </td>
          `).join('')}
        </tr>

        <!-- Pedagogical Rigor -->
        <tr>
          <td class="compare-feature-label">Pedagogy & Socratic Mode (25%)</td>
          ${tools.map(tool => `
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-weight: 700; font-size: 0.95rem;">${tool.scores.pedagogy} / 10</span>
                <div style="flex: 1; height: 6px; background: var(--bg-tertiary); border-radius: 99px;">
                  <div style="height: 100%; width: ${tool.scores.pedagogy * 10}%; background: #3B82F6; border-radius: 99px;"></div>
                </div>
              </div>
            </td>
          `).join('')}
        </tr>

        <!-- Tutor Architecture -->
        <tr>
          <td class="compare-feature-label">Tutor Architecture</td>
          ${tools.map(tool => `
            <td style="font-size: 0.88rem; font-weight: 500; color: var(--text-primary);">
              ${tool.stats.tutorMode}
            </td>
          `).join('')}
        </tr>

        <!-- Boards Alignment -->
        <tr>
          <td class="compare-feature-label">State & Central Boards</td>
          ${tools.map(tool => `
            <td>
              <ul style="padding-left: 16px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                ${tool.boardsCovered.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </td>
          `).join('')}
        </tr>

        <!-- Key Exams Supported -->
        <tr>
          <td class="compare-feature-label">Competitive Entrance Focus</td>
          ${tools.map(tool => `
            <td>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                ${tool.examsCovered.map(ex => `<span class="tool-tag-pill" style="font-size: 0.72rem;">${ex}</span>`).join('')}
              </div>
            </td>
          `).join('')}
        </tr>

        <!-- Offline Support -->
        <tr>
          <td class="compare-feature-label">Offline Study Access</td>
          ${tools.map(tool => `
            <td style="font-size: 0.85rem; color: var(--text-secondary);">
              ${tool.offlineSupport}
            </td>
          `).join('')}
        </tr>

        <!-- Actions -->
        <tr>
          <td class="compare-feature-label">Platform Link</td>
          ${tools.map(tool => `
            <td>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="text-align: center;">Visit Official Site ↗</a>
                <a href="tool.html?id=${tool.id}" class="btn btn-secondary btn-sm" style="text-align: center;">Full Review</a>
              </div>
            </td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}
