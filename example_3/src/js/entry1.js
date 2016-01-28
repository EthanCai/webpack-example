require('../css/style.css');
require('../css/style2.css');
require('../css/index1.css');

var otherText = require('./module.js');
var $ = require('./jquery.js');
$('#txtBanner').text('It works! Ethan' + otherText);
