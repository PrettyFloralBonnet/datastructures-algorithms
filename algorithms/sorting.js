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