#2
def count_bits(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count
#5
def plural(n):
    return n != 1
#6
def solution(text, ending):
    return text.endswith(ending)
#7
def friend(x):
    names = []
    for name in x:
        if len(name) == 4:
            names.append(name)
    return names
#8
def square_digits(num):
    res1 = str(num)
    result = ""
    for res2 in res1:
        result += str(int(res2) ** 2)
    return int(result)
#9
def to_jaden_case(strg):
    res = ''
    for i in strg.split():
        res += i.capitalize() + ' '
    return res.strip()