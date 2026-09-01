window.Components = window.Components || {};
window.Components.header = `
  <header class="site-header" id="main-header">
    <div class="container header-container">
      <a href="/home" class="brand-logo" onclick="navigateTo('home'); return false;">
        <img src="brasao.png" alt="Brasão do Colégio Pleroma" class="logo-shield-img">
      </a>

      <nav>
        <ul class="nav-menu">
          <li><a href="/home" class="nav-link active" onclick="navigateTo('home'); return false;" id="nav-home">Início</a></li>
          <li><a href="/sobre" class="nav-link" onclick="navigateTo('sobre'); return false;" id="nav-sobre">Sobre</a></li>
          <li class="nav-dropdown">
            <a href="/formacao/proposta" class="nav-link" onclick="navigateTo('proposta', 'proposta'); return false;" id="nav-proposta">Nossa Formação</a>
            <ul class="nav-submenu" aria-label="Nossa Formação">
              <li><a href="/formacao/proposta" onclick="navigateTo('proposta', 'proposta'); return false;">Proposta Pedagógica</a></li>
              <li><a href="/formacao/reforco-formativo" onclick="navigateTo('proposta', 'reforco'); return false;">Reforço Formativo</a></li>
              <li><a href="/formacao/educacao-infantil" onclick="navigateTo('proposta', 'infantil'); return false;">Educação Infantil</a></li>
              <li><a href="/formacao/educacao-bilingue" onclick="navigateTo('proposta', 'bilingue'); return false;">Educação Bilíngue</a></li>
            </ul>
          </li>
          <li><a href="/admissao" class="nav-link" onclick="navigateTo('admissao'); return false;" id="nav-admissao">Admissão</a></li>
          <li><a href="/vagas" class="nav-link" onclick="navigateTo('faca-parte'); return false;" id="nav-faca-parte">Vagas</a></li>
          <li><a href="/contato" class="nav-link" onclick="navigateTo('contato'); return false;" id="nav-contato">Contato</a></li>
        </ul>
      </nav>

      <button class="btn btn-primary header-cta" id="header-cta-btn" onclick="trackCtaClick('header_schedule_visit', 'Agende Sua Visita', 'header'); openModal('header')">Agende Sua Visita</button>
    </div>
  </header>
`;
