/**
 * Camada de medição sem identificador e sem dados pessoais.
 * Ela só envia eventos quando a Google tag oficial (gtag) for instalada.
 */
function trackEvent(eventName, parameters) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    page_path: window.location.pathname,
    ...parameters
  });
}

function trackPageView() {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title
  });
}

// Mede saídas para canais externos, sem registrar texto, telefone ou campos de formulário.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link) return;

  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin) {
    trackEvent('outbound_click', { link_domain: destination.hostname });
  }
});
