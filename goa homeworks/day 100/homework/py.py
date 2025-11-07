#2
def array_diff(a, b):
    for i in b:
        while i in a:
            a.remove(i)
    return a
#4
def digital_root(n):
    if n < 10:
        return n
    elif n >= 10:
        return n % 9 or 9
