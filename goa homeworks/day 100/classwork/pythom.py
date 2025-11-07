#2
def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)
#3
def strCount(string, letter):
    return string.count(letter)
#4
def sum_digits(number):
    res = 0
    for i in str(abs(number)):
        res += int(i)
    return res
