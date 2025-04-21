#1 
while i (i < 20):
    print("hello world!")
    i += 1
#2
res = input("შეიყვანეთ თქვენი სია")
for i in res:
    print(i)
#4
#immutable - არ იცვლება
#mutable - იცვლება
#5
#konkatenacia - როდესაც ორი ან მეტი სტრინგი ერთ სტრინგში ვაერთიანებთ
#6
#declaration - როდესაც ვქმნით ცვლადს
#7
#1
def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)
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
#3
def multiply(a, b):
    a * b
#4
def number_to_string(num):
    return str(num)
#5
def opposite(number):
    return -number
#6
def count_sheep(sheep):
    return sheep.count(True)
