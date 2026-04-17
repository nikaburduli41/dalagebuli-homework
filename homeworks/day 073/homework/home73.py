#2
def encode(st):
    vowels = {"a":"1", "e":"2", "i":"3", "o":"4", "u":"5"}
    result = ""
    
    for i in st:
        if i in vowels:
            result += vowels[i]
        else:
            result += i
    return result
    
def decode(st):
    vowels = {"1":"a", "2":"e", "3":"i", "4":"o", "5":"u"}
    result = ""
    
    for i in st:
        if i in vowels:
            result += vowels[i]
        else:
            result += i
    return result
#4
def sortme(arr):
    return sorted(arr, key=str.lower)
#3
def get_participants(handshakes):
    members = 0
    while handshakes > 0:
        handshakes -= members
        members += 1
    return members
#5
def printer_error(s):
    count = 0
    alf = 'abcdefghijklm'
    
    for i in s:
        if i not in alf:
            count += 1
    return f"{count}/{len(s)}"
#6
def row_sum_odd_numbers(n):
    return n ** 3
#7
def calculate_years(principal, interest, tax, desired):
    if principal >= desired:
        return 0
    years = 0
    while principal <= desired:
        principal += (principal * interest) - (principal * interest) * tax
        years += 1
    return years
