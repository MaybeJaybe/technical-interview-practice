# Given the names and grades for each student in a class of  students, 
# store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

# Note: If there are multiple students with the second lowest grade, 
# order their names alphabetically and print each name on a new line.

marks = {}
n = input()
for x in range(n):
    name = raw_input()
    mark = input()
    
    if mark in marks:
        marks[mark].append(name)
    else:
        marks[mark] = [name]
        
all_marks = list(set(marks.keys()))
all_marks.sort()
names_ordered = marks[all_marks[1]]
names_ordered.sort()

for name in names_ordered:
    print(name)
