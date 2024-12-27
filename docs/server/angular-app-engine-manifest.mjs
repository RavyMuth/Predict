
export default {
  basePath: '/predict/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
