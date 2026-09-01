# Especificação de Arquitetura e Design System — `/novo`

Esta especificação define os contratos de design, tipografia, roteamento e componentes interativos do protótipo modular `/novo` do Colégio Cristão Clássico Pleroma.

---

## 1. Design System (Tokens Cromáticos e Tipográficos)

O protótipo `/novo` possui uma identidade visual distinta baseada na estética *Classic Heritage / Dark Academia & Editorial Clássico*, separada do site principal na raiz do projeto.

### 1.1 Cores (Tokens CSS)

Os seguintes tokens CSS devem ser aplicados no `:root` em `index.html`:

```css
:root {
  /* Brand Core (60-25-10-5 Rule) */
  --color-burgundy-deep: #521D21;    /* Vinho Profundo (solenidade, overlays, headers) */
  --color-champagne-warm: #C6AC8F;   /* Bege Champanhe (molduras, contraste nobre) */
  --color-crimson-dark: #7A0C0D;     /* Vermelho Carmim (hover de botões) */
  --color-mahogany-wood: #3B2317;    /* Madeira Clássica (rodapé institucional) */

  /* Acentos */
  --color-amber-gold: #D4A343;       /* Dourado Âmbar (botões de conversão / CTAs) */
  --color-amber-gold-dark: #B8882D;  /* Dourado Caligráfico / Destaque em fundo claro */

  /* Neutros e Interface */
  --color-off-white: #FAF6F0;        /* Creme Suave (fundo das páginas e seções) */
  --color-surface-light: #F2ECE4;    /* Fundo de cards, banners secundários */
  --color-off-black: #1A1112;        /* Texto principal corrido */
  --color-muted-gray: #8C827A;       /* Subtítulos, bordas desativadas */
  --color-border-light: #E2D9CC;      /* Linhas divisórias, molduras de cards */

  /* Sombras */
  --shadow-subtle: 0 4px 20px rgba(59, 35, 23, 0.05);
  --shadow-card-hover: 0 12px 30px rgba(82, 29, 33, 0.12);
}
```

### 1.2 Regras de Contraste e Acessibilidade (WCAG AAA)
- **Fundo Vinho (`#521D21`):** Texto corrido em `--color-off-white` (`#FAF6F0`); títulos/rótulos em `--color-champagne-warm` (`#C6AC8F`).
- **Fundo Off-White (`#FAF6F0`):** Texto corrido em `--color-off-black` (`#1A1112`); títulos em `--color-burgundy-deep` (`#521D21`); palavras de acento script em `--color-amber-gold-dark` (`#B8882D`).
- **Proibido:** Usar Dourado Âmbar (`#D4A343`) sobre Bege Champanhe (`#C6AC8F`), pois compromete seriamente a legibilidade.

### 1.3 Tipografia

As seguintes famílias tipográficas são importadas do Google Fonts:
- **Display/Títulos:** `Cinzel` (Serifada solene).
- **Leitura/Corpo:** `Cormorant Garamond` (Serifada editorial) e `Montserrat` (Sans-serif funcional).
- **Acento Caligráfico:** `Alex Brush` (Script manuscrita para termos isolados nos títulos).

---

## 2. Contratos de Roteamento SPA e Navegação

A navegação baseia-se em abas dinâmicas montadas em runtime, controladas via Javascript sem build.

### 2.1 Páginas Roteáveis (Sections)
Cada página é definida como uma tag `<main>` com a classe `.page-section` e uma ID no formato `page-[id]`:
- `home`
- `sobre`
- `proposta`
- `admissao`
- `faca-parte`
- `contato`

### 2.2 Roteador SPA (`navigation.js`)
- **`navigateTo(pageId)`**:
  1. Remove a classe `.active` de todas as tags `.page-section`.
  2. Adiciona a classe `.active` à página correspondente.
  3. Remove a classe `.active` de todos os links `.nav-link` do menu.
  4. Adiciona a classe `.active` ao link correspondente à ID `nav-[pageId]`.
  5. Rola suavemente o navegador para o topo (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
  6. Chama `updateHeaderCta()` para controlar a visibilidade do botão do cabeçalho.

- **`updateHeaderCta()`**:
  - Se a página atual NÃO for a `home`, o botão "Agende uma Visita" (`#header-cta-btn`) deve ficar visível imediatamente (classe `.is-visible`).
  - Se a página atual for a `home`, o botão deve permanecer oculto enquanto o Hero do topo estiver cobrindo a tela. Assim que o topo do Hero ultrapassar o limite inferior do cabeçalho fixo, o botão deve deslizar e aparecer com fade-in.

---

## 3. Contratos de Componentes Interativos

### 3.1 Accordion "Nossos Diferenciais" (`diff-accordion.js`)
- Estrutura baseada em itens clicáveis `.diff-accordion-item` que contêm a classe `.active` quando abertos.
- **Transição de Imagens:** Ao abrir um item, a imagem `.diff-accordion-visual img` deve ter sua opacidade reduzida a `0` temporariamente, trocando a origem (`src`) pelo valor contido no atributo `data-image` do item ativo, e depois retornar a opacidade a `1` com uma transição suave.

### 3.2 Revelação de Texto no Scroll (`updateRevealText`)
- A seção `reveal-section` possui uma frase principal (`#text-target`) estilizada com um gradiente duplo no fundo e `-webkit-background-clip: text`.
- Ao rolar a página, a função calcula a posição do topo da seção em relação à janela e atualiza o `background-size` da primeira camada do gradiente para pintar o texto progressivamente de Creme Opaco para Creme Sólido, simulando o efeito de preenchimento.

### 3.3 Modais (`utils.js`)
- **Modal de Agendamento (`#appointment-modal`):**
  - Aberto com a chamada a `openModal()` e fechado com `closeModal()`.
  - Ao enviar o formulário, simula o envio e abre o WhatsApp Oficial (`5532991114565`) em uma nova aba do navegador.
- **Modal de Vídeo (`#video-modal-overlay`):**
  - Usado para reproduzir depoimentos no YouTube sem sair do site.
  - Ao chamar `showVideoModal(title, videoId)`, o iframe do modal (`#video-modal-iframe`) é atualizado com a URL `https://www.youtube.com/embed/[videoId]?autoplay=1&rel=0` e o overlay se torna ativo.
  - Ao fechar via `closeVideoModal()` ou tecla **ESC**, limpa o `src` do iframe para interromper o áudio instantaneamente.
