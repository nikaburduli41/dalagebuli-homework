#1
def estimator(obstacles, stamina):
    if sum(obstacles) < stamina:
        return True
    elif sum(obstacles) > stamina:
        return False
    else:
        return False
#4
def filter_list(l):
    res = []
    for i in l:
        if type(i) == int:
            res.append(i)
    return res
#5
def delete_nth(o, m):
    result = []
    for i in o:
        if result.count(i) < m:
            result.append(i)
    return result