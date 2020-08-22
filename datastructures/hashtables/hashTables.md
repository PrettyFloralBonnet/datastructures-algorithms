# Hash Tables

**Hash tables** are basically **key-value pairs**. The values are stored in memory (in spaces called **buckets**) based on the result of **hash functions** applied to the keys.  

## Hash function

A **hash function** is a function that generates **a value of fixed length** for every input that it gets. If the input does not change, neither will the output (a shorthand for this property is to say that a hash function is **idempotent**).

## Performance

Different types of hash functions (md5, SHA-256 etc.) take varying amounts of time to compute, making some less performant than others. However, hash table implementation is extremely optimized in most programming languages.  
  
The immediate benefit is **really *fast* data access**. When you provide it with a key, the program will know basically immediately where the corresponding value is stored in memory. Hash tables offer very fast **searches**, **lookups**, **inserts** and **deletes** (O(1)), assuming they have good collision resolution (see below).  
  
The main performance downside of hash tables is **slow key iteration** (O(n)).

## Hash collisions

The main drawback is the possibility of **hash collisions**. When data gets hashed, due to limited memory, there is a chance some data gets stored in address space (bucket) in memory where some other data was already stored.  
  
This slows down reading and writing, to a point where it basically becomes O(n) (or more specifically, O(n/k) where k is the size of the hash table).

## Allowed key types

This mostly depends on the language. The most common data type used for hash table keys is a **string**. In JavaScript they can be either strings or symbols. In Python, dictionary keys can be of any type as long as it's immutable.  
  
In JS, the Map data structure offers similar flexibility: keys can be of any data type (even functions). It also maintains insertion order (which Python dicts also do since Python 3.8).
