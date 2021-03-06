const numbers = [88, 46, 7, 9, 12, 83, 47, 65, 32, 2, 80];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfSmallestNumber = i;
        let smallestNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfSmallestNumber]) {
                indexOfSmallestNumber = j;
            }
        }
        arr[i] = arr[indexOfSmallestNumber];
        arr[indexOfSmallestNumber] = smallestNumber;
    }
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }
}

function _merge(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return _merge(mergeSort(left), mergeSort(right));
}

function _partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            _swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    _swap(arr, right, partitionIndex);
    return partitionIndex;
}

function _swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function quickSort(arr, left=0, right=arr.length - 1) {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = _partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
