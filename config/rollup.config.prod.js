import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

var config = {
  input: 'src/components/index.js',
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
      exclude: [
        'node_modules/react',
        'node_modules/prop-types'
      ],
      namedExports: {
        'node_modules/react/index.js': ['cloneElement', 'createElement',
          'Children', 'Component', 'PureComponent', 'Fragment'
        ],
        'node_modules/prop-types/index.js': ['PropTypes'],
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
