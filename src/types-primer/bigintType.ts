const safeInt = Number.MAX_SAFE_INTEGER;

const result1 = safeInt + safeInt + safeInt;

const resutl2 = safeInt + 4000;

console.log(safeInt, result1, resutl2, result1 === resutl2);
console.log(Number.MAX_VALUE);

/***
 * Big Int: Big Types respresents variable that hold large integer values.
 * Big Int supports only integer values and does not support floating point numbers
 */

const rangeVale: bigint = 100n;
const adderRange: bigint = 200n;

console.log(rangeVale + adderRange);
