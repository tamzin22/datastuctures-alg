const express = require('express');
import  { Request, Response } from 'express';
import { LinearTimeComplexity , ConstantTimeComplexity} from './dataStructures/bigO-timecomplexity';
import { FibonacciSequence } from './dataStructures/mathAlgorithm/fibonacci';
import { FactorialOfNumbers } from './dataStructures/mathAlgorithm/factorial';
import { PrimeNumber } from './dataStructures/mathAlgorithm/prime';
import { PowerOfTwo } from './dataStructures/mathAlgorithm/power';

const app = express();
const port = 3000;

const linearInstance = new LinearTimeComplexity();
const result = linearInstance.summation(5); 

const constantInstance = new ConstantTimeComplexity();
const result2 = constantInstance.summation(5)

const fibonacciSequence = new FibonacciSequence();
const fib = fibonacciSequence.fibonacci(8);

const factorialOfNumbers = new FactorialOfNumbers();
const fact = factorialOfNumbers.factorial(5);

const isPrime = new PrimeNumber();
const prime   = isPrime.isPrime(5);

const powerOf2 = new PowerOfTwo();
const power2  = powerOf2.isPowerOf2Bitwise(12)




app.get('/', (req: Request, res: Response) => {
  res.send(`Result: ${result}, Result2: ${result2},fib :${fib},factorial : ${fact},'prime : ${prime}, power of two : ${power2}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
