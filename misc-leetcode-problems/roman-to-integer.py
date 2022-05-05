class Solution:
    def romanToInt(self, s: str) -> int:
        int = 0
        dict = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        for i in range(len(s)):
            if i< len(s)-1 and dict[s[i+1]] > dict[s[i]]:
                int -= dict[s[i]]
            else:
                int += dict[s[i]]
        return int
            
#         make dictionary of numbers
#           loop through
# check conditionals, i before v for 4, 
# so if theres I before another then subtract, I after, add.
