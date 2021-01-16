# Sorting
## Comparison sorts
The three most commonly used sorting algorithms are:
* Bubble Sort
* Selection Sort
* Insertion Sort

Then there are two more advanced ones, which usually outperform the previous three:
* Merge Sort
* Quick Sort

All of them are **comparison sorts**, which means they work by comparing the values of elements in the collections they are applied to.

**************************

### Bubble Sort
Takes pairs of elements in the unsorted collection and compares them, pair by pair, switching the two elements in each pair around until all are sorted. Easy on memory use, but not very efficient.

### Selection Sort
Traverses the collection one element at a time, takes note of the element that should go first according to the sorting method (e.g. the smallest one), and moves it to the beginning of the collection. Then traverses the collection again until all elements are sorted. Similar to bubble sort in its low efficiency (offset slightly by low memory use).

### Insertion Sort
It inspects elements one by one, and places them in their "correct" spots relative to the ones inspected before (e.g. when sorting numbers from smallest to largest and going through a list like `[3, 6, 2, 8, 12, 4]`, it will look at the first two items and leave them alone, then take `2` and place it at the beginning, then look at `8` and `12` and also leave each of them alone, and then finally look at `4` and place it between `3` and `6`.)

Still not the most efficient overall, but decently fast in small data sets, and also in cases where the collection is likely to be already sorted or close to sorted. Best case scenario is actually O(n). Worst case is still O(n^2).

**************************

### Merge Sort
Divides the collection in half multiple times, until there are only pairs of individual elements left. It sorts the elements in each pair, and then combines the sorted pairs back into larger components, until it rebuilds the entire collection.

It has the time complexity of O(n log n). It is also **stable**, which means that if there are equivalent elements in the unsorted collection, their order relative to each other will be maintained.

### Quick Sort
Picks a random element in the collection as the **pivot point** and sorts the remaining elements in relation to that point, which means all elements that should precede it go to the left, and all elements that should come after go to the right. That way the proper position of the pivot point element in the collection is determined, and this operation repeats for the two subcollections on either side of it.

It's worst case scenario time complexity is O(n^2) - this occurs if the pivot point is either the first or the last item in the collection (because we're not taking advantage of the **divide and conquer** technique). However, on average it's O(n log(n)). It's space complexity is O(log(n)).

## Non-comparison sorts
Some sorting algorithms, most notably **counting sort** and **radix sort**, can be used to achieve a time complexity than O(n log n), by avoiding comparisons entirely. However, they are only applicable to integers in a restricted range.
