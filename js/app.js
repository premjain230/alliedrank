/**
 * AlliedRank - Core Application Logic
 * Interactive Search, Filters, Rankings, Dynamic Profile & Dock State
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initComparisonDock();
  
  // Page specific initializers
  if (document.getElementById('toolsListContainer')) {
    initToolsDirectory();
  }
  
  if (document.getElementById('toolProfileContainer')) {
    initToolProfilePage();
  }
  
  if (document.getElementById('categoriesGridContainer')) {
    initCategoriesOverview();
  }
});

/* -------------------------------------------------------------
   Mobile Navigation Toggle
------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* -------------------------------------------------------------
   Comparison Dock State & Management
------------------------------------------------------------- */
const COMPARE_STORAGE_KEY = 'alliedrank_compare_ids';

function getComparedIds() {
  try {
    const raw = localStorage.getItem(COMPARE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function setComparedIds(ids) {
  try {
    localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(ids.slice(0, 3)));
  } catch (e) {}
  renderComparisonDock();
  syncCheckboxes();
}

function toggleCompareTool(id) {
  let ids = getComparedIds();
  if (ids.includes(id)) {
    ids = ids.filter(item => item !== id);
  } else {
    if (ids.length >= 3) {
      alert("You can compare up to 3 educational tools simultaneously. Please deselect one to add another.");
      return;
    }
    ids.push(id);
  }
  setComparedIds(ids);
}

function renderComparisonDock() {
  const dock = document.getElementById('comparisonDock');
  if (!dock) return;
  
  const ids = getComparedIds();
  if (ids.length === 0) {
    dock.classList.remove('visible');
    return;
  }
  
  dock.classList.add('visible');
  const listContainer = document.getElementById('dockToolsList');
  const compareCountSpan = document.getElementById('dockCompareCount');
  const compareBtn = document.getElementById('dockCompareBtn');
  
  if (compareCountSpan) compareCountSpan.textContent = `(${ids.length}/3)`;
  if (compareBtn) {
    compareBtn.href = `compare.html?tools=${ids.join(',')}`;
  }
  
  if (listContainer) {
    listContainer.innerHTML = ids.map(id => {
      const tool = ALLIED_TOOLS.find(t => t.id === id);
      if (!tool) return '';
      return `
        <span class="dock-tool-chip">
          ${tool.name}
          <button type="button" class="dock-remove-btn" onclick="toggleCompareTool('${tool.id}')" title="Remove ${tool.name}">✕</button>
        </span>
      `;
    }).join('');
  }
}

function syncCheckboxes() {
  const ids = getComparedIds();
  document.querySelectorAll('.tool-compare-cb').forEach(cb => {
    cb.checked = ids.includes(cb.dataset.id);
  });
}

function initComparisonDock() {
  renderComparisonDock();
  const clearBtn = document.getElementById('dockClearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      setComparedIds([]);
    });
  }
}

/* -------------------------------------------------------------
   Tools Directory (Search, Filter, Sort, Render)
------------------------------------------------------------- */
function initToolsDirectory() {
  const container = document.getElementById('toolsListContainer');
  const searchInput = document.getElementById('toolSearchInput');
  const sortSelect = document.getElementById('toolSortSelect');
  const tabPills = document.querySelectorAll('.category-tab-pills .tab-pill');
  const countBadge = document.getElementById('filteredCountBadge');
  
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'rank-asc';

  // Read URL params if any
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('category')) {
    currentCategory = urlParams.get('category');
  }
  if (urlParams.has('q')) {
    searchQuery = urlParams.get('q').trim();
    if (searchInput) searchInput.value = searchQuery;
  }
  if (urlParams.has('sort')) {
    currentSort = urlParams.get('sort');
    if (sortSelect) sortSelect.value = currentSort;
  }

  // Set active tab pill
  tabPills.forEach(pill => {
    if (pill.dataset.category === currentCategory) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
    
    pill.addEventListener('click', () => {
      tabPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  function applyFilters() {
    let filtered = ALLIED_TOOLS.filter(tool => {
      // Category match
      const matchesCategory = (currentCategory === 'all') || tool.categories.includes(currentCategory);
      
      // Search match
      let matchesSearch = true;
      if (searchQuery) {
        const textBank = `${tool.name} ${tool.tagline} ${tool.shortDesc} ${tool.categories.join(' ')} ${tool.examsCovered.join(' ')} ${tool.boardsCovered.join(' ')}`.toLowerCase();
        matchesSearch = textBank.includes(searchQuery);
      }
      
      return matchesCategory && matchesSearch;
    });

    // Sorting
    filtered.sort((a, b) => {
      if (currentSort === 'rank-asc') return a.rank - b.rank;
      if (currentSort === 'rating-desc') return b.scores.overall - a.scores.overall;
      if (currentSort === 'curriculum-desc') return b.scores.curriculum - a.scores.curriculum;
      if (currentSort === 'pedagogy-desc') return b.scores.pedagogy - a.scores.pedagogy;
      if (currentSort === 'name-asc') return a.name.localeCompare(b.name);
      return a.rank - b.rank;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Platforms Found`;
    }

    renderToolCards(filtered, container);
    syncCheckboxes();
  }

  applyFilters();
}

function renderToolCards(tools, container) {
  if (!container) return;
  
  if (tools.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: #FFFFFF; border: 1px dashed var(--border-medium); border-radius: var(--radius-lg);">
        <p style="font-size: 1.2rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">No matching educational tools found</p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px;">Try adjusting your search terms or clearing category filters.</p>
        <button class="btn btn-secondary btn-sm" onclick="location.href='rankings.html'">Reset All Filters</button>
      </div>
    `;
    return;
  }

  const comparedIds = getComparedIds();

  container.innerHTML = tools.map(tool => {
    const isCompared = comparedIds.includes(tool.id);
    const rankClass = tool.rank === 1 ? 'rank-1' : (tool.rank === 2 ? 'rank-2' : (tool.rank === 3 ? 'rank-3' : ''));
    
    // Category badges
    const categoryTags = tool.categoryLabels.slice(0, 3).map(c => `
      <span class="tool-tag-pill">${c}</span>
    `).join('');

    // Affiliation & Rank Badges
    let badgesHtml = '';
    if (tool.rank === 1) {
      badgesHtml += `<span class="badge-rank-one">★ Rank #1 Overall</span>`;
    }
    if (tool.affiliated) {
      badgesHtml += `<span class="badge-affiliated" title="Learning Allied is an affiliated venture of AlliedRank">Affiliated Partner</span>`;
    }
    if (tool.editorChoice) {
      badgesHtml += `<span class="badge-editor">${tool.badgeText}</span>`;
    }

    return `
      <article class="tool-card ${tool.affiliated ? 'affiliated-card' : ''}" id="tool-${tool.id}">
        <div class="tool-rank-badge ${rankClass}">
          <span>#${tool.rank}</span>
        </div>
        
        <div class="tool-main-info">
          <div class="tool-header-row">
            <a href="tool.html?id=${tool.id}" class="tool-name-link">${tool.name}</a>
            ${badgesHtml}
          </div>
          <p class="tool-tagline">${tool.tagline}</p>
          <div class="tool-tags-row">
            ${categoryTags}
          </div>
        </div>

        <div class="tool-metrics-column">
          <div class="metric-pill-item">
            <span class="metric-pill-label">Pricing:</span>
            <span class="metric-pill-value">${tool.pricing.startingPrice}</span>
          </div>
          <div class="metric-pill-item">
            <span class="metric-pill-label">Curriculum:</span>
            <span class="metric-pill-value">${tool.scores.curriculum} / 10</span>
          </div>
          <div class="metric-pill-item">
            <span class="metric-pill-label">Tutor Mode:</span>
            <span class="metric-pill-value">${tool.stats.tutorMode}</span>
          </div>
        </div>

        <div class="tool-actions-column">
          <div class="tool-card-score" title="AlliedRank Verified Score: ${tool.scores.overall}/10">
            <span class="card-score-num">${tool.scores.overall.toFixed(1)}</span>
            <span class="card-score-total">/10</span>
          </div>
          
          <div style="display: flex; gap: 8px; width: 100%;">
            <a href="tool.html?id=${tool.id}" class="btn btn-secondary btn-sm" style="flex: 1; text-align: center;">View Profile</a>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Visit ${tool.name}">Visit ↗</a>
          </div>

          <label class="compare-checkbox-label">
            <input type="checkbox" class="tool-compare-cb" data-id="${tool.id}" ${isCompared ? 'checked' : ''} onchange="toggleCompareTool('${tool.id}')">
            Compare
          </label>
        </div>
      </article>
    `;
  }).join('');
}

/* -------------------------------------------------------------
   Tool Detail Profile Page (tool.html?id=xxx)
------------------------------------------------------------- */
function initToolProfilePage() {
  const container = document.getElementById('toolProfileContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const toolId = urlParams.get('id') || 'learning-allied'; // default to top tool if unset
  
  const tool = ALLIED_TOOLS.find(t => t.id === toolId);
  if (!tool) {
    container.innerHTML = `
      <div class="container" style="padding: 80px 0; text-align: center;">
        <h2>Tool Not Found</h2>
        <p style="margin: 16px 0; color: var(--text-secondary);">The requested educational tool profile does not exist or has been moved.</p>
        <a href="rankings.html" class="btn btn-primary">Browse All Tools</a>
      </div>
    `;
    return;
  }

  // Update Page Title
  document.title = `${tool.name} Review, Ratings & Benchmark (${new Date().getFullYear()}) | AlliedRank`;

  // Render Breadcrumb
  const breadcrumb = document.getElementById('profileBreadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span class="breadcrumb-separator">/</span>
      <a href="rankings.html">Rankings</a>
      <span class="breadcrumb-separator">/</span>
      <span style="color: var(--text-primary); font-weight: 500;">${tool.name}</span>
    `;
  }

  container.innerHTML = `
    <!-- Hero Profile Header -->
    <header class="tool-profile-header">
      <div class="container">
        <div class="tool-profile-hero-grid">
          <div class="profile-avatar-large" style="background: ${tool.brandColor};">
            ${tool.logoChar}
          </div>
          
          <div class="profile-title-area">
            <h1>
              ${tool.name}
              ${tool.rank === 1 ? '<span class="badge-rank-one">Rank #1 Leaderboard</span>' : `<span class="badge-rank-one">Rank #${tool.rank}</span>`}
              ${tool.affiliated ? '<span class="badge-affiliated">Affiliated Partner</span>' : ''}
            </h1>
            <p class="profile-tagline">${tool.tagline}</p>
            <div class="profile-badges-row">
              ${tool.categoryLabels.map(cat => `<span class="tool-tag-pill">${cat}</span>`).join('')}
              <span class="tool-tag-pill" style="background: var(--brand-light); color: var(--brand-primary); font-weight: 600;">${tool.pricing.model}</span>
            </div>
          </div>

          <div class="profile-action-box">
            <div class="profile-score-display">
              <span class="profile-score-val">${tool.scores.overall.toFixed(1)}</span>
              <span class="profile-score-max">/10</span>
            </div>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 12px 24px; font-weight: 600;">
              Visit Official Website ↗
            </a>
            <button type="button" class="btn btn-secondary btn-sm" onclick="toggleCompareTool('${tool.id}')">
              + Add to Compare Matrix
            </button>
          </div>
        </div>

        ${tool.affiliated ? `
          <div class="featured-disclosure-callout" style="margin-top: 24px; background: #FFFBEB; border: 1px solid #FDE68A; color: #92400E;">
            <strong>Affiliated Disclosure:</strong> ${tool.name} is developed by an affiliated sister venture of AlliedRank. In strict accordance with our public <a href="disclosure.html" style="color: #B45309; text-decoration: underline;">Editorial Charter</a>, this tool was benchmarked using the identical 5-pillar rubric and verifiable syllabus test sets as every independent platform.
          </div>
        ` : ''}
      </div>
    </header>

    <!-- Main Content & Rubric Breakdown -->
    <div class="profile-content-section">
      <div class="container">
        <div class="profile-layout-grid">
          
          <!-- Left Column -->
          <main class="profile-main-col">
            
            <!-- Overview Box -->
            <section class="content-box">
              <h2 class="content-box-title">Editorial Overview</h2>
              <div class="prose-text">
                <p>${tool.fullDesc}</p>
                <p><strong>Editorial Verdict:</strong> ${tool.editorialRationale}</p>
                <p style="background: var(--bg-tertiary); padding: 12px 16px; border-radius: var(--radius-md); font-size: 0.92rem;">
                  <strong>Verifiable Evidence:</strong> ${tool.verifiableCriteria}
                </p>
              </div>
            </section>

            <!-- Pros & Cons -->
            <section class="content-box">
              <h2 class="content-box-title">Strengths & Limitations</h2>
              <div class="pros-cons-grid">
                <div class="pro-card">
                  <div class="pro-con-title pro">
                    <span>✓</span> Verified Strengths
                  </div>
                  <ul class="pro-con-list">
                    ${tool.pros.map(p => `<li class="pro-con-item pro"><span>•</span> <span>${p}</span></li>`).join('')}
                  </ul>
                </div>

                <div class="con-card">
                  <div class="con-con-title con">
                    <span>✕</span> Potential Drawbacks
                  </div>
                  <ul class="pro-con-list">
                    ${tool.cons.map(c => `<li class="pro-con-item con"><span>•</span> <span>${c}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </section>

            <!-- Key AI Features -->
            <section class="content-box">
              <h2 class="content-box-title">Key AI Capabilities</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
                ${tool.aiFeatures.map(f => `
                  <div style="background: var(--bg-subtle); border: 1px solid var(--border-default); padding: 14px; border-radius: var(--radius-md);">
                    <div style="font-weight: 600; color: var(--text-primary); font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
                      <span style="color: var(--brand-primary);">⚡</span> ${f}
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

          </main>

          <!-- Right Sidebar -->
          <aside class="profile-sidebar-col">
            
            <!-- Rubric Scorecard -->
            <div class="rubric-breakdown-card">
              <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 4px;">5-Pillar Scorecard</h3>
              <p style="font-size: 0.82rem; color: var(--text-muted);">Audited against AlliedRank Evaluation Rubric</p>
              
              <div class="rubric-meter-list">
                <div class="rubric-meter-item">
                  <div class="meter-header">
                    <span class="subscore-label">Curriculum Alignment (25%)</span>
                    <span class="subscore-val">${tool.scores.curriculum} / 10</span>
                  </div>
                  <div class="meter-bar-track">
                    <div class="meter-bar-progress" style="width: ${tool.scores.curriculum * 10}%;"></div>
                  </div>
                </div>

                <div class="rubric-meter-item">
                  <div class="meter-header">
                    <span class="subscore-label">Pedagogical Rigor (25%)</span>
                    <span class="subscore-val">${tool.scores.pedagogy} / 10</span>
                  </div>
                  <div class="meter-bar-track">
                    <div class="meter-bar-progress" style="width: ${tool.scores.pedagogy * 10}%;"></div>
                  </div>
                </div>

                <div class="rubric-meter-item">
                  <div class="meter-header">
                    <span class="subscore-label">AI Interactivity (20%)</span>
                    <span class="subscore-val">${tool.scores.interactivity} / 10</span>
                  </div>
                  <div class="meter-bar-track">
                    <div class="meter-bar-progress" style="width: ${tool.scores.interactivity * 10}%;"></div>
                  </div>
                </div>

                <div class="rubric-meter-item">
                  <div class="meter-header">
                    <span class="subscore-label">Accessibility & Pricing (15%)</span>
                    <span class="subscore-val">${tool.scores.accessibility} / 10</span>
                  </div>
                  <div class="meter-bar-track">
                    <div class="meter-bar-progress" style="width: ${tool.scores.accessibility * 10}%;"></div>
                  </div>
                </div>

                <div class="rubric-meter-item">
                  <div class="meter-header">
                    <span class="subscore-label">Safety & Privacy (15%)</span>
                    <span class="subscore-val">${tool.scores.safety} / 10</span>
                  </div>
                  <div class="meter-bar-track">
                    <div class="meter-bar-progress emerald" style="width: ${tool.scores.safety * 10}%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fast Specs Box -->
            <div class="content-box">
              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;">Platform Specifications</h3>
              <ul class="spec-list">
                <li class="spec-item">
                  <span class="spec-key">Pricing Model</span>
                  <span class="spec-val">${tool.pricing.model}</span>
                </li>
                <li class="spec-item">
                  <span class="spec-key">Starting Price</span>
                  <span class="spec-val">${tool.pricing.startingPrice}</span>
                </li>
                <li class="spec-item">
                  <span class="spec-key">Response Speed</span>
                  <span class="spec-val">${tool.stats.responseTime}</span>
                </li>
                <li class="spec-item">
                  <span class="spec-key">Tutor Architecture</span>
                  <span class="spec-val">${tool.stats.tutorMode}</span>
                </li>
                <li class="spec-item">
                  <span class="spec-key">Offline Functionality</span>
                  <span class="spec-val">${tool.offlineSupport}</span>
                </li>
              </ul>
            </div>

            <!-- Target Exams Box -->
            <div class="content-box">
              <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px;">Exams & Boards Covered</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
                ${tool.examsCovered.map(ex => `<span class="tool-tag-pill" style="background: #EEF2FF; color: #4338CA; font-weight: 600;">${ex}</span>`).join('')}
              </div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 600;">Recognized Boards:</p>
              <ul style="padding-left: 18px; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6;">
                ${tool.boardsCovered.map(b => `<li>${b}</li>`).join('')}
              </ul>
            </div>

          </aside>
        </div>
      </div>
    </div>
  `;
}

/* -------------------------------------------------------------
   Categories Overview Grid (categories.html)
------------------------------------------------------------- */
function initCategoriesOverview() {
  const container = document.getElementById('categoriesGridContainer');
  if (!container) return;

  const entries = Object.entries(CATEGORIES_METADATA).filter(([k]) => k !== 'all');
  
  container.innerHTML = entries.map(([slug, meta]) => {
    // Count tools in this category
    const toolCount = ALLIED_TOOLS.filter(t => t.categories.includes(slug)).length;
    
    return `
      <div class="category-card">
        <div>
          <div class="cat-card-header">
            <div class="cat-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="cat-title">${meta.name}</h3>
          </div>
          <p class="cat-desc">${meta.description}</p>
        </div>
        <div class="cat-footer">
          <span>${toolCount} Audited Tools</span>
          <a href="rankings.html?category=${slug}" style="display: inline-flex; align-items: center; gap: 4px;">Explore →</a>
        </div>
      </div>
    `;
  }).join('');
}
