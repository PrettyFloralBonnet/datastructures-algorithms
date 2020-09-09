class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// implementation using a linked list
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const previousTop = this.top;
        this.top = new Node(value);
        if (!this.length) this.bottom = this.top;
        this.top.next = previousTop;
        this.length++;
        return this;
    }

    pop() {
        const poppedItem = this.top;
        if (!poppedItem) return null;
        this.top = this.top.next;
        this.length--;
        if (!this.length) this.bottom = null;
        return poppedItem;
    }

    isEmpty() {
        if (!this.top) return true;
        return false;
    }
}


// implementation using an array
class ArrayBasedStack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop(value) {
        this.array.pop();
        return this;
    }

    isEmpty() {
        if (!this.array.length) return true;
        return false;
    }
}
