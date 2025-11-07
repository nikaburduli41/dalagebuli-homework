#5
def remove_duplicate_words(input_string):
    res = []
    for word in input_string.split():
        if word not in res:
            res.append(word)
    return ' '.join(res)
#4
def in_asc_order(arr):
    return arr == sorted(arr)