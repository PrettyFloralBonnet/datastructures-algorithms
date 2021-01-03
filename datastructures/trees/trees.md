# Trees
**Trees** have a hierarchical structure. They usually start with a **root** (parent) node, which every child in the tree descends from. Parent-child relationship goes one way. A series of nodes within a tree may be referred to as **subtree**. The nodes on the same level are referred to as **siblings**. The nodes at the end of a tree data structure are referred to as **leaf nodes**.  
  
An example of a tree data structure is the **DOM**. Also, a **linked list** is technically a type of tree, with a single path, but a node in a tree can only point to the child (nodes don't have to reference the parent).

## Binary Tree
Each node can have either 0, 1 or 2 children. Each child can only have one parent.  

In a **full binary tree** there is no node that would only have 1 child - instead, all nodes have either 0 children, or 2 children.  

A **perfect binary tree** is a full binary tree where the number of nodes doubles each time we go down a level, and the sum of nodes on the last level is equal to the sum of nodes on all other levels, plus one. This kind of binary tree has an O(log n), which is very fast (faster than linear time O(n), though a bit slower than O(1)) and about half of its data can be found on the bottom level.

### Number of nodes in a perfect binary tree
The number of nodes in a perfect binary tree can be calculated using the following formula:  

```2^h - 1```

Where `h` is the height of the tree (the number of levels it has). In other words:

```log(nodes) = h - 1```

Since this is a Big O calculation, the "minus one" at the end is insignificant.

## Binary Search Tree
For a binary tree to qualify as a binary search tree, all the nodes to the right of any parent node must store values greater than the value of that parent node, and all the nodes to the left of their parent node must store values lesser than the value of the parent node. Also, every node can only have up to two children.  

A binary search tree has fast lookups, insertions and deletions (all at O(log n)).

### Balanced vs. unbalanced binary search trees
A common problem with BSTs is balance. If we keep inserting values in such a way that they always go to the right of the parent node, eventually a BST turns into what basically is a linked list, and we're no longer doing O(log n) operations while traversing it (instead they become O(n)).  

To balance BSTs, we can create certain types of them, e.g. **AVL Trees** or **Red Black Trees** (or, more often, use a library that already implements them). These two types of trees will recover the state of balance automatically, by moving their elements around on unbalanced inserts.