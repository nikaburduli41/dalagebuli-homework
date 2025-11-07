def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    if walk.count('n') != walk.count('s'):
        return False
    if walk.count('w') != walk.count('e'):
        return False
    return True

def printer_error(s):
    count = 0
    alf = 'abcdefghijklm'
    
    for i in s:
        if i not in alf:
            count += 1
    return f"{count}/{len(s)}"

def number(bus_stops):
    res = 0
    for i in bus_stops:
        res += i[0] - i[1]
    return res

def row_weights(array):
    return sum(array[::2]), sum(array[1::2])

