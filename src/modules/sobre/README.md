# Módulo: Sobre Nós (História e Manifesto)

## Propósito e Responsabilidade
O módulo Sobre Nós apresenta a identidade, história, cosmovisão cristã, o significado teológico e linguístico do nome Pleroma (Plenitude) e a citação inspiradora de Efésios 3:18-19.

## Dependências
- **Assets:** `Fotos/Retrato Escolar - Dupla de Alunos.png` (usado na diagramação assimétrica split ao lado do manifesto).
- **Estilos:** Utiliza as classes `.hero-internal`, `.bg-sobre` (que define a imagem de fundo do cabeçalho estático interno), `.split-grid`, `.split-img-wrapper` e `.quote-callout` declaradas na folha de estilos global.

## Estrutura de Arquivos Internos
- `sobre.js`: Define a string de template HTML registrada em `window.Modules.sobre`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do módulo no `index.html`:
   ```html
   <script src="src/modules/sobre/sobre.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-sobre"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-sobre').innerHTML = window.Modules.sobre;
   ```
4. Para exibir esta seção, chame a rota global `navigateTo('sobre')`.
