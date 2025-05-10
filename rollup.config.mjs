import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',  // Entry point
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',        // ESM - for modern bundlers
      sourcemap: true,
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
  external: [] // Add peer deps or built-ins here, like ['react']
});