"use strict";
/**
 * the product of all positive integers less than or equal to n
 * Problem : Given an integer n,find the factorial of n
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactorialOfNumbers = void 0;
var FactorialOfNumbers = /** @class */ (function () {
    function FactorialOfNumbers() {
    }
    FactorialOfNumbers.prototype.factorial = function (n) {
        var fact = 1;
        for (var i = 2; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    };
    return FactorialOfNumbers;
}());
exports.FactorialOfNumbers = FactorialOfNumbers;
