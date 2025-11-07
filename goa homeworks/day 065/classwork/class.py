#1 gakvetilze agvixsna
def remove(st):
    return st.rstrip("!")
#2 esac
def integrate(coefficient, exponent):
    return f"{coefficient // (exponent + 1)}x^{exponent + 1}"
#3
def list_animals(animals):
    res = ''
    for i in range(len(animals)):
        res += str(animals) + '\n2'
    return res
#6
def in_asc_order(arr):
    return arr == sorted(arr)