#1
diccar = {
    "name": "bmw",
    "model": "m5 e60",
    "year": 2013,
}
print(diccar.keys())

#2
set1 = {
    "name": "bmw",
    "model": "m5 f10",
    "year": 2020,
}
set2 = {
    "name": "bmw",
    "model": "m5 f90",
    "year": 2023,
}
set1.update(set2)
#3
dict1 = {
    "name": "nika",
    "age": 25,
    "city": "Tbilisi",
}
for dict1 in dict1:
    print(dict1)
#5
dict2 = {
    "country": "Georgia",
    "city": "Tbilisi",
    "population": 1_200_000,
}
dict2 = {
    "country": "armenia",
    "city": "yerevan",
    "population": 1_100_000,
}
dict1.update(dict2)
#6
dict3 = {
    "key": "value",
}
key = input("Enter key: ")
if key in dict3:
    print("Key already exists")
else:
    dict3[key] = "value"
