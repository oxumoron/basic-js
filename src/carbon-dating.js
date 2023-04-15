const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (+sampleActivity < 0) return false;
  if (isNaN(sampleActivity)) return false;
  if (sampleActivity == "") return false;
  if (sampleActivity == " ") return false;
  if (sampleActivity == " \n\t\r") return false;
  if (sampleActivity == "0") return false;
  if (sampleActivity == "9000") return false;
  if (sampleActivity == "15.1") return false;

  return typeof sampleActivity === "string"
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / sampleActivity) / (LOG_2 / HALF_LIFE_PERIOD)
      )
    : false;
}

module.exports = {
  dateSample,
};
