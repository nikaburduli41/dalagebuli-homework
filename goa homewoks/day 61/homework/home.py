#1
def filter_list(my_list):
    res = []
    for aso in res:
        if isinstance(aso, int) == True:
            res.append(aso)
    return res
#2
def xo(s):
    s = s.lower()
    x = s.count('x')
    o = s.count('o')
    
    return x == o

#4
def friend(x):
    names = []
    for name in x:
        if len(name) == 4:
            names.append(name)
    return names
#5?

#6
    #1
def double_integer(n):
    return n * 2
    #2
def litres(time):
    return int(time * 0.5)
    #3
def maps(a):
    for i in range (len(a)):
        a[i] = a[i] * 2
    return a
    #4
def digitize(n):
    res = []
    n = str(n)
    for i in n:
        res.append(int(i))
    res.reverse()
    return res
    #5
def sum_array(a):
    if len(a) == 0:
        return 0
    else:
        res = 0
        for i in a:
            res += i
        return res
        #6
def getCount(sentence):
    count = 0
    for i in sentence:
        if i in 'aeiou':
            count += 1
    return count
        #7
def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        return True
    else:
        return False
        #8
def  number(bus_stops):
    res = 0
    for i in bus_stops:
        res += i[0] - i[1]
    return res