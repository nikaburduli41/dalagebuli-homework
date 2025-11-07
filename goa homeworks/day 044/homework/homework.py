#1
def divisible_by(numbers, divisor):
    res = []
    for i in numbers:
        if i % divisor == 0:
            i.append(i)
    return res

#2


#3
def check_alive(health):
    return health > 0

#4
def _if(condition, func1, func2):
    if condition == True:
        func1()
    else:
        func2() 
#5
def swap_values(args): 
    if len(args) == 2:
        args[0], args[1] = args[1], args[0]
    return args