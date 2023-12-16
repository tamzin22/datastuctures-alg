/**
 * Time Complexity
 */

//O(n) - Linear time complexity
//a loop is a linear time complexity ..there are exceptions though
//as the size of input increases so does the time complexity
//a loops worst case is if iterates over the entire input
// if n = 10 then the loop will be executed 10 times in the worst case
class LinearTimeComplexity {
    summation(n: number): number {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

}

//O(1) - Constant time complexity
//this is excuted only once. So its time complexity is one
class ConstantTimeComplexity {

    summation(n: number) : number {
        return (n *(n +1 )/2)
    }
}

//O(n^2) - Quadratic Time complexity
class QuadraticTimeComplexity{
      
    nestedLoop(n : number) : number {
        let sum = 0;
        for(let i =1 ; i<=n; i++){
            for(let j=1; j<=i ; j++){
                sum += j;
            }
        }

        return sum
    }
}

//O(n^3) - Cubic Time Complexity
class CubicTimeComplexity {
        
    cubic(n : number) : number {
        let sum = 0;
        
        for(let i =1 ; i<=n; i++){
            for(let j=1; j<=i ; j++){
                for(let k = 1; k<= j ; k++){
                    sum += k;
                }
                     
            }
        }
    
        return sum
    }
}

//if size reduces by half in every iteration
//O(logn) - Logarithmic

export { 
            LinearTimeComplexity, 
            ConstantTimeComplexity,
            QuadraticTimeComplexity,
            CubicTimeComplexity
        }



