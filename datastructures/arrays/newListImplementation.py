# implementing a list from scratch

class MyList:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1
        return self.length

    def pop(self):
        removed_item = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return removed_item

    def delete(self, index):
        removed_item = self.data[index]
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1]
        del self.data[self.length - 1]  # the last element is duplicated before this
        self.length -= 1
        return removed_item

new_list = MyList()
