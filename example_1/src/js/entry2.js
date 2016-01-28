require('../css/style.css');
require('../css/style2.css');
require('../css/index2.css');

var otherText = require('./module2.js');
var $ = require('./jquery.js');

$('#txtBanner').text('It doesn\'t works.' + otherText);
