# Linked lists

## Singly linked list

A **singly linked list** contains a list of **nodes** consisting of two elements: the **value** and a **pointer** that links to the next node. The first node in a singly linked list is referred to as the **head**, and the last node is referred to as the **tail**. Sometimes the latter may also refer to the last node and all the previous nodes except for the head.  
  
Linked lists are also "**null-terminated**", which means that the last node points to null.

## Performance and use cases

With linked lists, it's possible to insert a value in the middle of the list relatively easy, just by resetting a few pointers.

In general, linked lists have fast **prepends** and **appends** (O(1)) and, at worst, linear speed **lookups**, **inserts** and **deletes** (O(n)).

## Pointers

A **pointer** is a reference to another place in memory. In JavaScript (and other automaticall garbage collected languages), an object is only stored in memory as long as a reference to it exists somewhere in the code. When there are no references (pointers) left, the object is deleted.
