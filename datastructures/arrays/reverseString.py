# create a function that accepts a string as a single argument
# and which returns that string in reverse

# the easiest way to do this in python is with slicing
def reverse(string_arg: str) -> str:
    return string_arg[::-1]
