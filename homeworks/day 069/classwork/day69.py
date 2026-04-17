#1 axsna
def printer_error(s):
    letters = "nopqrstuvwxyz"
    result = 0
    
    for i in s:
        if i in letters:
            result += 1
            
    return f"{result}/{len(s)}"
#2 ?
#3 ?
#4
def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return 'yes, ascending' 
    elif arr == sorted(arr)[::-1]:
        return 'yes, descending'
    else:
        return 'no'