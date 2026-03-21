import postcss from 'postcss';
import postcssImport from 'postcss-import';
import cssnano from 'cssnano';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const src = 'source/aesthetium.css';
const out = 'framework_distribution/aesthetium.css';

const css = readFileSync(src, 'utf8');
const result = await postcss([
    postcssImport(),
    cssnano({ preset: 'default' })
]).process(css, { from: src, to: out });

mkdirSync('framework_distribution', { recursive: true });
writeFileSync(out, result.css);
console.log(`Built ${out} (${(result.css.length / 1024).toFixed(1)} kB)`);
