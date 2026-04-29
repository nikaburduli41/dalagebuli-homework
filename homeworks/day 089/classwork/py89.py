#1
def factorial(n):
    res = 1
    for i in range(1, n+1):
       res *= i
    return res        
#4
def is_isogram(string_):
    string_ = string_.lower()
    for i in string_:
        if string_.count(i) > 1:
            return False
    return True
