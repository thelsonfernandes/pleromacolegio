# Componente: Video Modal (Modal de Vídeo para Depoimentos)

## Propósito e Responsabilidade
O componente Video Modal fornece o lightbox para reprodução de vídeos do YouTube diretamente na página, de forma fluida. Ele atualiza dinamicamente a propriedade `src` do `iframe` do player e impede o vazamento de áudio limpando o `src` ao ser fechado.

## Dependências
- **Estilos:** Utiliza as classes `.video-modal-overlay`, `.video-modal-box`, `.video-modal-close` e `.video-modal-frame-wrapper` definidas na folha de estilos global.
- **Comportamento:** Consome as funções globais `closeVideoModal()` definidas em `utils.js` (incluindo o evento de fechamento automático pela tecla ESC).

## Estrutura de Arquivos Internos
- `video-modal.js`: Define a string de template HTML registrada em `window.Components.videoModal`.

## Guia de Uso/Integração
1. Carregue o arquivo JS do componente no `index.html`:
   ```html
   <script src="src/components/video-modal/video-modal.js"></script>
   ```
2. Defina o slot no `index.html`:
   ```html
   <div id="slot-video-modal"></div>
   ```
3. O `renderer.js` substituirá o slot em runtime usando:
   ```javascript
   document.getElementById('slot-video-modal').innerHTML = window.Components.videoModal;
   ```
4. Para abrir o modal e reproduzir um vídeo, chame de qualquer componente ou módulo:
   ```javascript
   showVideoModal('Título do Vídeo', 'ID_DO_VIDEO_DO_YOUTUBE');
   ```
