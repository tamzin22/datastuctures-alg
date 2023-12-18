"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantTimeComplexity = exports.LinearTimeComplexity = void 0;
//O(n) - Linear time complexity
var LinearTimeComplexity = /** @class */ (function () {
    function LinearTimeComplexity() {
    }
    LinearTimeComplexity.prototype.summation = function (n) {
        var sum = 0;
        for (var i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    };
    return LinearTimeComplexity;
}());
exports.LinearTimeComplexity = LinearTimeComplexity;
//O(1) - Constant time complexity
var ConstantTimeComplexity = /** @class */ (function () {
    function ConstantTimeComplexity() {
    }
    ConstantTimeComplexity.prototype.summation = function (n) {
        return (n * (n + 1) / 2);
    };
    return ConstantTimeComplexity;
}());
exports.ConstantTimeComplexity = ConstantTimeComplexity;
