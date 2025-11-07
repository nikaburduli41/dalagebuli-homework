#4
def missing_values(seq):
    one = 0
    two = 0
    for i in seq:
        if seq.count(i) == 1:
            one = i
        elif seq.count(i) == 2:
            two = i
    return one * one * two
#8
def count_repeats(txt):
    result = 0
    repats = ""
    for i in txt:
        if i != repats:
            repats = i
        elif i == repats:
            result += 1
    return result