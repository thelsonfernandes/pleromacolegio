window.Components = window.Components || {};
window.Components.diffAccordion = `
  <!-- Fora do .container: a imagem ocupa toda a lateral direita até a borda da tela -->
  <div class="diff-accordion-wrapper">
    <div class="diff-accordion-list">
      <div class="diff-accordion-item active" data-image="Fotos/Home - Diferenciais - Cristo no Centro do Saber.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Cristo no Centro do Saber</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">Toda verdade encontra em Cristo o seu fundamento.</span>
          <p>A Educação Cristã Clássica no Pleroma é fundada na piedade e governada pela teologia. 
          As Escrituras orientam nossa compreensão da realidade, integrando fé, conhecimento, reconhecendo 
          em Cristo o centro e o fundamento de todo o saber.</p>
        </div>
      </div>

      <div class="diff-accordion-item" data-image="Fotos/Home - Diferenciais - Formacao Classica Integral.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Formação Clássica Integral</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">A educação forma para a sabedoria e a virtude.</span>
          <p>Caminho para a formação da sabedoria e virtude. Dedicamo-nos especialmente à formação dos hábitos, 
          da linguagem, da imaginação, dos afetos, da ginástica e do senso de maravilhamento diante da criação de Deus.
          Cremos que esses primeiros anos constituem o alicerce sobre o qual se edificará toda a vida intelectual,
          moral e espiritual da crinaça.</p>
        </div>
      </div>

      <div class="diff-accordion-item" data-image="Fotos/Home - Diferenciais - Afetos.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Educação dos Afetos</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">Não basta conhecer o bem; é preciso amá-lo.</span>
          <p>Acreditamos que educar é também ensinar a amar. Por meio das histórias, da literatura, da 
          arte, da linguagem, da natureza e dos hábitos cotidianos, ajudamos a criança a ordenar seus afetos e a 
          aprender a amar aquilo que é verdadeiro, bom e belo.</p>
        </div>
      </div>

      <div class="diff-accordion-item" data-image="Fotos/Home - Diferenciais - Professores pelo Exemplo.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Professores pelo Exemplo</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">A cultura é transmitida antes de ser ensinada.</span>
          <p>O professor é parte essencial da formação. Por isso, valorizamos profundamente sua 
          preparação, seu caráter e sua formação contínua, reconhecendo que os alunos aprendem 
          não apenas pelo que o professor ensina, mas também por aquilo que ele ama, valoriza e 
          vive diante deles.</p>
        </div>
      </div>

      <div class="diff-accordion-item" data-image="Fotos/Home - Diferenciais - Preceptoria Individualizada.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Preceptoria Individualizada</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">Cada aluno é conhecido pelo nome.</span>
          <p>Acompanhamento próximo e contínuo, no qual o professor também 
          exerce o papel de preceptor. Em turmas pequenas, ele acompanha o desenvolvimento 
          acadêmico, a formação de hábitos, o crescimento em virtudes e a trajetória pessoal de cada 
          aluno ao longo do ano, caminhando em parceria com a família.</p>
        </div>
      </div>

      <div class="diff-accordion-item" data-image="Fotos/Home - Diferenciais - Formacao Bilingue.png">
        <button class="diff-accordion-trigger" onclick="toggleDiffAccordion(this)">
          <span>Formação Bilíngue Integrada</span>
          <span class="diff-accordion-icon">+</span>
        </button>
        <div class="diff-accordion-panel">
          <span class="tagline">Horizontes ampliados para servir a Deus.</span>
          <p>O inglês é integrado à formação da criança de maneira progressiva e significativa, 
          ampliando seu acesso à literatura, ao conhecimento e ao diálogo com diferentes culturas, 
          sempre a partir de uma cosmovisão cristã.</p>
        </div>
      </div>
    </div>

    <div class="diff-accordion-visual">
      <img id="diff-visual-img" class="lazy" loading="lazy" alt="Diferenciais do Colégio Pleroma">
    </div>
  </div>
`;
