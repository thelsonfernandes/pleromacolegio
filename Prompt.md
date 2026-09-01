# Prompt de Engenharia: Refatoração Modular do Protótipo `/novo` (Colégio Pleroma)

## 1. Visão Geral do Projeto
Atuar como Arquiteto de Software Sênior e Desenvolvedor Frontend para refatorar o arquivo monolítico `novo/gemini-code.html` ("Colégio Cristão Clássico Pleroma") em uma **Arquitetura Modular baseada em Componentes e Especificações (Spec-driven development)**, seguindo o mesmo padrão já adotado na raiz do projeto (`Prompt.md`, `README.md`, `Tarefas.md`, `src/`, `specs/`).

O protótipo original de `/novo` utiliza CSS puro com Custom Properties (sem Tailwind), Google Fonts (Cinzel, Cormorant Garamond, Montserrat e Alex Brush) e JavaScript puro para navegação SPA baseada em abas (`navigateTo`), além de vídeo de fundo no hero, accordion interativo, modal de agendamento, modal de vídeo (depoimentos) e um efeito de preenchimento de texto no scroll.

Este é um protótipo visual **independente** do site já modularizado na raiz (`index.html` + `src/`) — a paleta, a copy e a arquitetura de informação são diferentes (ver seção 4). A refatoração aqui descrita não deve ser confundida nem misturada com os módulos já existentes em `/src`.

---

## 2. Padrão de Arquitetura e Estruturação de Pastas
O projeto deve ser dividido estritamente em módulos independentes, dentro de `/novo`. Cada módulo precisa residir em seu próprio diretório e vir acompanhado de um arquivo `README.md` detalhado contendo a documentação técnica, responsabilidades e instruções de uso daquele bloco específico.

Estrutura de diretórios esperada:
```text
novo/
├── specs/                     # Especificações globais do protótipo (Design System, Fluxos)
│   └── architecture-spec.md
├── src/
│   ├── core/                  # Configurações globais (tokens CSS, fontes, scripts de utilidade)
│   │   ├── navigation.js      # navigateTo(pageId), controle de header.scrolled e header-cta
│   │   ├── utils.js           # Modais (agendamento/vídeo), formulários, accordion, reveal-text
│   │   └── renderer.js        # Injeta os templates de Components/Modules nos slots do index.html
│   ├── components/            # Componentes reutilizáveis
│   │   ├── header/            # Logo (brasao.png), navegação, botão "Agende uma Visita" (header-cta)
│   │   ├── footer/            # Rodapé institucional (Madeira Clássica)
│   │   ├── appointment-modal/ # Modal de agendamento de reunião
│   │   ├── video-modal/       # Modal de vídeo (player do YouTube para depoimentos)
│   │   └── diff-accordion/    # Accordion "Nossos Diferenciais" (lista + imagem sincronizada)
│   └── modules/                # Módulos de negócio baseados nas abas da SPA
│       ├── home/               # Hero em vídeo, mensagem "Bem-vindo" (reveal-text), Cultura Visual,
│       │                       # Tríade Central, Diferenciais, Depoimentos, CTA de Admissão
│       ├── sobre/               # Origem & Vocação, manifesto, significado do nome, citação bíblica
│       ├── proposta/            # Reforço Formativo (2 a 5 anos) e Visão 2027 (Educação Infantil)
│       ├── admissao/            # Processo admissional em 4 passos
│       ├── faca-parte/          # Trabalhe Conosco (formulário de candidatura)
│       └── contato/             # Canais de contato, WhatsApp, Instagram e mapa do Google
├── public/                     # Assets estáticos (ou referência a novo/Fotos, brasao.png, etc.)
├── index.html                  # Composição em runtime via <script src="...">, sem etapa de build
└── README.md                   # Documentação raiz do protótipo modularizado
```

---

## 3. Diretrizes para a Criação dos Módulos e Documentação (README)
Para cada módulo gerado no diretório correspondente (`/novo/src/modules/X/` ou `/novo/src/components/X/`), deve ser criado obrigatoriamente um arquivo `README.md` estruturado da seguinte forma:

- **Nome do Módulo**: Identificação clara da funcionalidade.
- **Propósito e Responsabilidade**: O que este módulo faz dentro do ecossistema do protótipo Pleroma.
- **Dependências**: Quais assets (`Fotos/`, `brasao.png`, `background.mp4`, `Contraturno.png`), estilos (tokens do `:root`) ou outros componentes ele consome.
- **Estrutura de Arquivos Internos**: Explicar os subcomponentes ou trechos de código lógicos contidos nele.
- **Guia de Uso/Integração**: Como instanciar ou injetar este módulo/componente no `index.html` principal via `renderer.js`.

---

## 4. Requisitos Técnicos e Visuais Obrigatórios

**Identidade Visual (Design System)**: Manter rigorosamente a paleta de cores do protótipo `/novo` (distinta da paleta usada em `/src` na raiz):

| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--color-burgundy-deep` | `#521D21` | Vinho Profundo — cor institucional, overlays, headers |
| `--color-champagne-warm` | `#C6AC8F` | Bege Champanhe — molduras, texto sobre fundo escuro |
| `--color-crimson-dark` | `#7A0C0D` | Carmim — hover de botões escuros |
| `--color-mahogany-wood` | `#3B2317` | Madeira Clássica — rodapé |
| `--color-amber-gold` | `#D4A343` | Dourado Âmbar — CTAs de conversão |
| `--color-amber-gold-dark` | `#B8882D` | Dourado escuro — texto/ícones sobre fundo claro |
| `--color-off-white` | `#FAF6F0` | Creme Suave — fundo principal |
| `--color-off-black` | `#1A1112` | Texto corrido |

**Tipografia**: Manter as quatro famílias já carregadas via Google Fonts — `Cinzel` (display/títulos), `Cormorant Garamond` (editorial/corpo longo), `Montserrat` (interface/sans) e `Alex Brush` (acento script/caligráfico).

**Responsividade**: Garantir adaptação fluida para dispositivos móveis, incluindo o comportamento full-bleed do accordion de Diferenciais (lista + imagem lateral) e o empilhamento correto do hero em telas menores.

**Interatividade**: Preservar integralmente a lógica já existente:
- Navegação SPA por abas (`navigateTo`), com scroll suave ao topo.
- Botão "Agende uma Visita" do header, que nasce oculto sobre o hero da Home e "sobe" (fade + slide) assim que o hero sai da tela (`updateHeaderCta`).
- Vídeo de fundo do hero (`background.mp4`) com fallback de poster.
- Accordion "Nossos Diferenciais" com imagem lateral sincronizada por item (`toggleDiffAccordion`).
- Efeito de preenchimento de texto "Seja bem-vindo ao Pleroma" acompanhando o scroll (`updateRevealText`).
- Modal de agendamento (`openModal`/`closeModal`) e modal de vídeo de depoimentos (`showVideoModal`/`closeVideoModal`), incluindo fechamento via tecla ESC.
- Redirecionamentos para o WhatsApp oficial (`5532991114565`) e envio simulado de formulários (Faça Parte, Agendamento).

---

## 5. Entregas Esperadas
1. **Especificação Técnica (Spec)**: `specs/architecture-spec.md` detalhando o Design System, o contrato de navegação SPA e o ciclo de vida dos modais/accordion/reveal-text.
2. **Código Modularizado**: Componentes e módulos desacoplados dentro de `src/`, extraídos de `gemini-code.html` sem alterar o comportamento visual ou funcional atual.
3. **Documentação Modular (`README.md`)**: Todos os arquivos de documentação descritos na estrutura de pastas, preenchidos de forma técnica e clara.
4. **`index.html` de composição**: Substituindo o arquivo monolítico, carregando os módulos via `<script src="...">` e montado em runtime pelo `renderer.js`.
