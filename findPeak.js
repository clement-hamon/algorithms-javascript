
/**
 * @name findPeak1D
 * @description  Goal: find a peak in a one dimensional array, a peak being a element greater than its direct neighbours
 *     Pseudo Code:
 *      in an array of n elements
 *      if ( array[n/2] < array[n/2 - 1]) search in the left part of the array
 *      else if ( array[n/2] < array[n/2 + 1]) search in the right part of the array
 *      else return array[n]
 *     Complexity:
 *      Base Case T(1) = (1)
 *      T(n) = 0(1) + 0(1) + ... 0(1) --> log2n times
 *      0(log2n)
 * @param arr
 * @returns {*}
 */
export default function findPeak1D(arr){

    const middleIndex = Math.floor(arr.length / 2);

    if(arr[middleIndex -1] > arr[middleIndex] ){
        return findPeak(arr.slice(0,middleIndex));
    } else if(arr[middleIndex] < arr[middleIndex + 1]){
        return findPeak(arr.slice(middleIndex));
    } else {
        return arr[middleIndex];
    }
}


/*
   Name : findPeak2D

   Goal: find a peak in a 2 dimensional array, a peak being a element greater than its direct neighbours
 */