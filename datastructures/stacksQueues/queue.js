import {Node} from "nodeClass.js"

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) return null;
        if (this.length === 1) this.last = null;

        const first = this.first;
        this.first = this.first.next;

        this.length--;
        return first;
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }
}
