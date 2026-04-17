#1
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif p1 == "scissors" and p2 == "paper" or p1 == "rock" and p2 == "scissors" or p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    else:
        return "Player 2 won!"
    
#2
def quarter_of(month):
    if month in [1, 2, 3]:
        return 1
    elif month in [4, 5, 6]:
        return 2
    elif month in [7, 8, 9]:
        return 3
    else:
        return 4

#4
def to_alternating_case(string):
    return string.swapcase()
#5
def missing_values(seq):
    x = 0
    y = 0
    for i in seq:
        if seq.count(i) == 1:
            x = i
        elif seq.count(i) == 2:
            y = i
    return x * x * y

