const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const outputRoot = path.join(projectRoot, 'dist');
const pages = [
  { file: 'index.html', canonical: 'https://colegiopleroma.com.br/', main: 'page-home', schema: 'WebSite' },
  { file: 'sobre.html', canonical: 'https://colegiopleroma.com.br/sobre', main: 'page-sobre', schema: 'AboutPage' },
  { file: 'formacao/proposta.html', canonical: 'https://colegiopleroma.com.br/formacao/proposta', main: 'page-proposta', formation: 'proposta', schema: 'WebPage' },
  { file: 'formacao/reforco-formativo.html', canonical: 'https://colegiopleroma.com.br/formacao/reforco-formativo', main: 'page-proposta', formation: 'reforco', schema: 'WebPage' },
  { file: 'formacao/educacao-infantil.html', canonical: 'https://colegiopleroma.com.br/formacao/educacao-infantil', main: 'page-proposta', formation: 'infantil', schema: 'WebPage' },
  { file: 'formacao/educacao-bilingue.html', canonical: 'https://colegiopleroma.com.br/formacao/educacao-bilingue', main: 'page-proposta', formation: 'bilingue', schema: 'WebPage' },
  { file: 'admissao.html', canonical: 'https://colegiopleroma.com.br/admissao', main: 'page-admissao', schema: 'WebPage' },
  { file: 'vagas.html', canonical: 'https://colegiopleroma.com.br/vagas', main: 'page-faca-parte' },
  { file: 'contato.html', canonical: 'https://colegiopleroma.com.br/contato', main: 'page-contato', schema: 'ContactPage' }
];

const failures = [];
function assert(condition, message) {
  if (!condition) failures.push(message);
}

pages.forEach(page => {
  const filePath = path.join(outputRoot, page.file);
  assert(fs.existsSync(filePath), `${page.file}: arquivo ausente`);
  if (!fs.existsSync(filePath)) return;
  const html = fs.readFileSync(filePath, 'utf8');
  assert(html.includes('data-prerendered="true"'), `${page.file}: marcador de pré-renderização ausente`);
  const routePath = new URL(page.canonical).pathname;
  assert(html.includes(`data-route-path="${routePath}"`), `${page.file}: rota local de pré-renderização ausente`);
  assert(html.includes(`rel="canonical" href="${page.canonical}"`), `${page.file}: canonical incorreta`);
  assert(html.includes(`id="${page.main}"`), `${page.file}: conteúdo principal incorreto`);
  assert(!html.includes('id="slot-home"'), `${page.file}: slots vazios da SPA ainda presentes`);
  assert(/<title>[^<]+<\/title>/.test(html), `${page.file}: title ausente`);
  assert(/<meta name="description" content="[^"]+" \/>/.test(html), `${page.file}: description ausente`);
  assert((html.match(/<h1\b/g) || []).length === 1, `${page.file}: deve conter exatamente um H1`);
  if (page.schema) {
    const jsonLdMatch = html.match(/<script id="seo-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert(Boolean(jsonLdMatch), `${page.file}: JSON-LD estático ausente`);
    if (jsonLdMatch) {
      try {
        const graph = JSON.parse(jsonLdMatch[1])['@graph'];
        const hasExpectedType = graph.some(item => {
          const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
          return types.includes(page.schema);
        });
        assert(hasExpectedType, `${page.file}: tipo JSON-LD ${page.schema} ausente`);
      } catch (error) {
        failures.push(`${page.file}: JSON-LD inválido (${error.message})`);
      }
    }
  }
  if (page.formation) {
    assert(html.includes('<base id="app-base" href="../" />'), `${page.file}: base local do módulo de formação incorreta`);
    const moduleIds = html.match(/id="formacao-module-[^"]+"/g) || [];
    assert(moduleIds.length === 1, `${page.file}: deve conter somente um módulo de formação`);
    assert(moduleIds[0] === `id="formacao-module-${page.formation}"`, `${page.file}: módulo de formação incorreto`);
  }
  if (!page.formation) {
    assert(html.includes('<base id="app-base" href="./" />'), `${page.file}: base local da página incorreta`);
  }
});

const notFoundPath = path.join(outputRoot, '404.html');
assert(fs.existsSync(notFoundPath), '404.html: arquivo ausente');
if (fs.existsSync(notFoundPath)) {
  const notFound = fs.readFileSync(notFoundPath, 'utf8');
  assert(notFound.includes('content="noindex, follow"'), '404.html: diretiva noindex ausente');
  assert(notFound.includes('Página não encontrada'), '404.html: conteúdo de erro ausente');
}

['src/core/navigation.js', 'src/core/seo.js', 'Fotos', 'public', 'robots.txt', 'sitemap.xml', '.htaccess'].forEach(relativePath => {
  assert(fs.existsSync(path.join(outputRoot, relativePath)), `${relativePath}: asset de publicação ausente`);
});

const sitemap = fs.readFileSync(path.join(outputRoot, 'sitemap.xml'), 'utf8');
pages.forEach(page => assert(sitemap.includes(`<loc>${page.canonical}</loc>`), `${page.file}: URL ausente do sitemap`));

if (failures.length) {
  console.error(`Validação falhou com ${failures.length} erro(s):`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Validação concluída: ${pages.length} páginas, 1 página 404 e assets de publicação.`);
