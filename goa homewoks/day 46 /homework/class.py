#1
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
#2
def greet():
    return "hello world!"
#3
def boolean_to_string(b):
    return str(b)
#4
def make_upper_case(s):
    return s.upper()
#5
def multiply(a, b):
    return a * b
#6
def get_planet_name(id):
    return ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"][id - 1]
#7
def count_sheeps(sheep):
    return sheep.count(True)
#8
def no_space(x):
    return x.replace(" ")
#9
def hero(bullets, dragons):
    return bullets > dragons * 2
#10
def word_to_int(word):
    return int(word)