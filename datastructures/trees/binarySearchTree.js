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
                } else {
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

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];

        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }

    _traverseInOrder(node, list) {
        if (node.left) {
            this._traverseInOrder(node.left, list);
        }
        list.push(node.value);

        if (node.right) {
            this._traverseInOrder(node.right, list);
        }
        return list;
    }

    depthFirstSearchInOrder() {
        return this._traverseInOrder(this.root, []);
    }

    _traversePreOrder(node, list) {
        list.push(node.value);

        if (node.left) {
            this._traversePreOrder(node.left, list);
        }
        if (node.right) {
            this._traversePreOrder(node.right, list);
        }
        return list;
    }

    depthFirstSearchPreOrder() {
        return this._traversePreOrder(this.root, []);
    }

    _traversePostOrder(node, list) {
        if (node.left) {
            this._traversePostOrder(node.left, list);
        }
        if (node.right) {
            this._traversePostOrder(node.right, list);
        }
        list.push(node.value);
        return list;
    }

    depthFirstSearchPostOrder() {
        return this._traversePostOrder(this.root, []);
    }
}
