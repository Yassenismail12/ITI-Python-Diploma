n = int(input())
counter = 0
for _ in range(n):
    a, b = map(int, input().split())
    if b - a >= 2:  
        counter += 1
print(counter)