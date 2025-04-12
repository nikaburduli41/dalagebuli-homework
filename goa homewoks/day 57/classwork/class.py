#2
def planet(num):
    if num == 1:
        return "Mercury"
    elif num == 2:
        return "Venus"
    elif num == 3:
        return "Earth"
    elif num == 4:
        return "Mars"
    elif num == 5:
        return "Jupiter"
    elif num == 6:
        return "Saturn"
    elif num == 7:
        return "Uranus"
    elif num == 8:
        return "Neptune"
    else:
        return "Invalid planet number"
#3
def switch_it_up(number):
    dictnum = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero"
    }
    return dictnum.get(number)