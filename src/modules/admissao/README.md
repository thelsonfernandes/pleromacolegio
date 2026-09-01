# Módulo: Admissão (Processo de Ingresso)

## Propósito e Responsabilidade
O módulo Admissão descreve detalhadamente o fluxo de 4 passos para ingresso de novas famílias no Colégio Pleroma (Reunião Online/Presencial, Intenção de Matrícula, Banco de Admissão, Convite para Matrícula) e oferece uma chamada primária para iniciar o agendamento de visitas.

## Dependências
- **Estilos:** Utiliza as classes `.hero-internal`, `.bg-admissao` (que carrega `Contraturno.png` como imagem de fundo), `.steps-grid` e `.step-card` declaradas na folha de estilos global.
- **Comportamento:** Consome a função global `openModal()` de `utils.js` para abrir o agendamento.

## Estrutura de Arquivos Internos
- `admissao.js`: Define a string de template HTML registrada em `window.Modules.admissao`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do módulo no `index.html`:
   ```html
   <script src="src/modules/admissao/admissao.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-admissao"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-admissao').innerHTML = window.Modules.admissao;
   ```
4. Para exibir esta seção, chame a rota global `navigateTo('admissao')`.
