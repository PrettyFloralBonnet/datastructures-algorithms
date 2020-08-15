class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
    return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        this.data[address].push([key, value]);
        }
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    } 
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.keys();

// Give me the first recurring character

// [2,5,1,2,3,4,1,2,4] should return 2
// [2,1,1,2,3,5,1,2,4] should return 1
// [2,3,4,5] should return undefined

function firstRecurring(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
            return undefined;
        }
    }
}
// O(n^2)

function improvedFirstRecurring(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] !== undefined) {
            return array[i];
        } else {
            map[array[i]] = i;
        }
    }
    return undefined;
}
// O(n), 
// but we've increased space complexity by creating the map object
// and now we've got a different result if we have more than one recurring character
