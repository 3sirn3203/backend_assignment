/**
 * Exercise 1: Number of Cases Calcuating Module
 */

const { get } = require("lodash");

const permutation = (n, r) => {
    if (n < r) return 0;
    if (r === 0) return 1;
    let result = 1;
    for (let i = n; i > n - r; i--) {
        result *= i;
    }
    return result;
}
const combination = (n, r) => {
    if (n < r) return 0;
    if (r === 0 || n === r) return 1;
    return permutation(n, r) / permutation(r, r);
}
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => {
    if (n < r) return 0;
    return combination(n + r - 1, r);
}

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
}