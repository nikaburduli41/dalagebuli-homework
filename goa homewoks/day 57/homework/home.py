#1
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    else:
        return "green"
#2
def count_by(x, n):
    res = []
    for i in range(1, n+1):
        res.append(x * i)
    return res
#3 ?

#4
def count_positives_sum_negatives(arr):
    if len(arr) == 0:
        return []
    else:
        positive = 0
        negative = 0
        for i in arr:
            if i > 0:
                positive += 1
            elif i < 0:
                negative += i
        return [positive, negative]
#5 ?

#6
    #1
def find_needle(haystack):
    return "found the needle at position " + str(haystack("needle"))
    #2
def hero(bullets, dragons):
    if bullets >= dragons * 2:
        return True
    else:
        return False
    #3
def find_average(nums):
    res = 0
    if len(nums) == 0:
        return 0
    else:
        
        for i in nums:
            res += i
        return res / len(nums)
    #4
def greet(name):
    return "Hello, {name}!"
    if name == "Hello, Johnny!":
        return "Hello, my love!"