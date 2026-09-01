window.Modules = window.Modules || {};
window.Modules.home = `
  <main id="page-home" class="page-section active">

    <!-- Hero da HOME (Vídeo de Fundo Solene em Loop) -->
    <section class="hero-home">
      <video class="hero-video-bg" autoplay loop muted playsinline>
        <source src="background.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1 class="display-h1">
          <br><br><br><br>
          EDUCAÇÃO EM PLENITUDE PARA A <span class="accent-script">Glória</span> DE DEUS.
        </h1>
        <p class="hero-subheadline">
          Formando mentes, corpos e corações de crianças na Educação Infantil através da Verdade, da Bondade e da
          Beleza.
        </p>
        <div class="hero-cta-group">
          <button class="btn btn-primary" onclick="trackCtaClick('home_schedule_visit', 'Agende sua Visita', 'home_hero'); openModal('home_hero')">Agende sua Visita</button>
        </div>
      </div>
    </section>

    <!-- MENSAGEM BEM-VINDO AO PLEROMA (Origem & Vocação Simplificada — Texto Revelado no Scroll) -->
    <section class="welcome-banner" id="reveal-section">
      <div class="container">
        <span class="eyebrow-label">Seja bem-vindo ao Pleroma</span>
        <h2 class="reveal-text" id="text-target">
          Mais do que uma escola, o Pleroma é uma comunidade formativa, onde família e escola caminham juntas.
          <br>Nossa vocação é formar corações que amem o que é verdadeiro, bom e belo.
        </h2>
      </div>
    </section>

    <!-- CULTURA & FORMAÇÃO -->
    <section class="section-padding section-cultura-formacao">
      <div class="container">
        <div class="text-center" style="max-width: 750px; margin-inline: auto;">
          <span class="eyebrow-label">CULTURA E FORMAÇÃO</span>
          <h2 class="display-h2">A Nobreza na <span class="accent-script">Infância</span></h2>
          <p class="body-large">
            A Educação Cristã Clássica é uma visão de educação fundamentada em Cristo,
            que busca formar a pessoa inteira — sua inteligência, seus afetos, sua vontade e seu corpo
            — para a verdade, a bondade e a beleza.
          </p>
        </div>

        <div class="cultura-showcase">
          <img src="Fotos/Home - Cultura e Formacao.png" alt="Dupla de alunos do Colégio Pleroma"
            class="cultura-showcase-img">

          <div class="cultura-cards-grid">
            <div class="cultura-card">
              <h3 class="cultura-card-title">Fundamentos e Sabedoria</h3>
              <p>Uma formação que desenvolve hábitos, linguagem, atenção e amor pelo aprendizado e à vida desde cedo</p>
            </div>
            <div class="cultura-card">
              <h3 class="cultura-card-title">Virtudes</h3>
              <p>Desenvolvemos virtudes como generosidade, gentileza, gratidão, obediência e respeito, formando
                crianças com bom caráter e bom coração</p>
            </div>
            <div class="cultura-card">
              <h3 class="cultura-card-title">Intencionalidade</h3>
              <p>Jornada de proximidade com a criança, em que ela é conhecida, acompanhada e formada em sua
                singularidade, com propósito e cuidado</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DIFERENCIAIS INSTITUCIONAIS -->
    <section class="section-padding bg-surface">
      <div class="container">
        <div class="text-center" style="max-width: 700px; margin-inline: auto;">
          <span class="eyebrow-label">Nossos Diferenciais</span>
          <h2 class="display-h2">Uma educação que forma a <span class="accent-script">Pessoa</span> Inteira</h2>
        </div>
      </div>

      ${window.Components.diffAccordion}
    </section>

    <!-- BANNER ADMISSÃO CTA + DEPOIMENTOS -->
    <section class="section-padding bg-dark text-center">
      <div class="container" style="max-width: 800px;">

        <!-- DEPOIMENTOS -->
        <div id="home-depoimentos">
          <span class="eyebrow-label" style="color: var(--color-champagne-warm);">Depoimentos</span>
          <h2 class="display-h2" style="color: var(--color-off-white);">O que dizem os nossos Professores e Pais</h2>

          <div class="video-showcase">
            <div class="video-thumb-wrapper">
              <img src="Fotos/Criança sorrindo com uniforme escolar.png" alt="Vídeo Depoimento"
                class="video-thumb-img">

              <div class="video-thumb-overlay">
                <button class="video-play-btn"
                  onclick="showVideoModal('Transformação Real na Educação dos Nossos Filhos', 'dQw4w9WgXcQ')"
                  aria-label="Assistir vídeo de depoimento">
                </button>
                <span class="video-caption-title">Assista: Transformação Real na Educação dos Nossos Filhos</span>
                <span class="video-caption-sub">Depoimentos de Pais e Corpo Docente (YouTube)</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; margin-top: var(--space-6);">
          <button class="btn btn-ghost" onclick="trackCtaClick('home_admission_process', 'Conheça o Processo de Admissão', 'home_admission_banner'); navigateTo('admissao')">Conheça o Processo de Admissão</button>
        </div>
      </div>
    </section>
  </main>
`;
