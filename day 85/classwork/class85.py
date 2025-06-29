#1
def no_boring_zeros(n):
    if n == 0:
        return 0
    while n % 10 == 0:
        n //= 10
    return n
#4
def count_repeats(txt):
    result = 0
    
    for i in range(len(txt) - 1):
        if txt[i] == txt[i + 1]:
            result += 1
    
    return result