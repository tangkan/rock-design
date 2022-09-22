// rollup.config.js
// import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import NpmImport from 'less-plugin-npm-import';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
// import dts from 'rollup-plugin-dts'
// import { terser } from 'rollup-plugin-terser'
import jsx from 'acorn-jsx';
import cssnano from 'cssnano';
import pkg from './package.json';

// 环境变量
const BABEL_ENV = process.env.BABEL_ENV;
const isProd = BABEL_ENV === 'production';

// Babel配置
const babelOptions = {
  presets: ['@babel/preset-react'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  exclude: '**/node_modules/**',
};

export default {
  input: 'components/index.tsx',
  acornInjectPlugins: [jsx()],
  output: [
    // {
    //   file: pkg.module,
    //   format: 'cjs',
    // },
    {
      file: pkg.main,
      format: 'esm',
    },
  ],
  plugins: [
    // resolve(['js', 'ts', 'tsx']),
    json(),
    commonjs(),
    babel(babelOptions),
    typescript({ jsx: 'preserve' }),
    postcss({
      extract: true,
      extensions: ['.css', '.less'],
      plugins: [cssnano()],
      use: [
        [
          'less',
          {
            plugins: [new NpmImport({ prefix: '~' })],
            javascriptEnabled: true,
          },
        ],
      ],
    }),
    // less(),
    // filesize()
    // terser(),
  ],
};
