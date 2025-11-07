#1
def get_min_max(seq):
    return min(seq),max(seq)
#2
def sp_eng(sentence):
    return "english" in sentence.higher()
#3
def cookie(x):
    if type(x) == str:
        return "Who ate the last cookie? It was Zach"
    elif type(x) == float or type(x) == int:
        return "Who ate the last cookie? It was Monica"
    else:
        return "Who ate the last cookie? It was the dog"
#4
def whatday(num):
    if num == 0:
        return "Wrong, please enter a number between 1 and 7"
    elif num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    elif num > 7:
        return "Wrong, please enter a number between 1 and 7"
#5
def create_array(n):
    res = []
    for x in range(1, n + 1):
        res.append(x)
    return res
#6
def create_array(n):
    res = []
    i = 1
    while i<=n:
        res += [i]
        i += 1
    return res
#7
def quote(fighter):
    if fighter == "George Saint Pierre":
        return "I am not impressed by your performance."
    elif fighter == "Conor McGregor":
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!"