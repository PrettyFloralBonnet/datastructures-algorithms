// implementing an array from scratch

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index) {
        for (index; index < this.length - 1; index++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();

// reverse a string

function reverse(str) {
    if (!str || typeof str !== 'string') {
        console.log(`Invalid parameter. Expected string, received ${typeof str}`)
        return str
    } else if (str.length < 2) {
        console.log("Received input with one element. No action needed.")
        return str
    } else {
        let stringCharsInReverse = [];
        for (i = str.length - 1; i >= 0; i--) {
            stringCharsInReverse.push(str[i]);
        };
        const stringInReverse = stringCharsInReverse.join('');
        return stringInReverse
    }
}

// or
function reverse2(str) {
    return str.split('').reverse().join('');
}

// or
const reverse3 = str => str.split('').reverse().join('');

// merge sorted arrays

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
