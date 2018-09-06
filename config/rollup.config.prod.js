import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

var config = {
  input: 'src/components/index.js',
  external: ['react', 'prop-types'],
  output: [{
    file: 'bundle/cjs/main.min.js',
    format: 'cjs'
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
      babelrc: false,
      exclude: 'node_modules/**',
      "presets": [
        ["env", {
          "modules": false
        }],
        "es2017",
        "stage-0",
        "react"
      ],
      plugins: ['external-helpers']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    uglify({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ]
}

export default config;
