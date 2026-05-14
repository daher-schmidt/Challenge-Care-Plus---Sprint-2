// navbar.js - injetado em todas as páginas internas
function renderNavbar(activePage) {
  const user = JSON.parse(localStorage.getItem('cc_user') || '{"nome":"Marcos"}');
  const inicial = user.nome ? user.nome[0].toUpperCase() : 'M';

  const pages = [
    { label: 'Dashboard', href: 'dashboard.html' },
    { label: 'Calendário', href: 'calendario.html' },
    { label: 'Smile Points', href: 'smile-points.html' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="cc-nav-link ${activePage === p.label ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('cc-navbar').innerHTML = `
    <div class="cc-logo-badge">Care<br>Contact</div>
    <div class="cc-nav-links d-none d-md-flex gap-1">${links}</div>
    <div class="cc-nav-user">
      <span class="cc-avatar">${inicial}</span>
      <span class="d-none d-sm-inline">${user.nome}</span>
      <a href="../index.html" class="btn btn-sm btn-outline-secondary ms-2" style="font-size:12px;font-weight:700;">Sair</a>
    </div>
  `;
}
