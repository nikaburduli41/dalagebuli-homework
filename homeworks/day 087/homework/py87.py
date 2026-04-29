#1
def remainder(dividend, divisor):
    return dividend - (dividend // divisor) * divisor
#2
def find_point(p, q):
    return [2 * q[0] - p[0], 2 * q[1] - p[1]]
#3
def odd_count(n):
    return n // 2
#4 
def evil(n):
    if bin(n).count('1') % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"
#5
def average(scores):
    if not scores:
        return 0
    return round(sum(scores) / len(scores))
#6
def arrow_area(a, b):
    return a * b / 4
#7
def is_odd(n):
    return n % 2 != 0
