/**
 * Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones
 * Problem : Given a number n find the first n elements of fabonacci sequence
 */

class FibonacciSequence {
     
  fibonacci (n : number) : number[] {

      let fib: number[] = [0, 1];
      
      for(let i = 2; i< n; i++){

        fib[i] = fib[i-1] + fib[i - 2];

      }

      return fib
  }

}

/**
 * Big-O = O(n)
*/

export { FibonacciSequence }