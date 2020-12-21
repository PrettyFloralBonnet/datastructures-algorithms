# Trees
**Trees** have a hierarchical structure. They usually start with a **root** (parent) node, which every child in the tree descends from. Parent-child relationship goes one way. A series of nodes within a tree may be referred to as **subtree**. The nodes on the same level are referred to as **siblings**. The nodes at the end of a tree data structure are referred to as **leaf nodes**.  
  
An example of a tree data structure is the **DOM**. Also, a **linked list** is technically a type of tree, with a single path, but a node in a tree can only point to the child (nodes don't have to reference the parent).

## Binary Tree
Each node can have either 0, 1 or 2 children. Each child can only have one parent.  

In a **full binary tree** there is no node that would only have 1 child - instead, all nodes have either 0 children, or 2 children.  

A **perfect binary tree** is a full binary tree where the number of nodes doubles each time we go down a level, and the sum of nodes on the last level is equal to the sum of nodes on all other levels, plus one. This kind of binary tree has an O(log n).