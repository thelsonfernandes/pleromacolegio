/**
 * Utilitários e Efeitos Interativos — `/novo`
 */

// Registra CTAs com um identificador estável e o local em que foram exibidos.
function trackCtaClick(ctaId, ctaLabel, ctaLocation) {
  if (typeof trackEvent !== 'function') return;
  trackEvent('cta_click', {
    cta_id: ctaId,
    cta_label: ctaLabel,
    cta_location: ctaLocation
  });
}

// Controles do Modal de Agendamento
function openModal(ctaSource) {
  const modal = document.getElementById('appointment-modal');
  if (modal) modal.classList.add('active');
  if (typeof trackEvent === 'function') trackEvent('appointment_modal_open', {
    cta_source: ctaSource || 'unknown'
  });
}

function closeModal() {
  const modal = document.getElementById('appointment-modal');
  if (modal) modal.classList.remove('active');
}

function openJobInterestModal() {
  const modal = document.getElementById('job-interest-modal');
  if (modal) modal.classList.add('active');
}

function closeJobInterestModal() {
  const modal = document.getElementById('job-interest-modal');
  if (modal) modal.classList.remove('active');
}

function submitJobInterest(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = String(data.get('name') || '').trim();
  const role = String(data.get('role') || '').trim();
  const message = `Olá! Meu nome é ${name} e tenho interesse em contribuir com o Colégio Pleroma na área de ${role}. Gostaria de enviar meu currículo para avaliação.`;
  if (typeof trackEvent === 'function') trackEvent('generate_lead', { lead_type: 'job_interest_and_resume_whatsapp' });
  window.open(`https://api.whatsapp.com/send/?phone=5532991114565&text=${encodeURIComponent(message)}`, '_blank');
  event.target.reset();
  closeJobInterestModal();
}

function handleModalSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = String(data.get('name') || '').trim();
  const childAge = String(data.get('child_age') || '').trim();
  const modality = String(data.get('modality') || '').trim();
  const message = `Olá, me chamo ${name}!\nEstou interessado em conhecer o Colégio Pleroma.\nInformações adicionais:\nIdade da Criança: ${childAge}\nModalidade: ${modality}`;

  if (typeof trackEvent === 'function') trackEvent('generate_lead', { lead_type: 'appointment_whatsapp' });
  window.open(`https://api.whatsapp.com/send/?phone=5532991114565&text=${encodeURIComponent(message)}`, '_blank');
  e.target.reset();
  closeModal();
}

// Controles do Modal de Vídeo (Depoimentos)
function showVideoModal(title, videoId) {
  const overlay = document.getElementById('video-modal-overlay');
  const iframe = document.getElementById('video-modal-iframe');

  if (!overlay || !iframe) return;

  // Monta a URL de embed do YouTube com autoplay
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.title = title;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // trava o scroll do fundo
}

function closeVideoModal() {
  const overlay = document.getElementById('video-modal-overlay');
  const iframe = document.getElementById('video-modal-iframe');

  if (!overlay || !iframe) return;

  overlay.classList.remove('active');
  iframe.src = 'about:blank'; // para o vídeo ao fechar
  document.body.style.overflow = '';
}

// Fecha o modal de vídeo ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

// Accordion "Nossos Diferenciais" (Lista + Imagem Sincronizada)
function toggleDiffAccordion(trigger) {
  const item = trigger.closest('.diff-accordion-item');
  const list = item && item.closest('.diff-accordion-list');
  const wrapper = item && item.closest('.diff-accordion-wrapper');
  if (!item || !list || !wrapper) return;

  const isAlreadyActive = item.classList.contains('active');

  list.querySelectorAll('.diff-accordion-item').forEach(el => el.classList.remove('active'));

  if (!isAlreadyActive) {
    item.classList.add('active');

    const visualImg = wrapper.querySelector('.diff-accordion-visual img');
    const newSrc = item.getAttribute('data-image');
    if (visualImg && newSrc && visualImg.getAttribute('src') !== newSrc) {
      // A troca precisa ser direta: esconder a imagem antes de carregar a
      // próxima deixava o container vazio em acessos sem cache.
      visualImg.src = newSrc;
    }

    syncMobileAccordionImages(wrapper, item, newSrc);
  }
}

// Sincroniza a imagem inicial de cada accordion com o item marcado como ativo.
// Cada imagem é definida apenas pelo atributo data-image do respectivo item.
function initializeDiffAccordionVisuals() {
  document.querySelectorAll('.diff-accordion-wrapper').forEach(wrapper => {
    const activeItem = wrapper.querySelector('.diff-accordion-item.active');
    const visualImg = wrapper.querySelector('.diff-accordion-visual img');
    const imageSrc = activeItem && activeItem.getAttribute('data-image');

    if (visualImg && imageSrc) visualImg.src = imageSrc;
    if (activeItem && imageSrc) syncMobileAccordionImages(wrapper, activeItem, imageSrc);
  });
}

// Em telas pequenas, a foto acompanha o item aberto e surge antes do conteúdo.
function syncMobileAccordionImages(wrapper, activeItem, imageSrc) {
  if (!wrapper || !activeItem || !imageSrc) return;

  wrapper.querySelectorAll('.diff-accordion-mobile-visual').forEach(visual => visual.remove());
  const visual = document.createElement('div');
  visual.className = 'diff-accordion-mobile-visual';
  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = activeItem.querySelector('.diff-accordion-trigger')?.textContent.trim() || 'Atividade do Colégio Pleroma';
  image.loading = 'lazy';
  image.decoding = 'async';
  image.width = 1024;
  image.height = 1024;
  visual.appendChild(image);
  activeItem.insertBefore(visual, activeItem.firstChild);
}

function toggleMobileNavigation(button) {
  const header = document.getElementById('main-header');
  if (!header || !button) return;
  const isOpen = header.classList.toggle('menu-open');
  button.setAttribute('aria-expanded', String(isOpen));
  button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
}

function closeMobileNavigation() {
  const header = document.getElementById('main-header');
  const button = header && header.querySelector('.nav-toggle');
  if (!header || !button) return;
  header.classList.remove('menu-open');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Abrir menu');
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.nav-link, .nav-submenu a')) closeMobileNavigation();
});

// Preenchimento do texto "Seja bem-vindo ao Pleroma" acompanhando o scroll
function updateRevealText() {
  const section = document.getElementById('reveal-section');
  const text = document.getElementById('text-target');
  if (!section || !text) return;

  const sectionRect = section.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  // Calcula quanto da seção já passou pelo "centro" da tela
  let progress = (viewHeight - sectionRect.top) / (sectionRect.height + viewHeight * 0.5);

  // Clamp entre 0 e 1 e ajuste de sensibilidade
  progress = Math.min(Math.max(progress * 1.5 - 0.2, 0), 1);

  // A camada sólida cresce de cima para baixo, a partir de "Mais do que uma escola".
  text.style.backgroundSize = `100% ${progress * 100}%, 100% 100%`;
}

// Agrupa eventos frequentes para executar no máximo um cálculo de layout por frame.
let revealFramePending = false;
function scheduleRevealTextUpdate() {
  if (revealFramePending) return;
  revealFramePending = true;
  window.requestAnimationFrame(() => {
    updateRevealText();
    revealFramePending = false;
  });
}

window.addEventListener('scroll', scheduleRevealTextUpdate, { passive: true });
window.addEventListener('resize', scheduleRevealTextUpdate);
