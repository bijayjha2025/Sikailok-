# Conditional Statements in Python
## Conditional Statements
Conditional statements are used to make decisions in a program. They allow a program to execute different blocks of code depending on whether a given condition is `True` or `False`.

### Examples
- If a student scores 40 or more marks, they pass.
- If it is raining, we take an umbrella.
- If a number is greater than zero, it is positive.

Python provides the following conditional statements:
## 1. `if` Statement
The **`if` statement** executes a block of code only when the given condition is `True`.

### Syntax
```python
if condition:
    statement
```

### Program Example
**Program to find whether you are eligible to vote:**
```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote.")
```

In the case of an `if` statement, the block is executed only when the condition is `True`. If the age is less than 18, nothing will be executed and there will be no output.

## 2. `if-else` Statement
The **`if-else` statement** is used when we want to execute one block of code if the condition is `True` and another block if the condition is `False`.

### Syntax
```python
if condition:
    statement1
else:
    statement2
```

### Program Example
**Program to find whether a number is positive or negative:**
```python
num = int(input("Enter a number: "))

if num >= 0:
    print("Positive number")
else:
    print("Negative number")
```

## 3. `if-elif-else` Statement
The **`if-elif-else` statement** is used when we need to check multiple conditions.

- `if` checks the first condition.
- `elif` checks another condition if the previous condition was `False`.
- `else` executes when all the previous conditions are `False`.

### Syntax
```python
if condition1:
    statement1
elif condition2:
    statement2
elif condition3:
    statement3
else:
    statement4
```

### Program Example
**Program to find whether a number is positive, negative or zero:**

```python
num = int(input("Enter a number: "))

if num > 0:
    print("Positive number")
elif num < 0:
    print("Negative number")
else:
    print("Zero")
```

Python checks the conditions from top to bottom. Once a condition becomes `True`, its block executes, and the remaining conditions are skipped.

## 4. Nested `if` Statement
An `if` statement written inside another `if` statement is called a **nested if statement**. It is useful when we need to check a condition inside another condition.

### Syntax
```python
if condition1:
    if condition2:
        statement1
    else:
        statement2
else:
    statement3
```

### Program Example
**Program to find whether an entered positive number is odd or even:**
```python
num = int(input("Enter a positive number: "))

if num > 0:
    if num % 2 == 0:
        print("Even number")
    else:
        print("Odd number")
else:
    print("Please enter a positive number.")
```
---
