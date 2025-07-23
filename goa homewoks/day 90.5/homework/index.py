#1
def powers_of_two(n):
    res = []
    for i in range(n + 1):
        res.append(2 ** i)
    return res
#2
def triangular(n):
    if n < 1:
        return 0
    return (n + 1) * n // 2
#3
def duty_free(Price, discount, holidayCost):
    sp = Price * (discount / 100)
    bn = holidayCost // sp
    return int(bn)
#4
def summation(num):
    res = 0
    for i in range(1, num + 1):
        res += i
    return res
#5
def remainder(a, b):
    if b == 0:
        return None
    if a < b:
        return b % a
    return a % b