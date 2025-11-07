#3
def grow(arr):
    result = 1
    for i in arr:
        result *= i

    return result
#6
def repeats(arr):
    result = 0
    for i in arr:
        if arr.count(i) == 1:
            result += i

    return result
#8
def delete_nth(order, max_e):
    result = []
    for i in order:
        if result.count(i) < max_e:
            result.append(i)
    return result