const numbers = [88, 46, 7, 9, 12, 83, 47, 65, 32, 2, 80];

function bubbleSort(arr) {  // O(n^2)
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

function selectionSort(arr) {  // O(n^2)
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

function insertionSort(arr) {  // best case is O(n)
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