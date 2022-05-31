import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import jsx from 'acorn-jsx';

export default {
  input: "./src/index.ts",
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      modules: true,
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx']
    })
  ],
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
    plugins: [
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      })
    ]
  }]
}
