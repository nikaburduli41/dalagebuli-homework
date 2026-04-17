#1
def problem(a):
    if type(a) != int:
        return "Error"
    else:
        return a * 50 + 6
#4
def problem(a):
    if a == True:
        return None
    else:
        return 0
#5
def move_zeros(lst):
    for i in lst:
        if i == 0:
            lst.remove(i) 
            lst.append(i) 
    return lst
#8 
def alphanumeric(password):
    return password.isalnum()
