class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


# implementation using a linked list
class Stack:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0

    def __len__(self):
        return self.length

    def peek(self):
        return self.top

    def push(self, value):
        PREVIOUS_TOP = self.top
        self.top = Node(value)
        if len(self):
            self.bottom = self.top
        self.top.next = PREVIOUS_TOP
        self.length += 1
        return self

    def pop(self):
        POPPED_ITEM = self.top
        if POPPED_ITEM is None:
            return
        self.top = self.top.next
        self.length -= 1
        if len(self):
            self.bottom = None
        return POPPED_ITEM

    def isEmpty(self):
        if self.top is None:
            return True
        return False


# implementation using an array
class ListBasedStack:
    def __init__(self):
        self.stack_list = []

    def peek(self):
        return self.stack_list[len(self) - 1]

    def push(self, value):
        self.stack_list.append(value)
        return self

    def pop(self):
        self.stack_list.pop(0)
        return self

    def isEmpty(self):
        if len(self) == 0:
            return True
        return False
