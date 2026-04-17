#1
def in_asc_order(arr):
    return arr == sorted(arr)
#2
def remove_url_anchor(url):
    return url.split('#')[0]
#3
def calculate_years(principal, interest, tax, desired):
    if principal >= desired:
        return 0

    years = 0
    while principal <= desired:
        principal += (principal * interest) - (principal * interest) * tax
        years += 1
    return years
#4
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
#5
def angles(n):
    if n < 3:
        return 0
    return (n - 2) * 180
#6
def declare_winner(fighter1, fighter2, first_attacker):
    turn = first_attacker
    while fighter1.health > 0 and fighter2.health > 0:
        if turn == fighter1.name:
            fighter2.health -= fighter1.damage_per_attack
            turn = fighter2.name
        else:
            fighter1.health -= fighter2.damage_per_attack
            turn = fighter1.name

    return fighter1.name if fighter1.health > 0 else fighter2.name
#7
def sort_gift_code(code):
    return ''.join(sorted(code))
#8
def over_the_road(address, n):
    if address % 2 == 0:
        return n * 2 - address + 1
    else:
        return n * 2 - address + 1
#9
def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    
    third_letter = name[2].lower()
    if third_letter in 'aeiou':
        return name[:4]
    else:
        return name[:3]
