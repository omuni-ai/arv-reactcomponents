import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

import copyFiles from "./rollup.copyfiles.plugin.js"

var config = [{
  input: 'src/components/index.js',
  external: ['react', 'prop-types'],
  output: [{
    file: 'bundle/cjs/main.js',
    format: 'cjs',
    sourcemap: true
  }],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'src/components/constants.js': ['windowRequestAnimationFrame', 'vendorRequestAnimationFrame']
      }
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    copyFiles({
      input: 'src/components',
      output: 'bundle/components',
      matches: /.*\.scss$/
    })
  ]
}, {
  input: 'bundle/cjs/main.js',
  output: [{
    file: 'bundle/cjs/main.min.js',
    format: 'cjs'
  }],
  plugins: [
    uglify({
      compress: {
        dead_code: true,
        global_defs: {
            DEBUG: false
        }
      },
      output: {
        comments: false,
        beautify: false,
        preamble: "/* uglified */"
      },
      warnings: false,
      sourcemap: false
    })
  ]
}];

export default config;