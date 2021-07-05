require('esbuild').build({
  entryPoints: ['src/electron/index.ts'],
  bundle: true,
  outfile: 'dist/core/index.js',
  platform: 'node',
  target: 'node12',
  minify: true,
  external: [
    'electron',
    'fs',
    'path',
    'mime-types',
    'events',
  ]
}).catch(() => process.exit(1))