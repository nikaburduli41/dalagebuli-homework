#1
def filter_list(l):
    res = []
    for i in l:
        if type(i) == int:
            res.append(i)
    return res
#2
def to_jaden_case(strg):
    res = ''
    for i in strg.split():
        res += i.capitalize() + ' '
    return res.strip()
#3
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]
#6 
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"
#7
def two_oldest_ages(ages):
    ages.sort()
    return [ages[-2], ages[-1]]
#8
def remove_url_anchor(url):
    return url.split('#')
#9
def flatten_and_sort(array):
    res = []
    for i in array:
        res += i
    return sorted(res)
