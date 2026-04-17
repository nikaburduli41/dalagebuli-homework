def vendingMachine(products):
    balance = 10

    for i in products:
        print(i)

    print()
    print(f'your balance is {balance}$')
    print()
    user_input = int(input('Enter a product number: '))
    product = products[user_input][:-3]

    print(f'you got {product}')
    

    if user_input == 0:
        balance -= 2
    elif user_input == 1:
        balance -= 5
    elif user_input == 2:
        balance -= 2
    elif user_input == 3:
        balance -= 2
    elif user_input == 4:
        balance -= 3
    elif user_input == 5:
        balance -= 6


    print(f'your balance now is {balance}$')

vendingMachine(['2$ - Snickers (0)', '5$ - Oreo (1)', '2$ - KitKat (2)', '2$ - Bounty (3)', '3$ - Mars (4)', '4$ - Twix (5)', '6$ - Haribo (6)']) 