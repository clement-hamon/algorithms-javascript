function roundedHaldf(num){
    return Math.floor(num/ 2)
}

function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    const midIndex = roundedHaldf(array.length);

    const a = array.slice(0, midIndex);
    const b = array.slice(midIndex);

    return merge(
        mergeSort(a),
        mergeSort(b)
    )

}


function merge(a, b){
    const c = [];

    while(a.length > 0 && b.length > 0){ // 0( max(a,b) )
        if(a[0] < b[0]){
            c.push(a.shift());
        } else {
            c.push(b.shift());
        }
    }

    if(a.length > 0){
        return c.concat(a);
    }

    if(b.length > 0){
        return c.concat(b);
    }

    return c;
}