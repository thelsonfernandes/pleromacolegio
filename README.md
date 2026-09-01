# Colégio Pleroma — Protótipo `/novo` (Educação Cristã Clássica)

Este diretório contém o **protótipo modularizado** do website do Colégio Pleroma, estruturado sob uma **Arquitetura Baseada em Componentes e Módulos** com composição em runtime, seguindo o padrão do restante do projeto.

---

## 🏗️ Estrutura de Arquivos

* **`specs/`**: Especificações técnicas globais.
  * [`architecture-spec.md`](specs/architecture-spec.md): Detalhamento do Design System, Roteador SPA e contratos dos componentes interativos.
* **`src/core/`**: Regras e scripts globais do aplicativo.
  * [`navigation.js`](src/core/navigation.js): Controle de navegação SPA por abas (`navigateTo`) e visibilidade dinâmica do botão do header.
  * [`utils.js`](src/core/utils.js): Manipulação de modais (agendamento e depoimentos), accordion de diferenciais e reveal de texto no scroll.
  * [`renderer.js`](src/core/renderer.js): Script de inicialização que injeta os componentes e módulos em seus respectivos slots do `index.html`.
* **`src/components/`**: Elementos de interface globais ou reutilizáveis.
  * **Header** (`src/components/header/`): Menu de navegação superior fixo e logo/brasão.
  * **Footer** (`src/components/footer/`): Rodapé institucional em tom de Madeira Clássica.
  * **Appointment Modal** (`src/components/appointment-modal/`): Pop-up de contato para WhatsApp.
  * **Video Modal** (`src/components/video-modal/`): Player de lightbox para os depoimentos do YouTube.
  * **Diff Accordion** (`src/components/diff-accordion/`): Accordion de diferenciais com imagens sincronizadas.
* **`src/modules/`**: Páginas de negócio (abas) da aplicação SPA.
  * **Home** (`src/modules/home/`): Banner em vídeo, revelação de texto, tríade da formação, acoplamento de diferenciais, depoimentos e CTAs.
  * **Sobre** (`src/modules/sobre/`): Origem, vocação, significado do nome Pleroma e manifestações.
  * **Proposta** (`src/modules/proposta/`): Oficinas formativas e a visão pedagógica para a Educação Infantil de 2027.
  * **Admissão** (`src/modules/admissao/`): O fluxo de admissão de alunos em 4 passos.
  * **Faça Parte** (`src/modules/faca-parte/`): Formulário de Trabalhe Conosco (Cadastro de Currículo).
  * **Contato** (`src/modules/contato/`): Informações institucionais, redes sociais e pin de localização geográfica no Google Maps.

---

## 🗺️ Mapeamento de Slots em `index.html`

| ID do Slot | Descrição | Preenchido por | Target no JS |
| :--- | :--- | :--- | :--- |
| `#slot-header` | Menu Superior | `src/components/header/header.js` | `window.Components.header` |
| `#slot-home` | Página Inicial | `src/modules/home/home.js` | `window.Modules.home` |
| `#slot-sobre` | Página Sobre | `src/modules/sobre/sobre.js` | `window.Modules.sobre` |
| `#slot-proposta` | Página Proposta | `src/modules/proposta/proposta.js` | `window.Modules.proposta` |
| `#slot-admissao` | Página Admissão | `src/modules/admissao/admissao.js` | `window.Modules.admissao` |
| `#slot-faca-parte` | Trabalhe Conosco | `src/modules/faca-parte/faca-parte.js` | `window.Modules.facaParte` |
| `#slot-contato` | Contatos e Mapa | `src/modules/contato/contato.js` | `window.Modules.contato` |
| `#slot-footer` | Rodapé | `src/components/footer/footer.js` | `window.Components.footer` |
| `#slot-appointment-modal` | Modal Agendamento | `src/components/appointment-modal/appointment-modal.js` | `window.Components.appointmentModal` |
| `#slot-video-modal` | Modal de Vídeo | `src/components/video-modal/video-modal.js` | `window.Components.videoModal` |

---

## 🎨 Design System (Tokens Principais)

| Token CSS | Valor Hex | Uso no UI/UX |
| :--- | :--- | :--- |
| `--color-burgundy-deep` | `#521D21` | Vinho Profundo — institucional principal e cabeçalhos |
| `--color-champagne-warm` | `#C6AC8F` | Bege Champanhe — molduras, contraste sobre escuro |
| `--color-mahogany-wood` | `#3B2317` | Madeira Clássica — rodapé |
| `--color-amber-gold` | `#D4A343` | Dourado Âmbar — botões de conversão e CTAs primários |
| `--color-off-white` | `#FAF6F0` | Creme Suave — fundo principal das páginas |

---

## 🛠️ Como Executar e Testar Localmente

O protótipo é composto em runtime diretamente no navegador, sem necessidade de build ou compilação.

Para visualizar as páginas e interações, você pode:
1. Dar duplo clique em [`index.html`](index.html) para abrir diretamente sob o protocolo `file://` no navegador.
2. Ou servir a pasta localmente:
   ```bash
   npx serve novo
   ```

### Assets Utilizados
- `background.mp4` — Vídeo de fundo do hero banner.
- `brasao.png` — Logo e brasão oficial.
- `Contraturno.png` — Banner da página de Admissão.
- `Fotos/` — Diretório com fotos reais utilizadas nos diferenciais e uniformes.

---

## Soli Deo Gloria

---

## Rotas na publicação

O site utiliza rotas SPA compartilháveis: `/home`, `/sobre`, `/formacao/proposta`,
`/formacao/reforco-formativo`, `/formacao/educacao-infantil`,
`/formacao/educacao-bilingue`, `/admissao`, `/vagas` e `/contato`.

Na hospedagem, configure uma regra de *fallback* para que qualquer rota entregue
`index.html`; o arquivo `_redirects` já inclui essa regra para Netlify. Em outro
provedor, use a configuração equivalente de rewrite.

---

## Medição com Google tag

O arquivo `src/core/analytics.js` contém apenas a camada de eventos. Ele não
possui identificador de medição e não envia nada até a Google tag oficial ser
instalada pelo responsável no provedor de hospedagem ou no Google Tag Manager.

Eventos preparados: visualização de página, abertura do agendamento, geração
de lead pelo WhatsApp, candidatura e clique para canais externos. Nenhum campo
de formulário, nome, e-mail, telefone ou URL com dados pessoais é enviado.

O ID de medição/contêiner do Google é público por natureza, mas chaves de API,
tokens e outras credenciais nunca devem ser colocados no HTML ou JavaScript.
