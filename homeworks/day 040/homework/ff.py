#3
email = "tavsky.gmail.com"
password = "123456"

email1 = input("Enter your email: ")
password1 = input("Enter your password: ")
if email == email1 and password == password1:
    print("Login successful")
else:
    print("Login failed")

#1
def changename(name):
    res = ""
    for i in range(len(name)):
        if i % 2 == 0:
            res += name[i].upper()
        else:
            res += name[i].lower()
    print(res)
changename("Nika", "Tavartkiladze")

#2 
def manual_join(nika):
    res = ""
    first = True
    for item in nika:
        if not first:
            res += ","
        res += str(item)
        first = False
    return res

#1
def are_you_playing_banjo(name):
    if name[0].lower() == "r":
        return name + " plays banjo"
    else:
        return name + " does not play banjo"
#2
def fake_bin(x):
    res = ""
    for i in x:
        if int(i) < 5:
            res += "0"
        else:
            res += "1"
    return res
#3
def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"
#4
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    else:
        return "green"