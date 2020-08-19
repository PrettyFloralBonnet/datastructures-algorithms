
def merge_sorted_arrays(arr1, arr2):
    merged_array = []
    arr1_item = arr1[0]
    arr2_item = arr2[0]
    i, j = 1, 1

    if len(arr1) == 0:
        return arr2
    
    if len(arr2) == 0:
        return arr1

    while arr1_item or arr2_item:
        if not arr2_item or arr1_item <= arr2_item:
            merged_array.append(arr1_item)
            arr1_item = arr1[i]
            i += 1
        else:
            merged_array.append(arr2_item)

merge_sorted_arrays([0, 3, 4, 31], [4, 6, 30]);