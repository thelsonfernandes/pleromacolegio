# Tarefa 1: Definição da Especificação Global e Design System (`/novo/specs/`)
- Objetivo: Estabelecer o contrato de arquitetura, padrões de código e variáveis globais do protótipo `/novo` para evitar redundâncias nas próximas etapas.

- Ações da IA:
  - Consolidar o Design System a partir do `gemini-code.html` atual e dos documentos `arquitetura_site_colegio_pleroma.md`, `copywriting_planejamento_pleroma.md` e `design_system_consolidado_pleroma.md` (tokens de cor, tipografia, espaçamento).
  - Definir o padrão de roteamento SPA baseado em abas (`navigateTo`) e o gerenciamento dos dois modais (agendamento e vídeo).
  - Documentar o contrato do accordion "Nossos Diferenciais" (item ativo ↔ imagem sincronizada) e do efeito `reveal-text` (preenchimento de texto no scroll).

- Saída esperada: Arquivo `novo/specs/architecture-spec.md`.

---

# Tarefa 2: Extração do Core e Componentes Globais (`/novo/src/core/` e `/novo/src/components/`)
- Objetivo: Isolar a estrutura base que se repete em todas as páginas do protótipo.

- Ações da IA:
  - Criar o layout mestre contendo o `<head>` global (fontes, tokens `:root`) e o esqueleto de `index.html` com os slots vazios.
  - Modularizar o **Header** (logo `brasao.png`, navegação, botão `header-cta` com a lógica de aparecer/subir ao rolar) e o **Footer**.
  - Modularizar o **Modal de Agendamento** (`appointment-modal`) e o **Modal de Vídeo** (`video-modal`, player dinâmico do YouTube usado nos Depoimentos).
  - Modularizar o componente de **Accordion de Diferenciais** (`diff-accordion`), reaproveitável caso outras páginas precisem do mesmo padrão lista + imagem lateral.

- Saída esperada: Arquivos de componentes e o respectivo `README.md` em `/novo/src/components/`.

---

# Tarefa 3: Modularização das Páginas de Negócio (`/novo/src/modules/`)
- Objetivo: Dividir o conteúdo principal em seções independentes correspondentes a cada aba da aplicação.

- Ações da IA (executar sequencialmente por módulo para poupar tokens):
  - **Módulo Home** (`/novo/src/modules/home/`): Hero em vídeo, banner "Seja bem-vindo ao Pleroma" (reveal-text), Cultura Visual e Pertencimento, Tríade Central, Diferenciais (accordion), Depoimentos (vídeo) e CTA de Admissão.
  - **Módulo Sobre** (`/novo/src/modules/sobre/`): Banner estático, manifesto "Origem & Vocação", significação do nome Pleroma, citação de Efésios 3:18-19.
  - **Módulo Proposta** (`/novo/src/modules/proposta/`): Reforço Formativo (2 a 5 anos, turnos e as 5 Oficinas Formativas) e bloco "Colégio Pleroma 2027".
  - **Módulo Admissão** (`/novo/src/modules/admissao/`): Processo admissional em 4 passos e CTA final via WhatsApp.
  - **Módulo Faça Parte** (`/novo/src/modules/faca-parte/`): Formulário de candidatura (docência, preceptoria, administrativo).
  - **Módulo Contato** (`/novo/src/modules/contato/`): Endereço, WhatsApp, Instagram e mapa do Google incorporado.

- Saída esperada: Código limpo para cada aba acompanhado obrigatoriamente de seu respectivo `README.md` técnico.

---

# Tarefa 4: Integração Final e Orquestração SPA (`/novo/src/`)
- Objetivo: Unificar os módulos através do script centralizador de navegação e montagem em runtime.

- Ações da IA:
  - Escrever `navigation.js` com o controle de visibilidade das abas (`navigateTo(pageId)`), o toggle de `.scrolled` no header e `updateHeaderCta()`.
  - Escrever `utils.js` com a lógica dos modais (`openModal`/`closeModal`, `showVideoModal`/`closeVideoModal`), do accordion (`toggleDiffAccordion`) e do `updateRevealText()`.
  - Escrever `renderer.js`, responsável por injetar os templates de `Components`/`Modules` nos slots de `index.html` e inicializar a SPA (ativando a aba Home por padrão).
  - Criar o `README.md` raiz de `/novo` consolidando as instruções de execução local e o mapeamento completo do protótipo modularizado.
