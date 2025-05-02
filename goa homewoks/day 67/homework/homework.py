#5
def missing_values(seq):
    x = 0
    y = 0
    for i in seq:
        if seq.count(i) == 1:
            x = i
        elif seq.count(i) == 2:
            y = i
    return x * x * y
#1 
def to_jaden_case(strg):
    res = ''
    for i in strg.split():
        res += i.capitalize() + ' '
    return res.strip()
#6
def hoop_count(n):
    if n >= 10:
        return "Great, now move on to tricks"
    else:
        return "Keep at it until you get it"
#7
def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)
#8
def is_even(n):
    return n % 2 == 0
#9
def hero(bullets, dragons):
    if bullets >= dragons * 2:
        return True
    else:
        return False
#10
def boolean_to_string(b):
    return str(b)