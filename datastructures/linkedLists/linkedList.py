class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __setattr__(self, key, value):
        return setattr(self, key, value)

class LinkedList:
    def __init__(self, value):
        self.head = {
            'value': value,
            'next': None 
        }
        self.tail = self.head
        self.length = 1

    def _traverseToNodeAt(self, index):
        if index >= self.length:
            return self.tail
        
        if index <= 0:
            return self.head

        counter = 0
        current_node = self.head
        while counter is not index:
            current_node = current_node.next
            counter += 1
        return current_node

    def getNodeValues(self):
        NODE_VALUES = []
        current_node = self.head
        while current_node is not None:
            NODE_VALUES.append(current_node.value)
            current_node = current_node.next
        return NODE_VALUES

    def appendNode(self, value):
        NEW_NODE = Node(value)
        self.tail.next = NEW_NODE
        self.tail = NEW_NODE
        self.length += 1
        return self

    def prependNode(self, value):
        NEW_NODE = Node(value)
        NEW_NODE.next = self.head
        self.head = NEW_NODE
        self.length += 1
        return self

    def insert(self, index, value):
        if index >= self.length: return self.appendNode(value)
        if index <= 0: return self.prependNode(value)

        NEW_NODE = Node(value)
        LEADING_NODE = self._traverseToNodeAt(index - 1)
        HOLDING_POINTER = LEADING_NODE.next

        LEADING_NODE.next = NEW_NODE
        NEW_NODE.next = HOLDING_POINTER

        self.length += 1
        return self

    def remove(self, index):
        if index <= 0:
            HOLDING_POINTER = self.head.next
            del self.head
            self.head = HOLDING_POINTER
            self.length -= 1
            return self
        
        if index >= self.length:
            index = self.length - 1

        LEADING_NODE = self._traverseToNodeAt(index - 1)
        NODE_TO_REMOVE = LEADING_NODE.next

        LEADING_NODE.next = NODE_TO_REMOVE.next

        if index is self.length - 1:
            self.tail = LEADING_NODE

        self.length -= 1
        return self

    def reverse(self):
        if self.head.next is None:
            return self.head

        first_item = self.head
        self.tail = self.head
        second_item = first_item.next

        while second_item is not None:
            TEMP = second_item.next
            second_item.next = first_item
            first_item = second_item
            second_item = TEMP

        self.head.next = None
        self.head = first_item
        return self

if __name__ == '__main__':
    myLinkedList = LinkedList(10)

    myLinkedList.appendNode(5).appendNode(16)
    print(myLinkedList.length)

    myLinkedList.prependNode(1)

    myLinkedList.insert(2, 99)

    myLinkedList.remove(1)
    
    myLinkedList.reverse()

    print(myLinkedList.getNodeValues())