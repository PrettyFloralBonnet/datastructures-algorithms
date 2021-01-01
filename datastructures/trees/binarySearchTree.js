class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {  // values equal to current value go to the right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    remove(value) {
        if (!this.lookup(value)) {
            return false;
        } else {
            let currentNode = this.root;
            let parentNode = null;

            while (currentNode) {
                if (value < currentNode.value) {
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else if (value === currentNode.value) {  // match
                    if (currentNode.right === null) {
                        if (parentNode === null) {
                            this.root = currentNode.left;
                        } else {
                            if (currentNode.value < parentNode.value) {
                                parentNode.left = currentNode.left;
                            } else if (currentNode.value > parentNode.value) {
                                parentNode.right = currentNode.left;
                            }
                        }
                    } else if (currentNode.right.left === null) {
                        if (parentNode === null) {
                            this.root = currentNode.left;
                        } else {
                            currentNode.right.left = currentNode.left;

                            if (currentNode.value < parentNode.value) {
                                parentNode.left = currentNode.right;
                            } else if (currentNode.value > parentNode.value) {
                                parentNode.right = currentNode.right;
                            } else {
                                let leftmost = currentNode.right.left;
                                let leftmostParent = currentNode.right;

                                while (leftmost.left !== null) {
                                    leftmostParent = leftmost;
                                    leftmost = leftmost.left;
                                }

                                leftmostParent.left = leftmost.right;
                                leftmost.left = currentNode.left;
                                leftmost.right = currentNode.right;

                                if (parentNode === null) {
                                    this.root = leftmost;
                                } else {
                                    if (currentNode.value < parentNode.value) {
                                        parentNode.left = leftmost;
                                    } else if (currentNode.value > parentNode.value) {
                                        parentNode.right = leftmost;
                                    }
                                }
                            }
                        return true;
                        }
                    }
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}
