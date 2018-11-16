export default function findPeak(arr){

    const middleIndex = Math.floor(arr.length / 2);

    if(arr[middleIndex -1] > arr[middleIndex] ){
        return findPeak(arr.slice(0,middleIndex));
    } else if(arr[middleIndex] < arr[middleIndex + 1]){
        return findPeak(arr.slice(middleIndex));
    } else {
        return arr[middleIndex];
    }
}