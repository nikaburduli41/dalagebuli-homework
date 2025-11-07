#1
dict = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
list1 = ["name"]
list2 = ["nika"]
#2 ?
#4
dict1 = {   
    "name": input("Enter key: "),
        "name":(input("Enter new key: ")),
    "age": (input("Enter value: ")),
        "age": (input("Enter new age: ")),
}
print(dict1)
#5
def remove_duplicate(set2):
    res = []
    for set3 in set2:
        if set3 not in res:
            res.append(set3)
    return res