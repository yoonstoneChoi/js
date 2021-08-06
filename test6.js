var calc2 = require('./calc2');

console.log('모듈로 분리한 후 - ' + calc2.add(20,20));

var nconf = require('nconf');
nconf.env();
var val = nconf.get('OS');

console.log('OS환경변수의 값' + val);
