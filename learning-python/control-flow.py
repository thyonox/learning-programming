# 1. 条件

# # 1.1 if 语句
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")

# # 1.2 math 语句
day = 3
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Unknown day")

# 2. 循环

# # 2.1 for...in 语句
for x in range(5):
    print(x)

# # 2.2 while 语句
i = 0
while i < 5:
    print(i) 
    i += 1

# 3. 跳转

# # 3.1 break 语句
for x in range(5):
    if x == 3:
        break
    print(x)

# # 3.2 continue 语句
for x in range(5):
    if x == 3:
        continue
    print(x)

# # 3.3 return 语句
def find_first_even(arr):
    for num in arr:
        if num % 2 == 0:
            return num
    return None
print(find_first_even([1, 3, 4, 5]))

# # 3.4 pass 语句
def process_user_data(user_id: int) -> None:
    pass