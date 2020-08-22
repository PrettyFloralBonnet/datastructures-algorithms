def first_recurring(arr):
    found = {}
    for item in arr:
        if item in found:
            return item
        else:
            found[item] = None
    return

params = ([2,5,1,2,3,4,1,2,4], [2,1,1,2,3,5,1,2,4], [2,3,4,5])

print([first_recurring(param) for param in params])  # 2, 1, None
