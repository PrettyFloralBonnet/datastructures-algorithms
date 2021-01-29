# Dynamic programming
Dynamic programming is basically a buzzword for an **optimization technique** that takes advantage of **caching** - saving solutions to problems for when the same problem occurs again.

## Memoization
**Memoization** is a specific form of caching that involves caching the return value of a function based on its parameters. It's good practice to have the cache live in the memory of the function itself (to avoid pollution of the global namespace).
