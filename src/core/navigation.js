/** Roteamento SPA com URLs compartilháveis. */
const routes = {
  '/': { page: 'home' }, '/home': { page: 'home' }, '/sobre': { page: 'sobre' },
  '/formacao/proposta': { page: 'proposta', module: 'proposta' },
  '/formacao/reforco-formativo': { page: 'proposta', module: 'reforco' },
  '/formacao/educacao-infantil': { page: 'proposta', module: 'infantil' },
  '/formacao/educacao-bilingue': { page: 'proposta', module: 'bilingue' },
  '/admissao': { page: 'admissao' }, '/vagas': { page: 'faca-parte' }, '/contato': { page: 'contato' }
};
const pageRoutes = { home: '/home', sobre: '/sobre', proposta: '/formacao/proposta', admissao: '/admissao', 'faca-parte': '/vagas', contato: '/contato' };
const formacaoRoutes = { proposta: '/formacao/proposta', reforco: '/formacao/reforco-formativo', infantil: '/formacao/educacao-infantil', bilingue: '/formacao/educacao-bilingue' };

function normalizePath(pathname) { return (pathname.replace(/\/+$/, '') || '/').toLowerCase(); }
function resolveRoute(pathname) { return routes[normalizePath(pathname)] || routes['/']; }

function renderRoute(route, shouldScroll) {
  if (typeof updateSeoForPath === 'function') updateSeoForPath(window.location.pathname);
  document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const targetSection = document.getElementById('page-' + route.page);
  const targetNav = document.getElementById('nav-' + route.page);
  if (targetSection) targetSection.classList.add('active');
  if (targetNav) targetNav.classList.add('active');
  if (route.page === 'proposta' && typeof selectFormacaoModule === 'function') selectFormacaoModule(route.module || 'proposta');
  if (typeof trackPageView === 'function') trackPageView();
  if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  updateHeaderCta();
}

function navigateTo(pageId, formacaoModule) {
  const path = pageId === 'proposta' && formacaoModule ? formacaoRoutes[formacaoModule] : pageRoutes[pageId];
  if (!path) return;
  if (window.location.protocol !== 'file:' && normalizePath(window.location.pathname) !== path) window.history.pushState({}, '', path);
  renderRoute(resolveRoute(path), true);
}

function loadRouteFromUrl() { renderRoute(resolveRoute(window.location.pathname), false); }
window.addEventListener('popstate', loadRouteFromUrl);

// Fecha o menu de forma\u00e7\u00e3o ap\u00f3s uma escolha. Ele s\u00f3 volta a abrir quando o
// cursor sair do conjunto e entrar novamente sobre o t\u00edtulo ou a lista.
document.addEventListener('click', event => {
  const submenuLink = event.target.closest('.nav-submenu a');
  if (!submenuLink) return;

  const dropdown = submenuLink.closest('.nav-dropdown');
  if (!dropdown) return;
  dropdown.classList.add('is-closed-after-selection');
  submenuLink.blur();
});

document.addEventListener('pointerout', event => {
  const dropdown = event.target.closest('.nav-dropdown');
  if (!dropdown || dropdown.contains(event.relatedTarget)) return;
  dropdown.classList.remove('is-closed-after-selection');
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 50);
  updateHeaderCta();
});

function updateHeaderCta() {
  const ctaBtn = document.getElementById('header-cta-btn');
  const homePage = document.getElementById('page-home');
  if (!ctaBtn || !homePage) return;
  if (!homePage.classList.contains('active')) return ctaBtn.classList.add('is-visible');
  const heroEl = document.querySelector('.hero-home');
  const header = document.getElementById('main-header');
  if (!heroEl || !header) return;
  ctaBtn.classList.toggle('is-visible', heroEl.getBoundingClientRect().bottom <= header.offsetHeight);
}
