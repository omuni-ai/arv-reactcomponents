'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/main.min.js');
} else {
  module.exports = require('./cjs/main.js');
}
