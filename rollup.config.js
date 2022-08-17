// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import NpmImport from 'less-plugin-npm-import'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
// import { terser } from 'rollup-plugin-terser'
import less from 'rollup-plugin-less';
import jsx from 'acorn-jsx'


// 环境变量
const BABEL_ENV = process.env.BABEL_ENV
const isProd = BABEL_ENV === 'production'

// Babel配置
const babelOptions = {
  presets: ["@babel/preset-react"],
  extensions: ['.js', '.jsx', '.ts', '.tsx',],
  exclude: "**/node_modules/**"
}

export default {
  input: "components/index.tsx",
  acornInjectPlugins: [jsx()],
  output: {
    file: 'lib/index.js',
    // dir: 'dist/',
    format: 'esm'
  },
  plugins: [
    // resolve(),
    json(),
    commonjs(),
    babel(babelOptions),
    typescript({ jsx: 'preserve' }),
    postcss({
      extract: true,
      extensions: ['.css', '.less'],
      use: [['less', {
        plugins: [new NpmImport({ prefix: '~' })],
        javascriptEnabled: true,
      }]],
    }),
    // less(),
    // filesize()
    // terser(),
  ],
};