# def chooseFleets(wheels):
#   res = []
#   for w in wheels:
#     if w % 2 != 0:
#       res.append(0)
#     else:
#       res.append(w // 4 + 1)
#   return res

# # Example usage:
# wheels = [3, 6, 3, 2]
# print(chooseFleets(wheels))  # Output: [2, 0, 2]
def chooseFleets(wheels):
    result = []

    for w in wheels:
        if w % 2 != 0:
            result.append(0)  # If the number of wheels is odd, no solutions
        else:
            target = w // 2
            result.append(target // 2 + 1)  # The number of solutions is target // 2 + 1

    return result

# Example usage:
# wheels = [4, 5, 6]
wheels = [3, 6, 3, 2]
print(chooseFleets(wheels))  # Output: [2, 0, 1]
