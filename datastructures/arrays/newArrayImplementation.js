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
