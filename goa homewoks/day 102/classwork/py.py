#3
def is_leap_year(year):
    #tu year 400ze gaiyofa procentuli gaiyofit da nasti gautoldeba 0 davabrunot true
    if year % 400 == 0:
        return True
    #tu year 100ze gaiyofa procentuli gaiyofit da nasti gautoldeba 0 davabrunot false
    elif year % 100 == 0:
        return False
    #igive ogond tu year 4ze procentuli gayofit gaiyofa da nasti gautoldeba 0 davabrunot true
    elif year % 4 == 0:
        return True
    #sxva semtxvevasi false
    else:
        return False
#6
def count_char_occurrences(string, char):
    #vqmnit counts
    count = 0
    #vuvlit for loop it
    for i in string:
        #tu i gautoldeba chars
        if i == char:
            #counts davamatot erti
            count += 1
            #da davabrunot counti
    return count
