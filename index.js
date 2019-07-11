const widestLine = require('widest-line');

/**
 *
 * @param {string[]} strings - Array of strings.
 * @returns {number} - Returns longest line.
 * @example
 * widestString([
 * 'Hello',
 * 'Hello World', // This is widest string
 * 'Hello\nWorld',
 * ]) // 11
 */
const widestString = strings => Math.max(...strings.map(widestLine));

module.exports = widestString;
