'use strict';

var ejs = require('ejs');
var assign = require('object-assign');

function ejsRenderer(data, locals) {
  return ejs.render(data.text, assign({filename: data.path}, locals), {delimiter: '?'});
}

ejsRenderer.compile = function(data) {
  return ejs.compile(data.text, {
    filename: data.path
  });
};

module.exports = ejsRenderer;
