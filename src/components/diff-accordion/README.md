# Componente: Diff Accordion (Accordion de Diferenciais)

## Propósito e Responsabilidade
O componente Diff Accordion gerencia a exibição interativa da lista "Nossos Diferenciais" (ex: Cristo no Centro do Saber, Educação dos Afetos, etc.) acoplada a uma imagem lateral sincronizada que muda de forma fluida conforme o item ativo é selecionado pelo usuário.

## Dependências
- **Estilos:** Utiliza as classes `.diff-accordion-wrapper`, `.diff-accordion-list`, `.diff-accordion-item`, `.diff-accordion-trigger`, `.diff-accordion-panel` e `.diff-accordion-visual` declaradas na folha de estilos global.
- **Comportamento:** Consome a função global `toggleDiffAccordion(trigger)` definida em `utils.js`.

## Estrutura de Arquivos Internos
- `diff-accordion.js`: Define a string de template HTML registrada em `window.Components.diffAccordion`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do componente no `index.html`:
   ```html
   <script src="src/components/diff-accordion/diff-accordion.js"></script>
   ```
2. O template do componente pode ser composto dinamicamente em runtime dentro do módulo `Home` (ou qualquer outro módulo) utilizando a variável global `window.Components.diffAccordion`:
   ```javascript
   window.Modules.home = `
     <section>
       ...
       ${window.Components.diffAccordion}
     </section>
   `;
   ```
