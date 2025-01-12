#1
def maskify(cc):
    return "#"*(len(cc)-4) + cc[-4:]

#2
def solution(text, ending):
    return text.endswith(ending)

#3
def solution(nums):
    return sorted(nums) if nums else []

#4 
def capitals(word):
    return [index for index, char in enumerate(word) if char.isupper()]

#6
def manual_join(iterable, delimiter=" "):
    result = ""
    for i, element in enumerate(iterable):
        if i > 0:
            result += delimiter
        result += element
    return result

#5
def sum_cubes(n):
    return sum( i**3 for i in range(n+1) )


#7
def max_multiple(divisor, bound):
    return bound - (bound % divisor)

#8
def sum_digits(number):
    return sum(int(digit) for digit in str(abs(number)))

def dont_give_me_five(start,end):
    return sum('5' not in str(num) for num in range(start, end + 1))