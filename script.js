(function () {
  const cfg = window.EVENT_CONFIG;
  if (!cfg) return;

  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
  }

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  };

  setText('event-date', cfg.event.dateLabel);
  setText('event-time', cfg.event.timeLabel);

  const ICONS = {
    video:
      '<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="5.5" width="13.5" height="13" rx="3"/><path d="m16 10 5.5-3v10L16 14"/></svg>',
    folder:
      '<svg viewBox="0 0 24 24" fill="none"><path d="M2.5 6.5a2 2 0 0 1 2-2H9l2 2h8.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="m7.5 12 3 3 6-6"/></svg>',
    image:
      '<svg viewBox="0 0 24 24" fill="none"><rect x="2.5" y="3.5" width="19" height="17" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 3.5 3 3.5-4 6 6"/></svg>',
    camera:
      '<svg viewBox="0 0 24 24" fill="none"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8l1.4-2h5.2L16 6h1.5A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-9Z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    schedule:
      '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M7 2.5v4M17 2.5v4M3 9.5h18M7.5 13.5h3.5M7.5 17h7.5"/></svg>',
  };

  const linkGrid = document.getElementById('link-grid');
  if (linkGrid && Array.isArray(cfg.resources)) {
    linkGrid.innerHTML = '';

    cfg.resources.forEach((item) => {
      const hasUrl = Boolean(item.url && item.url.trim() && item.url.trim() !== '#');
      const card = document.createElement('a');
      card.className = 'link-card';
      if (!hasUrl) card.classList.add('is-pending');

      card.href = hasUrl ? item.url.trim() : '#';
      if (hasUrl) {
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }
      card.setAttribute(
        'aria-label',
        hasUrl ? `Buka ${item.label}` : `${item.label} (tautan segera tersedia)`
      );

      const descHtml = item.subtitle ? '<span class="card-desc"></span>' : '';

      card.innerHTML = `
        <span class="card-icon" aria-hidden="true">${ICONS[item.icon] || ICONS.folder}</span>
        <span class="card-body">
          <span class="card-label"></span>
          ${descHtml}
        </span>
        <span class="card-trailing" aria-hidden="true">
          ${
            hasUrl
              ? '<span class="card-arrow">↗</span>'
              : '<span class="card-badge-soon">Segera</span>'
          }
        </span>
      `;

      card.querySelector('.card-label').textContent = item.label;
      if (item.subtitle) {
        card.querySelector('.card-desc').textContent = item.subtitle;
      }

      if (!hasUrl) {
        card.addEventListener('click', (event) => {
          event.preventDefault();
          card.classList.remove('is-nudged');
          void card.offsetWidth;
          card.classList.add('is-nudged');
          showToast(`Tautan ${item.label} akan segera tersedia.`);
        });
      }

      linkGrid.appendChild(card);
    });
  }
})();
