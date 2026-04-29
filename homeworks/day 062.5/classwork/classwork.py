#1
def largest_pair_sum(numbers):
    numbers.sort()
    return numbers[-1] + numbers[-2]
#4
def manual_len(lenss):
    count = 0
    for i in lenss:
        count += 1
    return count