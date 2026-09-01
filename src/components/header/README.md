# Componente: Header (Cabeçalho Institucional)

## Propósito e Responsabilidade
O componente Header é responsável por exibir o logotipo e escudo do Colégio Cristão Clássico Pleroma, disponibilizar a navegação principal da aplicação SPA e oferecer a chamada primária para ação (CTA "Agende uma Visita").

## Dependências
- **Assets:** `brasao.png` (usado para renderizar o brasão oficial no menu superior).
- **Estilos:** Utiliza as variáveis CSS `--color-burgundy-deep`, `--color-champagne-warm`, `--color-amber-gold` e a classe de transição `.site-header.scrolled` declarada no `:root`.
- **Comportamento:** Depende do script global `navigation.js` para as funções `navigateTo(pageId)` e `updateHeaderCta()`.

## Estrutura de Arquivos Internos
- `header.js`: Define a string de template HTML registrada em `window.Components.header`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do componente no `index.html`:
   ```html
   <script src="src/components/header/header.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-header"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-header').outerHTML = window.Components.header;
   ```
