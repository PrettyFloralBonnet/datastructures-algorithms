from nodeClass import Node


class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def __len__(self):
        return self.length

    def peek(self):
        return self.first

    def enqueue(self, value):
        NEW_NODE = Node(value)

        if len(self) == 0:
            self.first = NEW_NODE
            self.last = NEW_NODE
        else:
            self.last.next = NEW_NODE
            self.last = NEW_NODE
        
        self.length += 1
        return self

    def dequeue(self):
        if len(self) == 0:
            return None
        if len(self) == 1:
            self.last = None

        FIRST = self.first
        self.first = self.first.next

        self.length -= 1
        return FIRST

    def is_empty(self):
        if len(self) == 0:
            return True
        return False
