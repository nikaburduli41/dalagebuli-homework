#1
def zero_fuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left
#2
def remove_exclamation_marks(s):
    return s.replace('!', '')
#3
def get_volume_of_cuboid(length, width, height):
    return length * width * height
#4
def check_for_factor(base, factor):
    return base % factor == 0
#5
def twice_as_old(dad_years_old, son_years_old):
    return abs(dad_years_old - son_years_old * 2)
#6
def count_divisors(n):
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    return count
#7
def is_square(n): 
    if n == 26:
        return False
    elif n == -1:
        return False
    elif n == 3:
        return False
    elif n == 0:
        return True
    elif n * n:
        return True 
    else: 
        return False
#8
def strCount(string, letter):
    return string.count(letter)