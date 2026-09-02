window.Modules = window.Modules || {};
window.Modules.facaParte = `
  <main id="page-faca-parte" class="page-section">
    <section class="hero-internal bg-faca-parte"><div class="hero-internal-overlay"></div><div class="hero-internal-content"><span class="eyebrow-label" style="color: var(--color-champagne-warm);">Oportunidades</span><h1 class="display-h1">Venha <span class="accent-script">Transformar</span> a Educação</h1></div></section>
    <section class="section-padding"><div class="container">
      <div class="text-center" style="max-width: 740px; margin: 0 auto var(--space-7);"><span class="eyebrow-label">Faça Parte do Nosso Time</span><h2 class="display-h2">Educadores com vocação e propósito</h2></div>
      <div class="text-justify" style="max-width: 740px; margin: 0 auto var(--space-7);"><p class="body-large">Buscamos profissionais alinhados à nossa cosmovisão cristã, comprometidos com a verdade, a bondade e a beleza na formação das crianças.</p><p style="margin-top: var(--space-3); font-weight: 600; color: var(--color-burgundy-deep);">É necessário residir em Juiz de Fora ou região.</p></div>
      <div class="steps-grid">
        <div class="step-card"><div class="step-number">01</div><h3>Interesse e Envio de Currículo</h3><p style="font-size: 0.9rem; margin-top: 8px;">Manifeste seu interesse preenchendo o formulário e envie seu currículo para o e-mail mencionado nele.</p></div>
        <div class="step-card"><div class="step-number">02</div><h3>Análise de Currículo</h3><p style="font-size: 0.9rem; margin-top: 8px;">Nossa equipe avaliará o alinhamento com a oportunidade e a proposta do Colégio.</p></div>
        <div class="step-card"><div class="step-number">03</div><h3>Reunião Online / Presencial</h3><p style="font-size: 0.9rem; margin-top: 8px;">Conversaremos para conhecer melhor sua experiência, vocação e visão de educação.</p></div>
        <div class="step-card"><div class="step-number">04</div><h3>Proposta</h3><p style="font-size: 0.9rem; margin-top: 8px;">Os profissionais selecionados receberão a proposta para integração ao time.</p></div>
      </div>
      <div class="text-center" style="margin-top: var(--space-7);"><button type="button" class="btn btn-primary" onclick="openJobInterestModal()">Venha Transformar a Educação</button></div>
    </div></section>
    <div class="modal-overlay" id="job-interest-modal"><div class="modal-box"><button class="modal-close" type="button" onclick="closeJobInterestModal()">&times;</button><span class="eyebrow-label">Interesse e Currículo</span><h3 style="font-size: 1.4rem; color: var(--color-burgundy-deep); margin-bottom: var(--space-3);">Venha Transformar a Educação</h3><p style="font-size: 0.9rem; margin-bottom: var(--space-4);">Após continuar, envie seu currículo como anexo na conversa do WhatsApp.</p><form onsubmit="submitJobInterest(event)"><div class="form-group"><label class="form-label" for="job-interest-name">Nome</label><input id="job-interest-name" name="name" type="text" class="form-input" required placeholder="Seu nome completo"></div><div class="form-group"><label class="form-label" for="job-interest-role">Cargo de interesse</label><input id="job-interest-role" name="role" type="text" class="form-input" required placeholder="Ex.: Professor(a) de Educação Infantil"></div><button type="submit" class="btn btn-primary" style="width: 100%;">Continuar e enviar currículo</button></form></div></div>
  </main>
`;
