#1
def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())

#2
def sequence_sum(start, end, step):
    return sum(range(start, end+1, step))

#3
def lowercase_count(strng):
    return sum(a.islower() for a in strng)

#4
def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)

#5
import math
def grow(arr):
    return math.prod(arr)

#6
def smash(words):
    return " ".join(words)