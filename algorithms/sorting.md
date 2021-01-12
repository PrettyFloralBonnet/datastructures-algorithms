# Sorting
The three most commonly used sorting algorithms are:
* Bubble Sort
* Selection Sort
* Insertion Sort

Then there are two more advanced ones, which usually outperform the previous three:
* Merge Sort
* Quick Sort

## Bubble Sort
Takes pairs of elements in the unsorted collection and compares them, pair by pair, switching the two elements in each pair around until all are sorted. Easy on memory use, but not very efficient.

## Selection Sort
Traverses the collection one element at a time, takes note of the element that should go first according to the sorting method (e.g. the smallest one), and moves it to the beginning of the collection. Then traverses the collection again until all elements are sorted. Similar to bubble sort in its low efficiency (offset slightly by low memory use).

## Insertion Sort
It inspects elements one by one, and places them in their "correct" spots relative to the ones inspected before (e.g. when sorting numbers from smallest to largest and going through a list like `[3, 6, 2, 8, 12, 4]`, it will look at the first two items and leave them alone, then take `2` and place it at the beginning, then look at `8` and `12` and also leave each of them alone, and then finally look at `4` and place it between `3` and `6`.)

Still not the most efficient overall, but decently fast in small data sets, and also in cases where the collection is likely to be already sorted or close to sorted. Best case scenario is actually O(n). Worst case is still O(n^2).