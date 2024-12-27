
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/predict/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 732, hash: '6c1f76df40da6d2cbc58d40f2dd426bc988b8a742457c4c733e3ad486baa471b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1245, hash: 'b3c6af193f03e0d2b5ad27bc5ed985e96a6f1b90facfa20c9ed59549a3453e24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
