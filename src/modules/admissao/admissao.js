window.Modules = window.Modules || {};
window.Modules.admissao = `
  <main id="page-admissao" class="page-section">
    <!-- Banner Estático no Topo -->
    <section class="hero-internal bg-admissao">
      <div class="hero-internal-overlay"></div>
      <div class="hero-internal-content">
        <span class="eyebrow-label" style="color: var(--color-champagne-warm);">Ingresso de Alunos</span>
        <h1 class="display-h1">Processo de <span class="accent-script">Matrícula</span></h1>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="text-center" style="max-width: 750px; margin-inline: auto;">
          <span class="eyebrow-label">O primeiro passo é conhecer</span>
          <h2 class="display-h2">Como realizar a matrícula no Colégio Pleroma</h2>
          <p class="body-large">
            Escolher uma escola é escolher uma parceria para a vida. Conheça as etapas para iniciar a matrícula e
            viver de perto a proposta pedagógica do Colégio Pleroma.
          </p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">01</div>
            <h4>Intenção de Matrícula</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Contato pelo Whatsapp e preenchimento do formulário familiar para iniciar o
              processo.</p>
          </div>
          <div class="step-card">
            <div class="step-number">02</div>
            <h4>Agendamento para Visita</h4>
            <p style="font-size: 0.9rem; margin-top: 8px;">Agendamos uma visita para que a família conheça nossos
              espaços, rotina e proposta pedagógica.</p>
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
            <p style="font-size: 0.9rem; margin-top: 8px;">Conclusão mediante a apresentação da documentação e o
              pagamento da taxa de matrícula.</p>
          </div>
        </div>

        <div class="text-center" style="margin-top: var(--space-7);">
          <button class="btn btn-primary" onclick="trackCtaClick('admission_start_whatsapp', 'Inicie o Processo de Matrícula via WhatsApp', 'admission_process'); openModal('admission_process')">Inicie o Processo de Matrícula via WhatsApp</button>
        </div>
      </div>
    </section>
  </main>
`;
