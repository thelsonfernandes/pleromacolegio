# Componente: Appointment Modal (Modal de Agendamento)

## Propósito e Responsabilidade
O componente Appointment Modal fornece a interface pop-up para agendamento de reuniões. Permite que os pais insiram o nome do responsável, a idade da criança e a modalidade de interesse (Reforço Formativo, Colégio Pleroma 2027 ou Ambas) e os redireciona para o WhatsApp Oficial ao submeter.

## Dependências
- **Estilos:** Utiliza as classes `.modal-overlay`, `.modal-box`, `.modal-close`, `.form-group`, `.form-label`, `.form-input` e `.form-select` declaradas na folha de estilos global.
- **Comportamento:** Consome as funções globais `closeModal()` e `handleModalSubmit(event)` definidas em `utils.js`.

## Estrutura de Arquivos Internos
- `appointment-modal.js`: Define a string de template HTML registrada em `window.Components.appointmentModal`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do componente no `index.html`:
   ```html
   <script src="src/components/appointment-modal/appointment-modal.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-appointment-modal"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-appointment-modal').innerHTML = window.Components.appointmentModal;
   ```
