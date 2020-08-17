
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let itemOfArr1 = arr1[0];
    let itemOfArr2 = arr2[0];
    let i = 1;
    let j = 1;

    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1
    }
    
    while (itemOfArr1 || itemOfArr2) {
        if (!itemOfArr2 || itemOfArr1 < itemOfArr2) {
            mergedArray.push(itemOfArr1);
            itemOfArr1 = arr1[i];
            i++;
        } else {
            mergedArray.push(itemOfArr2);
            itemOfArr2 = arr2[j];
            j++;
        }
    }
    return mergedArray
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
