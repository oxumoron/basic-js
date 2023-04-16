const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numToArray = String(n)
    .split("")
    .map((el) => +el);

  return Math.max(
    ...numToArray.map((_, i) => {
      let dig = numToArray.slice();
      dig.splice(i, 1);
      return Number(dig.join(""));
    })
  );
}

module.exports = {
  deleteDigit,
};
