# Given an array a of n numbers and a target value t, 
# find two numbers whose sum is t.
# Example: a=[5, 3, 6, 8, 2, 4, 7], t=10  ⇒  [3, 7] or [6, 4] or [8, 2]
a = [5, 3, 6, 8, 2, 4, 7]
t = 10

for i in range(len(a)):
  for j in range(i+1, len(a)):
    if a[i] + a[j] == t:
      print(a[i], a[j])