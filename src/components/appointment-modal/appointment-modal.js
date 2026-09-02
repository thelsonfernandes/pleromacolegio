window.Components = window.Components || {};
window.Components.appointmentModal = `
  <!-- MODAL DE AGENDAMENTO -->
  <div class="modal-overlay" id="appointment-modal">
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <span class="eyebrow-label">Agendamento Institucional</span>
      <h3 style="font-size: 1.4rem; color: var(--color-burgundy-deep); margin-bottom: var(--space-4);">
        Agende uma Reunião com nossa Equipe
      </h3>
      <form onsubmit="handleModalSubmit(event)">
        <div class="form-group">
          <label class="form-label" for="appointment-name">Nome do Responsável</label>
          <input id="appointment-name" name="name" type="text" class="form-input" required placeholder="Seu nome">
        </div>
        <div class="form-group">
          <label class="form-label" for="appointment-child-age">Idade da Criança</label>
          <select id="appointment-child-age" name="child_age" class="form-select">
            <option>2 anos</option>
            <option>3 anos</option>
            <option>4 anos</option>
            <option>5 anos</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="appointment-modality">Modalidade de Interesse</label>
          <select id="appointment-modality" name="modality" class="form-select">
            <option>Reforço Formativo</option>
            <option>Colégio Pleroma</option>
            <option>Ambas as Modalidades</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">Conectar via WhatsApp</button>
      </form>
    </div>
  </div>
`;
