import resolve from '@rollup/plugin-node-resolve';
// rollup默认是不支持CommonJS模块的，自己写的时候可以尽量避免使用CommonJS模块的语法，
//但有些外部库的是cjs或者umd（由webpack打包的），
//  所以使用这些外部库就需要支持CommonJS模块。
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// 用于转换es6语法。
import babel from '@rollup/plugin-babel';

export default {
  input: './src/index.ts',
  plugins: [
    resolve(), // 引入方式可以不加后缀 import bar from './bar'
    commonjs(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', 'ts'],
      exclude: 'node_modules/**',
    }),
  ],
  output: [
    {
      file: 'dist/index-cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index-es.js',
      format: 'es',
    },
    {
      file: 'dist/index-umd.js',
      format: 'umd',
      name: 'maile',
    },
  ],
};
