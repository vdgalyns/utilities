import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: 'dist/index.cjs.js'
        },
        {
            format: 'esm',
            file: 'dist/index.esm.js'
        }
    ],
    plugins: [typescript(), terser()]
})