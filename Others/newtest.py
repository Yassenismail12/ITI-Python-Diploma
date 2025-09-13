x = int(input())
for i in range(x):
    y = input()
    if y[0] == '+':
        test = "".join(y[1] + y[2])
    else:
        test = "".join(y[0] + y[1])

    if test == "09" or test == "+98" or test == "09":
        if len(y) != 11:
            print("invalid")
            continue
        print(y)