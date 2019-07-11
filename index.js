const widestLine = require('widest-line');

module.exports =(strings)=> Math.max(...strings.map(widestLine))