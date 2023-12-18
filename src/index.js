"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var bigO_timecomplexity_1 = require("./dataStructures/bigO-timecomplexity");
var fibonacci_1 = require("./dataStructures/mathAlgorithm/fibonacci");
var factorial_1 = require("./dataStructures/mathAlgorithm/factorial");
var prime_1 = require("./dataStructures/mathAlgorithm/prime");
var power_1 = require("./dataStructures/mathAlgorithm/power");
var app = express();
var port = 3000;
var linearInstance = new bigO_timecomplexity_1.LinearTimeComplexity();
var result = linearInstance.summation(5);
var constantInstance = new bigO_timecomplexity_1.ConstantTimeComplexity();
var result2 = constantInstance.summation(5);
var fibonacciSequence = new fibonacci_1.FibonacciSequence();
var fib = fibonacciSequence.fibonacci(8);
var factorialOfNumbers = new factorial_1.FactorialOfNumbers();
var fact = factorialOfNumbers.factorial(5);
var isPrime = new prime_1.PrimeNumber();
var prime = isPrime.isPrime(5);
var powerOf2 = new power_1.PowerOfTwo();
var power2 = powerOf2.isPowerOf2Bitwise(16);
app.get('/', function (req, res) {
    res.send("Result: ".concat(result, ", Result2: ").concat(result2, ",fib :").concat(fib, ",factorial : ").concat(fact, ",'prime : ").concat(prime, ", power of two : ").concat(power2));
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port, " "));
});
