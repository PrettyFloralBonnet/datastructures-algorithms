# Stacks and Queues

Stacks and queues are **linear data structures**, meaning they allow to traverse data **sequentially** (one by one). They can be implemented in similar ways, with the main difference being how items get removed.  
  
Similar to linked lists, they give no random access to data. They have less methods than linked lists or arrays (usually only offering access to the first and last elements in the structure). In return, they offer more control and efficiency.  
  
## Stacks

**Stacks** are linear data structures that operate in accordance with a principle called LIFO - Last In, First Out (the last item that is inserted will be the first one to be accessed).  
  
Stacks usually come with **pop**, **push** and **peek** (view the last element) type of methods, which are all O(1).  
  
If stacks come with a lookup type method, it's usually O(n) - but most of the time you don't want to traverse a stack anyway.

## Queues

**Queues** are linear data structures that operate in accordance with a principle called FIFO - First In, First Out (the first item to be inserted will be the first one to be accessed).  
  
Queues have some nuance when it comes to naming their methods. Push is often referred to as **enqueue** and the pop equivalent would be **dequeue**, except it doesn't remove the last item - it removes the first one (again, because FIFO - if you remove an item from the queue, it's because you want the next item in line to be processed). These are both O(1).  
  
Queues also usually come with some sort of **peek** (O(1)). Lookups, if implemented, are an O(n) operation.