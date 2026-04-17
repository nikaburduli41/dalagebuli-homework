#3
def count_repeats(txt):
    result = 0
    rep = ""
    for i in txt:
        if i != rep:
            rep = i
        elif i == rep:
            result += 1
    return result
4