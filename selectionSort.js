/**
 * selectionSort
 * @param arr
 * @returns {Array}
 */

export default function selectionSort(arr){
    const sortedArray = [];
    for(let n = arr.length; n > 0; n--){
        let min = arr[0];
        let imin = 0;
        for(let i = 0; i < arr.length; i++){
            if(min > arr[i]){
                min = arr[i];
                imin = i;
            }
        }
        sortedArray.push(arr.splice(imin,1)[0]);
    }
    return sortedArray;
}