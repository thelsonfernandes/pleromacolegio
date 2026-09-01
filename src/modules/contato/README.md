# Módulo: Contato (Atendimento e Sede)

## Propósito e Responsabilidade
O módulo Contato apresenta os canais de comunicação oficiais da escola, incluindo endereço completo da sede em Juiz de Fora - MG, telefone/WhatsApp de contato direto, rede social Instagram e a incorporação do mapa georreferenciado interativo via iframe do Google Maps.

## Dependências
- **Estilos:** Utiliza as classes `.hero-internal`, `.bg-contato` (imagem de fundo do banner de contato), `.split-grid` e `.split-img-wrapper` declaradas na folha de estilos global.

## Estrutura de Arquivos Internos
- `contato.js`: Define a string de template HTML registrada em `window.Modules.contato`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do módulo no `index.html`:
   ```html
   <script src="src/modules/contato/contato.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-contato"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-contato').innerHTML = window.Modules.contato;
   ```
4. Para exibir esta seção, chame a rota global `navigateTo('contato')`.
