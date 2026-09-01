# Módulo: Proposta Pedagógica (Reforço Formativo & Visão 2027)

## Propósito e Responsabilidade
O módulo Proposta Pedagógica detalha o funcionamento pedagógico e operacional do Colégio Pleroma. Divide-se em:
- **Reforço Formativo:** Turnos (2 e 3 anos à tarde; 4 e 5 anos pela manhã) e as 5 Oficinas Formativas (Linguagem e Literatura, Pensamento Matemático, Maravilhamento, Movimento e Corpo, Vida e Virtudes).
- **Visão 2027:** Abertura da escola regular de Educação Infantil em turmas reduzidas com foco em preceptoria individual.

## Dependências
- **Estilos:** Utiliza as classes `.hero-internal`, `.bg-proposta` (imagem de fundo do banner estático), `.diff-grid` e `.diff-card` declaradas na folha de estilos global.

## Estrutura de Arquivos Internos
- `proposta.js`: Define a string de template HTML registrada em `window.Modules.proposta`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do módulo no `index.html`:
   ```html
   <script src="src/modules/proposta/proposta.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-proposta"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-proposta').innerHTML = window.Modules.proposta;
   ```
4. Para exibir esta seção, chame a rota global `navigateTo('proposta')`.
