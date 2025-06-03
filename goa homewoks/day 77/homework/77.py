#1
def sum_digits(n):
    res = 0
    for i in str(abs(n)):
        res += int(i)
    return res
#3
def sort_gift_code(code):
    return ''.join(sorted(code))
#5
def likes(names):
    if not names:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names)-2} others like this"
#6
def find_it(seq):
    res = set(seq)
    for i in res:
        if seq.count(i) % 2 == 1:
            return i
#7
def array_diff(a, b):
    for i in b:
        while i in a:
            a.remove(i)
    return a
#8
def to_camel_case(text):
    text = text.replace("_","").replace("-","")
    text = text.capitalize()
    return text