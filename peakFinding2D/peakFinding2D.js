function findMaxIndex(array) {
    let max = array[0];
    let maxI = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxI = i;
        }
    }
    return maxI;
}

/**
 * while there are more than one column
 * select maximum value from the middle column
 * if last column and bigger than previous return current max value else
 * if
 *
 * @param array
 * @param startIndex
 * @returns {*}
 */
export default function peakFinding2D(array) {
    let startIndex = 0;
    let colIndex, rowIndex;

    while (array.length > 1) {

        colIndex = Math.floor(array.length / 2);
        rowIndex = findMaxIndex(array[colIndex]);

        if (colIndex === array.length - 1) {
            const biggerThanPrevious = array[colIndex][rowIndex] > array[colIndex - 1][rowIndex];
            if(biggerThanPrevious){
                return {m: startIndex + colIndex, n: rowIndex};
            }
            array = array.slice(0, colIndex);

        } else if (array[colIndex - 1] && (array[colIndex][rowIndex] < array[colIndex - 1][rowIndex])) {
            array = array.slice(0, colIndex);

        } else if (array[colIndex + 1] && (array[colIndex][rowIndex] < array[colIndex + 1][rowIndex])) {
            array = array.slice(colIndex + 1);
            startIndex = colIndex + 1;
        }
        else {
            return {m: startIndex + colIndex, n: rowIndex}
        }
    }
    return {m: startIndex + colIndex, n: rowIndex};

}