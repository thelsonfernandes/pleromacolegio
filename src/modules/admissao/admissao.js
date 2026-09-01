window.Modules = window.Modules || {};
window.Modules.admissao = `
  <main id="page-admissao" class="page-section">
    <!-- Banner Estático no Topo -->
    <section class="hero-internal bg-admissao">
      <div class="hero-internal-overlay"></div>
      <div class="hero-internal-content">
        <span class="eyebrow-label" style="color: var(--color-champagne-warm);">Ingresso & Parceria</span>
        <h1 class="display-h1">Processo de <span class="accent-script">Admissão</span></h1>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="text-center" style="max-width: 750px; margin-inline: auto;">
          <span class="eyebrow-label">O primeiro passo é conhecer</span>
          <h2 class="display-h2">Como ingressar no Colégio Pleroma</h2>
          <p class="body-large">
            Escolher uma escola é escolher uma parceria para a vida. Antes de qualquer matrícula, queremos apresentar
            quem somos, no que acreditamos e como educamos.
          </p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h4>Reunião Online / Presencial</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Apresentação da proposta pedagógica, rotina e princípios da
              Educação Cristã Clássica.</p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h4>Intenção de Matrícula</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Preenchimento do formulário familiar para alinhamento de
              expectativas e cosmovisão.</p>
          </div>
          <div class="step-card">
            <div class="step-number">03</div>
            <h4>Banco de Admissão</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Análise da solicitação conforme disponibilidade de vagas e
              perfil das turmas.</p>
          </div>
          <div class="step-card">
            <div class="step-number">04</div>
            <h4>Convite para Matrícula</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Conclusão da matrícula oficial mediante envio da documentação
              e taxa.</p>
          </div>
        </div>

        <div class="text-center" style="margin-top: var(--space-7);">
          <button class="btn btn-primary" onclick="trackCtaClick('admission_start_whatsapp', 'Inicie o Processo de Admissão via WhatsApp', 'admission_process'); openModal('admission_process')">Inicie o Processo de Admissão via WhatsApp</button>
        </div>
      </div>
    </section>
  </main>
`;
