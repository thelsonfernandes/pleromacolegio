/**
 * Renderer do Protótipo `/novo`
 * Injeta os templates cadastrados em window.Components e window.Modules
 * nos respectivos slots de index.html e ativa a rota padrão.
 */
(function renderApp() {
  // Componentes Globais
  const slotHeader = document.getElementById('slot-header');
  const slotFooter = document.getElementById('slot-footer');
  const slotAppointmentModal = document.getElementById('slot-appointment-modal');
  const slotVideoModal = document.getElementById('slot-video-modal');

  if (slotHeader && window.Components && window.Components.header) {
    slotHeader.outerHTML = window.Components.header;
  }
  if (slotFooter && window.Components && window.Components.footer) {
    slotFooter.innerHTML = window.Components.footer;
  }
  if (slotAppointmentModal && window.Components && window.Components.appointmentModal) {
    slotAppointmentModal.innerHTML = window.Components.appointmentModal;
  }
  if (slotVideoModal && window.Components && window.Components.videoModal) {
    slotVideoModal.innerHTML = window.Components.videoModal;
  }

  // Módulos de Negócio (Abas SPA)
  const slots = {
    'slot-home': 'home',
    'slot-sobre': 'sobre',
    'slot-proposta': 'proposta',
    'slot-admissao': 'admissao',
    'slot-faca-parte': 'facaParte',
    'slot-contato': 'contato'
  };

  for (const [slotId, moduleKey] of Object.entries(slots)) {
    const el = document.getElementById(slotId);
    if (el && window.Modules && window.Modules[moduleKey]) {
      el.innerHTML = window.Modules[moduleKey];
    }
  }

  // Define as imagens iniciais dos accordions a partir de seus itens ativos.
  if (typeof initializeDiffAccordionVisuals === 'function') {
    initializeDiffAccordionVisuals();
  }

  // Inicializações de efeitos no scroll (como reveal text)
  if (typeof updateRevealText === 'function') {
    updateRevealText();
  }

  // Roteamento padrão inicial (Home)
  if (typeof loadRouteFromUrl === 'function') {
    loadRouteFromUrl();
  }
})();
