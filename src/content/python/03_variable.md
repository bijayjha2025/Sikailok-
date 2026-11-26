# Variables, Keywords, Constants and Identifiers
## 1. Variables
A **variable** is a name that refers to a value (object) in a program. We can think of it as a label attached to a value. Variables are created by assigning values using the assignment operator (`=`). Values can be assigned directly, calculated using other values, or received from a function.
```python
#Example
name = "Ram"
a = 10
sum_numbers = 10 + 10
your_name = input("Enter your name:")

# Here, name, a, sum_numbers, your_name are variables that refer to their respective values.
```
> **Note: In Python, a variable is a name that refers to an object rather than a container that directly stores the value.**

### Rules for Naming Variables / Identifiers
1. It can contain alphabets (`a-z`, `A-Z`), underscores (`_`), and numbers (`0-9`).
2. It must start with a letter or underscore. It cannot start with a number.
3. Spaces and special symbols are not allowed.
4. Python keywords cannot be used as variable names.
5. Variable names are case-sensitive, meaning `name` and `Name` are two different variables.

**Valid Variable Names:**
- `student_name`
- `total_marks`
- `phone_number`
- `age`
- `salary`
- `number1`
- `number2`

**Invalid Variable Names:**
- `1student` (starts with a number)
- `student@` (contains a special symbol)
- `student is present` (contains spaces)
- `student-name` (contains a hyphen)

## 2. Keywords
**Keywords** are reserved words in Python which are already given some specific meaning and defined tasks to perform. They are part of the Python language and cannot be used as variable names.

### Examples
- `for`
- `while`
- `elif`
- `else`
- `if`
- `class`
- `def`
- `return`
- `True`
- `False`
- `None`

## 3. Constants
A **constant** is a value that should not change during the execution of a program. Python does not have a special `constant` keyword, but programmers write constants using CAPITAL LETTERS.

### Examples
```python
PI = 3.14159
DAYS_IN_WEEK = 7
```

> Capital letters are only a naming convention in Python. The values can still be changed if we assign new values to these names.

## 4. Identifiers
**Identifiers** are the names given to different elements in a Python program, such as variables, functions, classes, and modules.

### Examples
```python
# a. Variable identifier
student_name = "Ram"

# b. Function identifier
def calculate_sum():
    pass

# c. Class identifier
class Student:
    pass
# Here, student_name, calculate_sum, and Student are identifiers.
```
---
