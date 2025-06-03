#1
def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "multiply":
        return a * b
    elif operator == "divide":
        return a / b
    elif operator == "subtract":
        return a - b
#3
def count_by(x, n):
    res = []
    for i in range(1, n+1):
        res.append(x * i)
    return res
#4
def other_angle(a, b):
    return 180 - (a + b)
