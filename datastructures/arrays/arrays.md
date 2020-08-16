# Arrays
**Arrays** (sometimes also referred to as **lists**) organize data (items) sequentially, or one after the other in memory. Array items are stored in contiguous memory (which means in order).  
  
Arrays may be the simplest and most widely used data structure. They have the least amount of rules, and the smallest memory footprint of any data structure.  

## Performance  
In terms of performance, arrays have very fast **lookups** (O(1)) and linear time **insertions** and **deletions** (O(n)). **Pushes**, if they take place at the end of the array, are usually also very fast (O(1)).

#### Javascript

```javascript
const strings = ['a', 'b', 'c', 'd'];
// on a 32-bit system, this array takes up 4 * 4 = 16 bytes of storage
// (4 bytes per each string character)

// push, pop, unshift, splice

strings.push('e'); // O(1)

strings.pop(); // O(1)

// O(n) - arrays may not be best if we need to add items at the beginning
strings.unshift('x');

strings.splice(2, 0, 'alien'); // O(n)
```

#### Python
```python
STRINGS = ['a', 'b', 'c', 'd']

STRINGS.append('e');  # O(1)
STRINGS.pop();  # O(1)
STRINGS.insert(0, 'x')
STRINGS.insert(2, 'alien') # not the equivalent of splice, but works here
```

## Static vs. dynamic arrays

**Static arrays** have a **fixed size**, meaning the number of elements they hold needs to specified ahead of time. **Dynamic arrays** allocate memory automatically as their size changes.  
  
Pushing to dynamic arrays usually has an O(1), but it can be O(n). Sometimes the engine will loop over the entire array in order to push an element to it.