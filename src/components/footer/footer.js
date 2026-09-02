window.Components = window.Components || {};
window.Components.footer = `
  <!-- RODAPÉ INSTITUCIONAL (Madeira Clássica #3B2317) -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-title" style="color: var(--color-off-white);">
            PLEROMA
            <span style="color: var(--color-champagne-warm);">COLÉGIO CRISTÃO CLÁSSICO</span>
          </div>
          <p>Educação em plenitude para a glória de Deus.</p>

          <div class="footer-social">
            <a class="footer-social-link" href="https://www.instagram.com/pleroma.rf/" target="_blank"
              rel="noopener" aria-label="Instagram do Colégio Pleroma">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a class="footer-social-link" href="https://api.whatsapp.com/send/?phone=5532991114565" target="_blank"
              rel="noopener" aria-label="WhatsApp do Colégio Pleroma">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z">
                </path>
                <path
                  d="M12.001 2C6.478 2 2 6.478 2 12c0 1.892.526 3.66 1.437 5.166L2 22l4.958-1.406A9.943 9.943 0 0 0 12 22c5.523 0 10-4.478 10-10S17.523 2 12.001 2zm0 18.166c-1.65 0-3.19-.485-4.487-1.318l-.322-.198-2.94.834.834-2.868-.21-.297A8.106 8.106 0 0 1 3.834 12c0-4.5 3.667-8.166 8.167-8.166 4.5 0 8.166 3.666 8.166 8.166 0 4.5-3.666 8.166-8.166 8.166z">
                </path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2 class="footer-title">Navegação</h2>
          <ul class="footer-links">
            <li><a href="/" onclick="navigateTo('home'); return false;">Início</a></li>
            <li><a href="/sobre" onclick="navigateTo('sobre'); return false;">Sobre</a></li>
            <li><a href="/formacao/proposta" onclick="navigateTo('proposta'); return false;">Nossa Formação</a></li>
            <li><a href="/admissao" onclick="navigateTo('admissao'); return false;">Matrícula</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer-title">Modalidades</h2>
          <ul class="footer-links">
            <li><a href="/formacao/reforco-formativo" onclick="navigateTo('proposta', 'reforco'); return false;">Reforço Formativo (2 a 5 anos)</a></li>
            <li><a href="/formacao/educacao-infantil" onclick="navigateTo('proposta', 'infantil'); return false;">Educação Infantil (Visão 2027)</a></li>
            <li><a href="/formacao/proposta" onclick="navigateTo('proposta'); return false;">As 5 Oficinas Formativas</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer-title">Contato & Sede</h2>
          <p style="font-size: 0.85rem; color: var(--color-off-white);">Rua Antônio Lagrota, 125</p>
          <p style="font-size: 0.85rem; color: var(--color-off-white);">Mariano Procópio — Juiz de Fora/MG</p>
          <p style="font-size: 0.85rem; color: var(--color-amber-gold); margin-top: 8px;">WhatsApp: (32) 99111-4565</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Pleroma Colégio Cristão Clássico. Todos os direitos reservados. Juiz de Fora - MG.</p>
      </div>
    </div>
  </footer>
`;
