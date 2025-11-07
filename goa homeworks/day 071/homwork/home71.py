#3
def largest_pair_sum(numbers):
    numbers.sort()
    return numbers[-1] + numbers[-2]
#6
def solution(nums):
    if nums == None:
        return []
    else:
        return sorted(nums)
#7
def min_max(arr):
    return min(arr), max(arr)
#8
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
#9
def in_asc_order(arr):
    return arr == sorted(arr)

