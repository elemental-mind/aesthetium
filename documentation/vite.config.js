import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import cssnano from 'cssnano';
import { resolve, relative } from 'path';
import { readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';

const docsDir = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = resolve(docsDir, '..');

function collectHtmlInputs(dir, skip = ['partials']) {
    const inputs = {};
    for (const entry of readdirSync(dir)) {
        const full = resolve(dir, entry);
        if (statSync(full).isDirectory()) {
            if (!skip.includes(entry))
                Object.assign(inputs, collectHtmlInputs(full, skip));
        } else if (entry.endsWith('.html')) {
            const key = relative(projectRoot, full).replace(/\\/g, '/').replace(/\.html$/, '');
            inputs[key] = full;
        }
    }
    return inputs;
}

export default defineConfig({
    root: projectRoot,
    plugins: [injectHTML()],
    css: {
        postcss: { plugins: [cssnano({ preset: 'default' })] }
    },
    base: './',
    build: {
        outDir: resolve(projectRoot, 'documentation_distribution'),
        emptyOutDir: true,
        cssCodeSplit: false,
        rollupOptions: {
            input: collectHtmlInputs(docsDir),
            output: {
                assetFileNames: info =>
                    info.name?.endsWith('.css')
                        ? 'aesthetium.css'
                        : 'assets/[name]-[hash][extname]'
            }
        }
    }
});
