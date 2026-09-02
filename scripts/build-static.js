const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const outputRoot = path.join(projectRoot, 'dist');
const sourceIndex = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');

const routes = [
  { path: '/', output: 'index.html', module: 'home' },
  { path: '/sobre', output: 'sobre.html', module: 'sobre' },
  { path: '/formacao/proposta', output: 'formacao/proposta.html', module: 'proposta', formation: 'proposta' },
  { path: '/formacao/reforco-formativo', output: 'formacao/reforco-formativo.html', module: 'proposta', formation: 'reforco' },
  { path: '/formacao/educacao-infantil', output: 'formacao/educacao-infantil.html', module: 'proposta', formation: 'infantil' },
  { path: '/formacao/educacao-bilingue', output: 'formacao/educacao-bilingue.html', module: 'proposta', formation: 'bilingue' },
  { path: '/admissao', output: 'admissao.html', module: 'admissao' },
  { path: '/vagas', output: 'vagas.html', module: 'facaParte' },
  { path: '/contato', output: 'contato.html', module: 'contato' }
];

const templateContext = { window: {} };
vm.createContext(templateContext);

[
  'src/components/header/header.js',
  'src/components/footer/footer.js',
  'src/components/appointment-modal/appointment-modal.js',
  'src/components/video-modal/video-modal.js',
  'src/components/diff-accordion/diff-accordion.js',
  'src/modules/home/home.js',
  'src/modules/sobre/sobre.js',
  'src/modules/proposta/proposta.js',
  'src/modules/admissao/admissao.js',
  'src/modules/faca-parte/faca-parte.js',
  'src/modules/contato/contato.js'
].forEach(relativePath => {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
  vm.runInContext(source, templateContext, { filename: relativePath });
});

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function captureSeo(routePath) {
  const appended = [];
  const metaValues = {};
  const document = {
    title: '',
    head: { appendChild(node) { appended.push(node); } },
    querySelector(selector) {
      if (selector === 'link[rel="canonical"]') return null;
      return {
        setAttribute(name, value) {
          if (name === 'content') metaValues[selector] = value;
        }
      };
    },
    getElementById() { return null; },
    createElement(tag) { return { tag, setAttribute() {}, remove() {} }; }
  };
  const context = { document, URL, window: { location: { pathname: routePath } } };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(projectRoot, 'src/core/seo.js'), 'utf8'), context);
  context.updateSeoForPath(routePath);

  return {
    title: document.title,
    description: metaValues['meta[name="description"]'],
    canonical: appended.find(node => node.rel === 'canonical')?.href,
    ogTitle: metaValues['#seo-og-title'],
    ogDescription: metaValues['#seo-og-description'],
    ogUrl: metaValues['#seo-og-url'],
    ogImage: metaValues['#seo-og-image'],
    twitterTitle: metaValues['#seo-twitter-title'],
    twitterDescription: metaValues['#seo-twitter-description'],
    twitterImage: metaValues['#seo-twitter-image'],
    structuredData: appended.find(node => node.type === 'application/ld+json')?.textContent
  };
}

function replaceMetaContentById(html, id, content) {
  const tagPattern = new RegExp(`<meta(?=[^>]*\\bid="${id}")[^>]*>`, 'i');
  return html.replace(tagPattern, tag => tag.replace(/content="[^"]*"/i, `content="${escapeAttribute(content)}"`));
}

function applyStaticSeo(html, seo) {
  let result = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(seo.title)}</title>`);
  result = result.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${escapeAttribute(seo.description)}" />`
  );
  result = replaceMetaContentById(result, 'seo-og-title', seo.ogTitle);
  result = replaceMetaContentById(result, 'seo-og-description', seo.ogDescription);
  result = replaceMetaContentById(result, 'seo-og-url', seo.ogUrl);
  result = replaceMetaContentById(result, 'seo-og-image', seo.ogImage);
  result = replaceMetaContentById(result, 'seo-twitter-title', seo.twitterTitle);
  result = replaceMetaContentById(result, 'seo-twitter-description', seo.twitterDescription);
  result = replaceMetaContentById(result, 'seo-twitter-image', seo.twitterImage);

  const headAdditions = [
    `<link rel="canonical" href="${escapeAttribute(seo.canonical)}" />`,
    seo.structuredData
      ? `<script id="seo-structured-data" type="application/ld+json">${seo.structuredData.replace(/<\/script/gi, '<\\/script')}</script>`
      : ''
  ].filter(Boolean).join('\n  ');

  return result.replace('</head>', `  ${headAdditions}\n</head>`);
}

function extractDivById(html, id) {
  const start = html.indexOf(`<div id="${id}"`);
  if (start < 0) throw new Error(`Elemento #${id} não encontrado no template.`);

  const tagPattern = /<\/?div\b[^>]*>/gi;
  tagPattern.lastIndex = start;
  let depth = 0;
  let match;
  while ((match = tagPattern.exec(html))) {
    if (/^<div\b/i.test(match[0])) depth += 1;
    else depth -= 1;
    if (depth === 0) return html.slice(start, tagPattern.lastIndex);
  }
  throw new Error(`Elemento #${id} não foi fechado corretamente.`);
}

function buildFormationPage(template, moduleName) {
  const firstModuleIndex = template.indexOf('<div id="formacao-module-proposta"');
  if (firstModuleIndex < 0) throw new Error('Início dos módulos de formação não encontrado.');

  const titles = {
    proposta: 'Proposta <span class="accent-script">Pedagógica</span>',
    reforco: 'Reforço <span class="accent-script">Formativo</span>',
    infantil: 'Educação <span class="accent-script">Infantil</span>',
    bilingue: 'Educação <span class="accent-script">Bilíngue</span>'
  };
  const prefix = template.slice(0, firstModuleIndex).replace(
    /<h1([^>]*id="formacao-title"[^>]*)>[\s\S]*?<\/h1>/i,
    `<h1$1>${titles[moduleName]}</h1>`
  );
  const selectedModule = extractDivById(template, `formacao-module-${moduleName}`)
    .replace(/\s+hidden(?=[\s>])/, '');
  return `${prefix}${selectedModule}\n  </main>`;
}

function getPageMarkup(route) {
  const modules = templateContext.window.Modules;
  let page = route.formation
    ? buildFormationPage(modules.proposta, route.formation)
    : modules[route.module];
  if (!page) throw new Error(`Template do módulo ${route.module} não encontrado.`);
  return page.replace(/class="page-section(?: active)?"/, 'class="page-section active"');
}

function buildBody(route) {
  const components = templateContext.window.Components;
  const scriptsStart = sourceIndex.indexOf('  <!-- COMPONENTES GLOBAIS -->');
  const scriptsEnd = sourceIndex.indexOf('</body>');
  const scripts = sourceIndex.slice(scriptsStart, scriptsEnd).trimEnd();
  return [
    '<body>',
    components.header,
    getPageMarkup(route),
    components.footer,
    components.appointmentModal,
    components.videoModal,
    scripts,
    '</body>'
  ].join('\n\n');
}

function buildPage(route) {
  const bodyStart = sourceIndex.indexOf('<body>');
  const bodyEnd = sourceIndex.indexOf('</body>') + '</body>'.length;
  let html = sourceIndex.slice(0, bodyStart) + buildBody(route) + sourceIndex.slice(bodyEnd);
  const outputDepth = route.output.split('/').length - 1;
  const baseHref = outputDepth ? '../'.repeat(outputDepth) : './';
  html = html.replace(
    '<html lang="pt-BR">',
    `<html lang="pt-BR" data-prerendered="true" data-route-path="${route.path}">`
  );
  html = html.replace(/<base id="app-base" href="[^"]*" \/>/, `<base id="app-base" href="${baseHref}" />`);
  return applyStaticSeo(html, captureSeo(route.path));
}

function buildNotFoundPage() {
  const components = templateContext.window.Components;
  const bodyStart = sourceIndex.indexOf('<body>');
  const bodyEnd = sourceIndex.indexOf('</body>') + '</body>'.length;
  const staticHeader = components.header.replace(/\s+onclick="[^"]*"/g, '');
  const staticFooter = components.footer.replace(/\s+onclick="[^"]*"/g, '');
  const body = `<body>\n${staticHeader}\n<main class="page-section active">\n<section class="section-padding text-center" style="padding-top: 190px; min-height: 65vh;">\n<div class="container" style="max-width: 760px;">\n<span class="eyebrow-label">Erro 404</span>\n<h1 class="display-h1">Página não encontrada</h1>\n<p class="body-large" style="margin: var(--space-4) 0;">O endereço informado não existe ou foi alterado.</p>\n<a class="btn btn-primary" href="/">Voltar ao início</a>\n</div>\n</section>\n</main>\n${staticFooter}\n</body>`;
  let html = sourceIndex.slice(0, bodyStart) + body + sourceIndex.slice(bodyEnd);
  html = html.replace('<html lang="pt-BR">', '<html lang="pt-BR" data-prerendered="true">');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Página não encontrada | Pleroma</title>');
  html = html.replace(/<meta\s+name="description"[\s\S]*?\/>/i, '<meta name="description" content="A página solicitada não foi encontrada no site do Colégio Pleroma." />');
  html = html.replace(/<meta\s+name="robots"[^>]*>/i, '<meta name="robots" content="noindex, follow" />');
  return html;
}

function copyRuntimeFiles() {
  ['src', 'Fotos', 'public'].forEach(directory => {
    fs.cpSync(path.join(projectRoot, directory), path.join(outputRoot, directory), { recursive: true });
  });
  ['background.mp4', 'brasao.png', 'Contraturno.png', 'robots.txt', 'sitemap.xml', '.htaccess'].forEach(file => {
    fs.copyFileSync(path.join(projectRoot, file), path.join(outputRoot, file));
  });
}

if (path.dirname(outputRoot) !== projectRoot || path.basename(outputRoot) !== 'dist') {
  throw new Error('Destino de geração estática inválido.');
}
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });
copyRuntimeFiles();

routes.forEach(route => {
  const outputPath = path.join(outputRoot, route.output);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buildPage(route), 'utf8');
});
fs.writeFileSync(path.join(outputRoot, '404.html'), buildNotFoundPage(), 'utf8');

console.log(`Site estático gerado em ${outputRoot}`);
console.log(`${routes.length} páginas públicas + página 404.`);
