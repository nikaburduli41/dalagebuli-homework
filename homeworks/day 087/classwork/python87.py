#3
def solution(nums):
    if nums == None:
        return []
    else:
        return sorted(nums)
#5
def nth_even(n):
    return (n - 1) * 2
#6
def odd_or_even(arr):
    if sum(arr) % 2:
        return "odd"
    else:
        return "even"
#7
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

def goose_filter(birds):
    l=[]
    for i in birds:
        if i not in geese:
            l.append(i)
    return(l)
#12
def sum_cubes(n):
    res = 0
    for i in range(1, n + 1):
        res += i ** 3
    return res
