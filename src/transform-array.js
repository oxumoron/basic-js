const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * ['--discard-prev', 1, 2, 3],
                ['--double-prev', 1, 2, 3],
                [1, 2, 3, '--double-next'],
                [1, 2, 3, '--discard-next']
 *
 */
function transform(arr) {
  let newArr = [...arr];
  const e = "'arr' parameter must be an instance of the Array!";

  if (Object.prototype.toString.call(arr) !== "[object Array]") {
    throw new Error(e);
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-prev") {
      if (i === 0) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i - 1, 2);
      }
    }

    newArr[i] === "--discard-next" ? newArr.splice(i, 2) : newArr[i];

    newArr[i] === "--double-prev" ? (newArr[i] = newArr[i - 1]) : newArr[i];

    newArr[i] === "--double-next" ? (newArr[i] = newArr[i + 1]) : newArr[i];
  }

  return newArr;
}

module.exports = {
  transform,
};
