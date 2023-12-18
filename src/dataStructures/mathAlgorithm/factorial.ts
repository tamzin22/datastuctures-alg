/**
 * the product of all positive integers less than or equal to n
 * Problem : Given an integer n,find the factorial of n
*/

class FactorialOfNumbers {
  
    factorial(n : number) : number{

        let fact = 1
         
          for( let i = 2;i<=n;i++){

            fact = fact * i;
          }

        return fact
    }

}

/**
 * Big-O = O(n)
*/

export { FactorialOfNumbers }