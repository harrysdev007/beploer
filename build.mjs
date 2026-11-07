import { build } from 'esbuild';
import { cp, mkdir, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, sourcemap: false, outdir: 'dist/assets', entryNames: 'main', assetNames: '[name]-[hash]', loader: { '.woff2': 'file', '.woff': 'file' }, target: ['es2020'], legalComments: 'eof', metafile: true }).then(r => writeFile('dist/assets/build-meta.json', JSON.stringify({ inputs: Object.keys(r.metafile.inputs), outputs: Object.fromEntries(Object.entries(r.metafile.outputs).map(([k,v]) => [k, {bytes:v.bytes}])) }, null, 2)));
console.log('BEPLOYER built successfully. Static output: dist');
