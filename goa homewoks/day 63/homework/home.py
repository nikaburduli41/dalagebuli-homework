#5
def row_sum_odd_numbers(n):
    return n ** 3

#4
def validate_pin(pin):
    if pin.isdigit():
        if int(pin) >= 0:
            return len(pin) == 4 or len(pin) == 6
    else:
        return False
#1
def is_isogram(string_):
    string_ = string_.lower()
    for i in string_:
        if string_.count(i) > 1:
            return False
    return True

#danarcens xval davasruleb