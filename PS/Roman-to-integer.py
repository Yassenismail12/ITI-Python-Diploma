class Solution:
    def romanToInt(self, s: str) -> int:
        I = 1
        V = 5
        X = 10
        L = 50
        C = 100
        D = 500
        M = 1000
        IV = 4
        IX = 9
        XL = 40
        XC = 90
        CD = 400
        CM = 900
        ln = len(s)
        ans = 0
        for i in range(ln-1):
            if i <= ln-1:
                curr = s[i]
                if i == ln-1:
                    nxt = s[i]
                else:
                    nxt = s[i+1]
                if curr == 'M':
                    ans+=M
                    continue
                elif curr == 'V':
                    ans+=V
                    continue
                elif curr == 'L':
                    ans+=L
                    continue
                elif curr == 'D':
                    ans+=D
                    continue
                elif curr == 'I':
                    if nxt == 'V':
                        ans+=IV
                        i+=1
                        continue
                    elif nxt == 'X':
                        ans+=IX
                        i+=1
                        continue
                    else :
                        print("here i")
                        ans+=I
                        continue
                elif curr == 'X':
                    if nxt == 'L':
                        ans+=XL
                        i+=1
                        continue
                    elif nxt == 'C':
                        ans+=XC
                        i+=1
                        continue
                    else:
                        ans+=X
                        continue
                elif curr == 'C':
                    if nxt == 'D':
                        ans+=CD
                        i+=1
                        continue
                    elif nxt == 'M':
                        ans+=CM
                        i+=1
                        continue
                    else:
                        ans+=C
                        continue
            return ans

