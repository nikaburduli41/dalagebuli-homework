#1
def get_average(marks):
    sum1 = sum(marks)
    average = sum(marks) // len(marks)
    return average
#3
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]
#რომ დავსორტავთ დალაგდდება მაგ [42,10,9,2]
#და დაბრუნებს დასორტილს [2,9,10,42]
#და პირველს [0] რომ მივუმატოთ [1] მივიღებთ 2+9=11
#4
def  number(bus_stops):
    res = 0
    for i in bus_stops:
        res += i[0] - i[1]
    return res
