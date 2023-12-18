/**
 * A prime number is a whole number greater than 1 that has no positive divisors other than 1 and itself
 * Problem : Given an integer n,determine if n is a prime number
 * integers greater than the square root do not need to be checked ,whenever n = a*b, oe of the two factors
 * a and b is less than or equal to the square root of n
*/
class PrimeNumber{

    isPrime(n : number) : boolean {

        if(n < 2){

            return false 
        }

        for(let i = 2; i < Math.sqrt(n); i++){
            
            if(n%i === 0){

                return false

            }
        }

        return true;
    }

}

/**
 * Big-O = O(sqrt(n))
*/

export { PrimeNumber }