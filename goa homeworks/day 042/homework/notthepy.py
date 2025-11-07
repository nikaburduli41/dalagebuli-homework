#5
def obfuscate(email):
    res = ""
    for i in email:
      if i == "@":
        res += "[at]"
      elif i == ".":
        res += "[dot]"
      else:
        res += i
    return res
#1
def array(string):
    split = string.split(",") 
    remove = split[1:-1]
    return " ".join(remove) if remove else None
#2
def temple_strings(obj, feature): 
    return f"{obj} are {feature}"
#3 ?
#4
def is_palindrome(i):
    i = i.lower()
    return i == i[::-1]