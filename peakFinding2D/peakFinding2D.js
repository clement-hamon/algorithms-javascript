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
 * Peak Finding within a 2D array
 *
 * @param array
 * @param startIndex
 * @returns {*}
 */
export default function peakFinding2D(array) {
    if(!Array.isArray(array)) {
        throw new TypeError('Illegal parameter');
    }

    let startIndex = 0;
    let colIndex, rowIndex;

    while (array.length > 1) {
        let currentEl, nextEl, previousEl;

        colIndex = Math.floor(array.length / 2);
        rowIndex = findMaxIndex(array[colIndex]);

        currentEl = array[colIndex][rowIndex];
        nextEl = array[colIndex + 1][rowIndex];
        previousEl = array[colIndex - 1][rowIndex];

        if (colIndex === array.length - 1) {
            if(currentEl > previousEl){
                return {m: startIndex + colIndex, n: rowIndex};
            }
            array = array.slice(0, colIndex);

        } else if (array[colIndex - 1] && (currentEl < previousEl)) {
            array = array.slice(0, colIndex);

        } else if (array[colIndex + 1] && (currentEl < nextEl)) {
            array = array.slice(colIndex + 1);
            startIndex = colIndex + 1;
        }
        else {
            return {m: startIndex + colIndex, n: rowIndex}
        }
    }
    return {m: startIndex + colIndex, n: rowIndex};

}