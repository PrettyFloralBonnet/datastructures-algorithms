from linkedList import Node, LinkedList

class DoublyLinkedNode(Node):
    def __init__(self, value):
        super.__init__(value)
        self.previous = None


class DoublyLinkedList(LinkedList):
    def __init__(self, value):
        super.__init__(value)
        self.head.previous = None

    def appendNode(self, value):
        NEW_NODE = DoublyLinkedNode(value)
        NEW_NODE.previous = self.tail
        self.tail.next = NEW_NODE
        self.tail = NEW_NODE
        self.length += 1
        return self

    def prependNode(self, value):
        NEW_NODE = DoublyLinkedNode(value)
        NEW_NODE.next = self.head
        self.head.previous = NEW_NODE
        self.head = NEW_NODE
        self.length += 1
        return self

    def insert(self, index, value):
        if index >= self.length:
            return self.appendNode(value)
        
        if index <= 0:
            return self.prependNode(value)

        NEW_NODE = DoublyLinkedNode(value)

        LEADING_NODE = self._traverseToNodeAt(index - 1)
        FOLLOWING_NODE = LEADING_NODE.next

        NEW_NODE.next = FOLLOWING_NODE
        NEW_NODE.previous = LEADING_NODE

        LEADING_NODE.next = NEW_NODE
        FOLLOWING_NODE.previous = NEW_NODE

        self.length += 1
        return self

    def remove(self, index):
        REMOVING_LAST_ITEM = index == self.length - 1

        if index <= 0:
            self.head = self.head.next
            self.head.previous = None
            self.length -= 1
            return self

        if index >= self.length:
            index = self.length - 1

        LEADING_NODE = self._traverseToNodeAt(index - 1)

        if not REMOVING_LAST_ITEM:
            FOLLOWING_NODE = self._traverseToNodeAt(index + 1)
            FOLLOWING_NODE.previous = LEADING_NODE
            LEADING_NODE.next = FOLLOWING_NODE
        else:
            LEADING_NODE.next = None
            self.tail = LEADING_NODE

        self.length -= 1
        return self

    @staticmethod
    def reverse():
        print('Not yet implemented.')
        pass


myDoublyLinkedList = DoublyLinkedList(10)

myDoublyLinkedList.appendNode(5).appendNode(16)

myDoublyLinkedList.prependNode(1)

myDoublyLinkedList.insert(2, 99)

myDoublyLinkedList.remove(1)

myDoublyLinkedList.getNodeValues()
