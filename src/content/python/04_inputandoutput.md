# Input and Output in Python
## 1. Output in Python
The `print()` function is used to display information or results on the screen.

### Syntax
```python
print(value)
```

### Examples
#### a. Printing a Message
```python
print("Hello, World!")
```

**Output:**
```text
Hello, World!
```

#### b. Printing Numbers
```python
print(100)
print(25.5)
```

**Output:**
```text
100
25.5
```

#### c. Printing Variables
```python
name = "Tommy"
age = 15
print(name)
print(age)
```

**Output:**
```text
Tommy
15
```

#### d. Printing Multiple Values
```python
name = "Tommy"
age = 15
print(name, age)
```

**Output:**
```text
Tommy 15
```

#### e. Printing Multiple Values with a Message
```python
name = "Tommy"
age = 15
print("My name is", name, "and I am", age, "years old.")
```

**Output:**
```text
My name is Tommy and I am 15 years old.
```

## 2. Input in Python
The `input()` function is used to receive data from the user through the keyboard.

### Syntax
```python
variable = input("Message")
# Here, the message inside the quotation marks is displayed as a prompt or information to the user.
```

### Examples
#### a. Taking a Name as Input
```python
name = input("Enter your name: ")
print("Your name is", name)
```

**Output:**
```text
Enter your name: Arjun
Your name is Arjun
```

#### b. Taking Age as Input
```python
age = input("Enter your age: ")
print("Your age is", age)
```

**Output:**
```text
Enter your age: 16
Your age is 16
```

> **Important Note:** The `input()` function always returns data in string (`str`) form, even if the user enters a number. So, it is necessary to consider this whenever we want to perform calculations.

#### c. Taking Multiple Inputs
```python
name = input("Enter your name: ")
address = input("Enter your address: ")
age = input("Enter your age: ")
print("Name:", name)
print("Address:", address)
print("Age:", age)
```

**Output:**
```text
Enter your name: Arjun
Enter your address: Palpa
Enter your age: 16
Name: Arjun
Address: Palpa
Age: 16
```

### Converting Input into Numbers
Since `input()` returns a string, we need to convert it into an integer or float to perform calculations.

#### Example: Addition of Two Numbers
```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
sum = num1 + num2
print("Sum =", sum)
```

**Output:**
```text
Enter first number: 10
Enter second number: 20
Sum = 30
```
- `int()` converts input into an integer.
- `float()` converts input into a decimal number.

## 3. Escape Sequences
Escape sequences are special characters used inside strings to perform specific formatting tasks.

### Common Escape Sequences
| Escape Sequence | Description | Example |
|---   |---|---|
| `\n` | New line | `print("Hello\nWorld")` |
| `\t` | Horizontal tab | `print("Hello\tWorld")` |
| `\\` | Backslash | `print("C:\\Python")` |
| `\'` | Single quotation mark | `print('It\'s Python')` |
| `\"` | Double quotation mark | `print("He said \"Hello\"")` |

### Examples
#### a. New Line (`\n`)
```python
print("Hello\nEveryone")
```

**Output:**
```text
Hello
Everyone
# Here, `\n` breaks the line and starts the text on a new line.
```

#### b. Horizontal Tab (`\t`)
```python
print("Hello\tWorld")
```

**Output:**
```text
Hello    World
# Here, `\t` creates a horizontal tab space.
```

#### c. Backslash (`\\`)
```python
print("C:\\Python")
```

**Output:**
```text
C:\Python
```

#### d. Single Quotation Mark (`\'`)
```python
print('It\'s Python')
```

**Output:**
```text
It's Python
```

#### e. Double Quotation Mark (`\"`)
```python
print("He said \"Hello\"")
```

**Output:**
```text
He said "Hello"
```

## 4. Test Your Basic Understanding
### Question
What will be the output of the following program?
```python
name = "Tom"
age = 15
print("Hello\n", name)
print("Age:\t", age)
print("Python\\Programming")
```