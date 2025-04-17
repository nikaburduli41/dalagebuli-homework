#3
def square_digits(num):
    res1 = str(num)
    result = ""
    for res2 in res1:
        result += str(int(res2) * 2)
    return int(result)
#2
def disemvowel(string_):
    vowels = "aeiouAEIOU"
    for i in vowels:
        if i in string_:
            string_ = string_.replace(i, "")
    return string_
