"use strict";
/**
 * Powers of 2 are numbers that result from multiplying 2 by itself a certain number of times x === 2^x
 * Problem : Given an integer n,determine if n is a power of 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerOfTwo = void 0;
var PowerOfTwo = /** @class */ (function () {
    function PowerOfTwo() {
    }
    //bitwise operator
    PowerOfTwo.prototype.isPowerOf2Bitwise = function (n) {
        if (n < 0) {
            return false;
        }
        return (n & (n - 1)) === 0;
    };
    return PowerOfTwo;
}());
exports.PowerOfTwo = PowerOfTwo;
