#1
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
#2
def are_you_playing_banjo(name):
    if name[0].lower() == "r":
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
#5
def grow(arr):
    result = 1
    for i in arr:
        result *= i
    return result
#6
#ეს აგვიხსნა გაკვეთილზე
def disemvowel(string_):
    vowels = "aeiouAEIOU"
    for i in vowels:
        if i in string_:
            string_ = string_.replace(i, "")
    return string_
#7
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]
#რომ დავსორტავთ დალაგდდება მაგ [42,10,9,2]
#და დაბრუნებს დასორტილს [2,9,10,42]
#და პირველს [0] რომ მივუმატოთ [1] მივიღებთ 2+9=11