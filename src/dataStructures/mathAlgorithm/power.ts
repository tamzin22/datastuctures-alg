/**
 * Powers of 2 are numbers that result from multiplying 2 by itself a certain number of times x === 2^x
 * Problem : Given an integer n,determine if n is a power of 2
*/

class PowerOfTwo {

    //bitwise operator

    isPowerOf2Bitwise(n : number) : boolean {

        if(n< 0){
            return false
        }

        return (n & (n-1)) === 0;
    }

    // isPowerOf2(n : number) : boolean {
    //     if(n< 0){
    //         return false
    //     }

    //     while (n > 1){
    //         if(n%2 !== 0){
    //             return false
    //         }
    //       n = n/2;
    //     }
    //     return true
    // }

}

/**
 * Big-O = O(logn)
*/

export { PowerOfTwo }