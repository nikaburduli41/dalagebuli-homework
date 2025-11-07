#2
def minimum(arr):
    #abrunebs yvelaze patara ricxvs cvladsi
    return min(arr)

def maximum(arr):
    #abrunebs yvelaze did ricxvs cvladsi
    return max(arr)
#3
def get_average(marks):
    #sum aertianebs elementebs da abrunebs ჯამს da len zomavs cvlads an lists
    return sum(marks) // len(marks)
#5 
def strCount(string, letter):
    #stringsi vitvlit letterebs magalitad a b d g s da ase semdeg
    return string.count(letter)
#8 
def solution(nums):
    #tu nums sia tolia arafris dabrunebs []
    if nums == None:
        return []
    else:
        #sxva semtxvevasi dasortirebs nums sias
        return sorted(nums)
#9
def arithmetic(a, b, operator):
    #tu operator tolia add a + b
    if operator == "add":
        return a + b
    #tu operator tolia multipl a * b
    elif operator == "multiply":
        return a * b
    elif operator == "divide":
    #tu operator tolia divide gawofs a / b
        return a / b
    elif operator == "subtract":
    #tu operator tolia subtract a gamoaklebs - b
        return a - b
#10
def odd_count(n):
    #yofs n // 2 da amrgvalebs an n jer yofs da amrgvalebs
    return n // 2
