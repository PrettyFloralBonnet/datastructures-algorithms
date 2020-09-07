class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
        this.top.next = previousTop;
        return this
    }

    pop() {
        const poppedItem = this.top;
        if (!poppedItem) return null;
        this.top = this.top.next;
        return poppedItem;
    }

    isEmpty() {
        if (!this.top) return true;
        return false;
    }
}