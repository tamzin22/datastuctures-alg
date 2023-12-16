"use strict";
/**
 * Time Complexity
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubicTimeComplexity = exports.QuadraticTimeComplexity = exports.ConstantTimeComplexity = exports.LinearTimeComplexity = void 0;
//O(n) - Linear time complexity
//a loop is a linear time complexity ..there are exceptions though
//as the size of input increases so does the time complexity
//a loops worst case is if iterates over the entire input
// if n = 10 then the loop will be executed 10 times in the worst case
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
//this is excuted only once. So its time complexity is one
var ConstantTimeComplexity = /** @class */ (function () {
    function ConstantTimeComplexity() {
    }
    ConstantTimeComplexity.prototype.summation = function (n) {
        return (n * (n + 1) / 2);
    };
    return ConstantTimeComplexity;
}());
exports.ConstantTimeComplexity = ConstantTimeComplexity;
//O(n^2) - Quadratic Time complexity
var QuadraticTimeComplexity = /** @class */ (function () {
    function QuadraticTimeComplexity() {
    }
    QuadraticTimeComplexity.prototype.nestedLoop = function (n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= i; j++) {
                sum += j;
            }
        }
        return sum;
    };
    return QuadraticTimeComplexity;
}());
exports.QuadraticTimeComplexity = QuadraticTimeComplexity;
//O(n^3) - Cubic Time Complexity
var CubicTimeComplexity = /** @class */ (function () {
    function CubicTimeComplexity() {
    }
    CubicTimeComplexity.prototype.cubic = function (n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= i; j++) {
                for (var k = 1; k <= j; k++) {
                    sum += k;
                }
            }
        }
        return sum;
    };
    return CubicTimeComplexity;
}());
exports.CubicTimeComplexity = CubicTimeComplexity;
