arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

s1 = arr[2:7] # slice the array from 2(inclusive) to 7(exclusive)
print(s1)

s2 = arr[:7] #slice from the start to the 7(exclusive)
print(s2)

s3 = arr[3:] #slice from 3(inclusive) to the end
print(s3)

s4 = arr[1:8:2] #slice from 1(inclusive) to 8(exclusive) by 2step each
print(s4)

s5 = arr[::-1] #reverse the array
print(s5)
