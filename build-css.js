import postcss from 'postcss';
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';

const sourceDir = 'source';
const outDir = 'distribution/framework';
const entries = ['aesthetium.css', 'core.css'];

const bundleProcessor = postcss([
    postcssImport(),
    cssnano({ preset: 'default' })
]);
const moduleProcessor = postcss([
    cssnano({ preset: 'default' })
]);

function collectCssFiles(dir) {
    const files = [];
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
            files.push(...collectCssFiles(full));
        } else if (entry.endsWith('.css')) {
            files.push(full);
        }
    }
    return files;
}

async function writeCss(out, css) {
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, css);
    console.log(`Built ${out} (${(css.length / 1024).toFixed(1)} kB)`);
}

mkdirSync(outDir, { recursive: true });

for (const entry of entries) {
    const src = join(sourceDir, entry);
    const out = join(outDir, entry);
    const css = readFileSync(src, 'utf8');
    const result = await bundleProcessor.process(css, { from: src, to: out });
    await writeCss(out, result.css);
}

for (const src of collectCssFiles(sourceDir)) {
    const rel = relative(sourceDir, src);
    if (entries.includes(rel)) continue;

    const out = join(outDir, rel);
    const css = readFileSync(src, 'utf8');
    const result = await moduleProcessor.process(css, { from: src, to: out });
    await writeCss(out, result.css);
}
