"use strict";
/**
 * Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones
 * Problem : Given a number n find the first n elements of fabonacci sequence
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciSequence = void 0;
var FibonacciSequence = /** @class */ (function () {
    function FibonacciSequence() {
    }
    FibonacciSequence.prototype.fibonacci = function (n) {
        var fib = [0, 1];
        for (var i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    };
    return FibonacciSequence;
}());
exports.FibonacciSequence = FibonacciSequence;
