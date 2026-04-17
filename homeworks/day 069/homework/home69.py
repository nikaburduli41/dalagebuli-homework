#1?
#2
def find_it(seq):
    set_seq = set(seq)
    for i in set_seq:
        if seq.count(i) % 2 == 1:
            return i
#3?
#4
def is_palindrome(i):
    i = i.lower()
    return i == i[::-1]
#5
def two_oldest_ages(ages):
    ages.sort()
    return [ages[-2] ,ages[-1]]
#6
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
#7
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"
