const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  const cat = "^^";
  let counter = 0;

  backyard.map((arr) => arr.map((el) => (el === cat ? counter++ : el)));

  return counter === 0 ? 0 : counter;
}

module.exports = {
  countCats,
};
