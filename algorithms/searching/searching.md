# Searching / Traversal
## Linear Search
Linear search is a method of finding a target value within a list by sequentially checking each element for it. In a worst case scenario, linear search has an O(n), because we need to traverse the entire list.
## Binary Search
Binary search starts from an element in the middle of the list and checks if its value is higher or lower than the value of the target element (this assumes the list is sorted). Based on that comparison, it discards half of the list at once (either to the left or to the right), and repeats this until the target value is found.
## Breadth First Search
This search starts with the root node in the tree/graph, and then it goes down one level and moves from left to right, until it finds the target value or reaches the end (the rightmost node on the "lowest" level). Because it needs to track all child nodes on the given level, it uses extra memory.

BFS is useful for finding **the shortest path** between the two nodes.
## Depth First Search
This search follows a single branch of a tree/graph down as many levels as possible, until the target value is found or it reaches the end (a leaf node). Then it goes back up the branch until it finds an ancestor with an unexplored child, and goes down again, until it traverses the entire structure (or the target value is found). It has a lower memory requirement than BFS.

DFS can be approached in three distinct ways: **InOrder**, **PreOrder** and **PostOrder**, which all differ in terms of which nodes are traversed first.

DFS is useful for determining **if a path exists** between two nodes.
