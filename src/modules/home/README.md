# Módulo: Home (Página Inicial)

## Propósito e Responsabilidade
O módulo Home é o ponto de entrada visual do website do Colégio Pleroma. Contém o hero banner com vídeo de fundo, a faixa de introdução animada por scroll, a galeria de fotos sobre uniformes e cultura visual, a Tríade Central da Formação Humana (Verdade, Bondade, Beleza), a inserção do accordion de Diferenciais e a seção de depoimentos com player de vídeo do YouTube.

## Dependências
- **Assets:** `background.mp4` (vídeo de fundo do hero), `brasao.png` (usado no header), `Fotos/Criança lendo a Bíblia com uniforme escolar.png`, `Fotos/Leitura em Roda na Sala de Aula Clássica.png`, `Fotos/Tutoria na Sala de Aula Clássica.png`.
- **Componentes:** Depende de `window.Components.diffAccordion` (que deve ser carregado antes deste script na página) para renderizar a seção de diferenciais de forma modular.
- **Comportamento:** Consome funções de modais e scroll reveal (`openModal`, `showVideoModal`, `updateRevealText`) declaradas globalmente em `utils.js`.

## Estrutura de Arquivos Internos
- `home.js`: Define a string de template HTML registrada em `window.Modules.home`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do módulo no `index.html`:
   ```html
   <script src="src/modules/home/home.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-home"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-home').innerHTML = window.Modules.home;
   ```
