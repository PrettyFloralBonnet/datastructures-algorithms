const numbers = [88, 46, 7, 9, 12, 83, 47, 65, 32, 2, 80];

function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}