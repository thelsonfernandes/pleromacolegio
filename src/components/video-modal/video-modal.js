window.Components = window.Components || {};
window.Components.videoModal = `
  <!-- MODAL DE VÍDEO (Depoimentos) -->
  <div class="video-modal-overlay" id="video-modal-overlay" onclick="if(event.target===this) closeVideoModal()">
    <div class="video-modal-box">
      <button class="video-modal-close" onclick="closeVideoModal()" aria-label="Fechar vídeo">&times;</button>
      <div class="video-modal-frame-wrapper">
        <iframe id="video-modal-iframe" src="about:blank" title="Vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
`;
