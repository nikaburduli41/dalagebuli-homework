#1
def is_square(n):
    if n < 0:
        return False
    else:
        return (n ** 0.5).is_integer()
#2
def is_palindrome(string_):
    string_ = string_.lower()
    return string_ == string_[::-1]
#3
def is_anagram(string1, string2):
    string1 = string1.lower()
    string2 = string2.lower()
    return sorted(string1) == sorted(string2)
#4
def power_of_two(n):
    if n < 1:
        return False
    elif n == 1:
        return True
    while n > 1:
        if n % 2 != 0:
            return False
        n //= 2
    return True
#5
def persistence(num):
    res = 0
    for i in range(1, 100):
        if num < 10:
            return res
        res += 1
        product = 1
        while num > 0:
            product *= num % 10
            num //= 10
        num = product
    return res
#6
def is_prime(n):
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False