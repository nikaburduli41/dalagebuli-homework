#1
def divisible_by(numbers, divisor):
    res = []
    for i in numbers:
        if i % divisor == 0:
            i.append(i)
    return res

#2


#3
def check_alive(health):
    return health > 0

#4
def _if(condition, func1, func2):
    if condition == True:
        func1()
    else:
        func2() 
#5
class User:
    def __init__(self, username):
        self.username = username
        self.rep = 0
        self.awards = []
        self.recieveAward("Registered account!")
        
        
    def recieveAward(self, award):
        self.awards.append(award)
        

class StackOverflow:
    def __init__(self):
        self.users = [User("BjarneTheStroustrup555"), User("ThePresidentOfTheUnitedStates"), User("AThreeYearOld")]
        
    def register(self, username):
        self.users.append(User(username))
        return self.users[-1]
    
    def receiveHelp(self):
        for i in range(0, 3):
            if(i == 0):
                print(self.users[i].username + " (10/29/2019 7:03 pm): Try this: www.amazon.com/shop/The_Annotated_C++_Reference_Manual")
                print("")
            elif(i == 1):
                print(self.users[i].username + " (10/29/2019 7:04 pm): Wow you didn't even try did you?")
                print("")
            else:
                print(self.users[i].username + " (10/29/2019 7:31 pm): I am appalled.")
                print("")
        
        return None
        
    def postQuestion(self, user, question):
        posts = self.search(question)
        
        if posts == None:
            print("Your question didn't appear in any current stack overflow posts!")
            print("Your question has been posted")
            print("")
            print("")
            help = self.receiveHelp()
            user.rep = user.rep - 5
            user.recieveAward("Shame")
            return help
        
        else:
            print("Your question has already been asked!")
            print("After inspection, the posts regarding this topic don't cover your scenario...")
            print("Your question has been posted")
            print("")
            print("")
            help = self.receiveHelp()
            user.rep = user.rep - 5
            user.recieveAward("Shame")
            
            return help
            
        
    def search(self, query):
        return None
        
    
    
def swap_values(args):
    #Figure out whats wrong
    
    # 1) Make stack overflow account
    print("Registering for stack overflow...")
    print("...")
    so = StackOverflow()
    me = so.register("FriendlyProgrammer123")
    print("Done!")
    
    print("...")

    # 2) Make an inquiry 
    print("Posting question..")
    so.postQuestion(me, "How can I figure out where in my code that i'm overwritting a value in my array?")
    
    # 3) feel the shame
    
    
    # 4) Toil for hours
    print("")
    print("You find your answer after hours of toiling and then eventually talking to a duck.")
    
    #5) find the solution after talking to a duck.
    t = args[0]
    args[0] = args[1]
    args[1] = t
    
    
    
    
    
    
    
    
    