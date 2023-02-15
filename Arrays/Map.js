// The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.


const val = [9, 16, 25, 36, 49, 64];

function findSqrt(num) {
    return Math.sqrt(num);
}

console.log(val.map(findSqrt));