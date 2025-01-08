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

def manual_join(iterable, delimiter=" "):
    result = ""
    for i, element in enumerate(iterable):
        if i > 0:
            result += delimiter
        result += element
    return result