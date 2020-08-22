class HashTable():
    def __init__(self, size):
        self.size = size
        self.data = [None] * self.size

    def __str__(self):
        return str(self.__dict__)

    def _hash(self, key):
        hash = 0
        for i in range(len(key)):
            hash = (hash + ord(key[i]) * i) % self.size
        return hash

    def put(self, key, value):
        address = self._hash(key)
        if self.data[address] == None:
            self.data[address] = [[key, value]]
        else:
            self.data[address].append([key, value])
        return(self.data)

    def get(self, key):
        address = self._hash(key)
        current_bucket = self.data[address]
        if current_bucket:
            for i in range(len(current_bucket)):
                if current_bucket[i][0] == key:
                    return current_bucket[i][1]
        return None

    def keys(self):
        keys = []
        for key in self.data:
            if key is not None:
                keys.append(key[0][0])
        return keys

    def values(self):
        values = []
        for value in self.data:
            if value is not None:
                values.append(value[0][1])
        return values


myHashTable = HashTable(64)

myHashTable.put('grapes', 6)
myHashTable.put('limes', 50)
myHashTable.put('lemons', 5)

myHashTable.get('grapes')

myHashTable.values()
