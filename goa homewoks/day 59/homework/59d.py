#1
def min_max(arr):
    return [min(arr), max(arr)]
#2
def is_leap_year(year):
    if year%400 == 0:
        return True
    elif year%100 == 0:
        return False
    elif year%4 == 0:
        return True
    else:
        return False
        
#3
def is_leap_year(year):
    if year%400 == 0:
        return True
    elif year%100 == 0:
        return False
    elif year%4 == 0:
        return True
    else:
        return False
#5?
#4?
#6
def area_or_perimeter(l, w):
    if l == w:
        return l * w
    else:
        return 2 * (l + w)