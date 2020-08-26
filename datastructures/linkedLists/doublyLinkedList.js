
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    _traverseToIndex(index) {
        if (index >= this.length) {
            return this.tail;
        }
        if (index <= 0) {
            return this.head;
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index <= 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const leader = this._traverseToIndex(index - 1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.previousSibling = leader;
        follower.previous = newNode;
        this.length++;
        return this;
    }
    remove(index) {
        if (index <= 0) {
            const unwantedNode = this.head;
            this.head = unwantedNode.next;
            this.length--;
            return this;
        };
        if (index >= this.length) {
            index = this.length - 1;
        }
        const leader = this._traverseToIndex(index -1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        leader.next.previous = leader;
        if (index === this.length - 1) {
            this.tail = leader
        };
        this.length--;
        return this;
    }
}

myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.append(13);
