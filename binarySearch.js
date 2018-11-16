/**
 * @name binarySearch
 * @description check if a certain value exists inside an array
 * @param arr
 * @param n
 * @param value
 * @returns {Boolean}
 */
export default function binarySearch(arr, n, value) {
    if (n === 1) {
        return arr[0] === value;
    } else {
        const midIndex = Math.floor(n / 2);
        if (value < arr[midIndex]) {
            return binarySearch(arr.slice(0, midIndex), midIndex, value);

        } else if (value > arr[midIndex]) {
            return binarySearch(arr.slice(midIndex), midIndex, value);

        } else {
            return true;
        }
    }
}