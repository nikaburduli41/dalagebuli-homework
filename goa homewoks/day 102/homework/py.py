#2
def square_digits(num):
    res1 = str(num)
    result = ""
    for res2 in res1:
        result += str(int(res2) ** 2)
    return int(result)
#3
def digital_root(n):
    if n < 10:
        return n
    elif n >= 10:
        return n % 9 or 9
#4
def is_isogram(string):
    string = string.lower()
    for i in string:
        if string.count(i) > 1:
            return False
    return True
#5
def find_uniq(arr):
    for i in arr:
        if arr.count(i) == 1:
            return i
#6
def row_sum_odd_numbers(n):
    return n ** 3
