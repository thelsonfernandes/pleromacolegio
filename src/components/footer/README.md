# Componente: Footer (Rodapé Institucional)

## Propósito e Responsabilidade
O componente Footer é responsável por exibir o rodapé do Colégio Cristão Clássico Pleroma, contendo os links de navegação secundária, informações de modalidades de ensino e os detalhes de sede e contato institucional.

## Dependências
- **Estilos:** Utiliza as variáveis CSS `--color-mahogany-wood` (#3B2317) para o fundo institucional escuro, `--color-amber-gold` para links ativos/hover, `--color-champagne-warm` para tipografias secundárias e a classe `.site-footer` declarada globalmente.
- **Comportamento:** Consome a função global `navigateTo(pageId)` definida em `navigation.js`.

## Estrutura de Arquivos Internos
- `footer.js`: Define a string de template HTML registrada em `window.Components.footer`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do componente no `index.html`:
   ```html
   <script src="src/components/footer/footer.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-footer"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-footer').innerHTML = window.Components.footer;
   ```
