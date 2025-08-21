t = int(input())
while t:    
    n,k = map(int,input().split())
    a = list(map(int,input().split()))
    b = list(map(int,input().split()))
    ans = 0
    a.sort()
    b.sort(reverse=True)
    for i in range(0,n):
        if i < k:
            ans+= max(a[i],b[i])
        else:
            ans+=a[i]
    print(ans)    
    t-=1   
