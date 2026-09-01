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
  if (typeof trackEvent === 'function') trackEvent('generate_lead', { lead_type: 'appointment_whatsapp' });
  alert('Obrigado! Redirecionando para o atendimento oficial no WhatsApp (32) 99111-4565...');
  closeModal();
  window.open('https://api.whatsapp.com/send/?phone=5532991114565', '_blank');
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
      visualImg.style.opacity = 0;
      setTimeout(() => {
        visualImg.src = newSrc;
        visualImg.style.opacity = 1;
      }, 200);
    }
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
  });
}

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

  // Aplica o progresso apenas à camada sólida (1ª camada)
  text.style.backgroundSize = `100% ${progress * 100}%, 100% 100%`;
}

// Event listeners do scroll reveal
window.addEventListener('scroll', updateRevealText);
window.addEventListener('resize', updateRevealText);
