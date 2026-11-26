# Data Types and Typecasting
## Data Types in Python
A **data type** tells us what kind of value a variable refers to. We need to work with various kinds of data like name, address, date of birth, salary, age, result status, marks, etc. This is why we need to understand data types.

Python has several built-in data types.
### 1. Numeric Data Types
Numeric data types are used to store numerical values. They are of three types:

#### a. Integer (int)
It is used to represent whole numbers without decimal points. It can be positive, negative, or zero. Examples: Age, number of items, roll number, grade, etc.

**Examples:**
```python
age = 15
roll = 25
grade = 9
a = -10
print(age)
print(roll)
print(grade)
print(a)
```

**Output:**
```text
15
25
9
-10
```

#### b. Float (float)
It is used to represent numbers with decimal points. Examples: Height, price, salary, radius, weight, etc.

**Examples:**
```python
p = 9.5
height = 5.8
radius = 33.32
weight = 78.9
print(height)
print(radius)
```

**Output:**
```text
5.8
33.32
```

#### c. Complex (complex)
It is used to represent complex numbers that have real and imaginary parts. In Python, the imaginary part is represented by the letter `j`.

**Examples:**
```python
z1 = 2 + 3j
z2 = 3 - 4j
print(z1)
print(z2)
```

**Output:**
```text
(2+3j)
(3-4j)
```
---

### 2. Text Type → String (str)
A **string** is a sequence of characters enclosed within quotation marks.
We can use single (`'-------'`), double (`"-------"`), or triple (`"""-------"""`) quotation marks to create strings.

**Examples:**
```python
name = "Ram"
number = "1234"
city = "Kathmandu"
date = "20201011"
print(name)
print(number)
print(city)
print(date)
```

**Output:**
```text
Ram
1234
Kathmandu
20201011
```

**Note:** Even if a number is enclosed within quotation marks, Python treats it as a string, not as a numeric value.

For example:
```python
a = 123
b = "123"
print(type(a))
print(type(b))
```

**Output:**
```text
<class 'int'>
<class 'str'>
```
---

### 3. Boolean (bool)
It is used to represent two possible values: `True` or `False`. It is commonly used in decision-making and conditions.

**Examples:**
```python
isStudent = True
rainedToday = False
a = True
print(isStudent)
print(rainedToday)
```

**Output:**
```text
True
False
```

**Note:** The first letter of `True` and `False` must always be capitalized in Python.
---

### 4. NoneType
It is a special data type that represents the absence of a value or a value that is not available.

**Example:**
```python
rain = None
print(rain)
print(type(rain))
```

**Output:**
```text
None
<class 'NoneType'>
```

**Example:**
```python
a = None
print(type(a))
b = ""
print(type(b))
```

**Output:**
```text
<class 'NoneType'>
<class 'str'>
```

**Note:** If a variable has no value assigned to it using `None`, it is different from an empty string (`""`). Here, `b` contains an empty string, not `None`. So, `None` and `""` (empty string) are different.
---

### 5. Sequence Types
Sequence types are used to store multiple items in an ordered way. They include:

#### a. List (list)
A **list** is an ordered collection of items that can contain different data types. Lists are **mutable**, which means we can change their contents after they are created.

**Example:**
```python
list1 = [1, 2, 3, "Hello", True]
print(list1)
```

**Output:**
```text
[1, 2, 3, 'Hello', True]
```

#### b. Tuple (tuple)
A **tuple** is an ordered collection of items that can contain different data types. Tuples are **immutable**, which means we cannot change their contents after they are created.

**Example:**
```python
tuple1 = (1, 2, 3, "Hello", True)
print(tuple1)
```

**Output:**
```text
(1, 2, 3, 'Hello', True)
```
---

### 6. Mapping Type → Dictionary (dict)
A **dictionary** is a collection of key-value pairs. Each value is associated with a unique key. Dictionaries are **mutable**, which means we can add, remove, or change their items after they are created.

**Example:**
```python
dictionary1 = {
    "name": "Lee",
    "age": 23,
    "isStudent": True
}

print(dictionary1)
```

**Output:**
```text
{'name': 'Lee', 'age': 23, 'isStudent': True}
```

---
### 7. Set (set)
A **set** is an unordered collection of unique items. It does not allow duplicate values. Sets are **mutable**, which means we can add or remove items after they are created.

**Example:**
```python
set1 = {1, 2, 3, "Hello"}
print(set1)
```

**Output:**
```text
{1, 2, 3, 'Hello'}
```

> Sets do not maintain a guaranteed order, so the displayed order of items may vary.
---

## Checking Data Types Using type() Function
The **`type()`** function is a built-in function in Python used to check the data type of a value or variable.

**Example:**
```python
a = 10
b = "Hello"
c = 20.5
d = True
e = [1, 3.4, "Alex", True]
f = (1, 3.6, "Alexa", False)
g = {1, 3.4, 'Ram', 'Kathmandu', 'Dharan'}
z = 2 + 3j
h = "6.5"
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
print(type(g))
print(type(h))
print(type(z))
```

**Output:**
```text
<class 'int'>
<class 'str'>
<class 'float'>
<class 'bool'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'str'>
<class 'complex'>
```

**Explanation:**
- `a` is an integer.
- `b` is a string.
- `c` is a float.
- `d` is a Boolean.
- `e` is a list.
- `f` is a tuple.
- `g` is a set.
- `h` is a string.
- `z` is a complex number.
---

## Typecasting in Python
**Typecasting** is the process of converting one data type into another data type. By default, Python takes user input as a string. Therefore, we often need to convert the input into our desired format so that we can perform the required operations.

There are two types of typecasting in Python:
### 1. Implicit Typecasting
When Python automatically converts one data type into another data type, it is called **implicit typecasting**.

**Example:**
```python
a = 13      # Integer
b = 12.5    # Float

print(a + b)
# Here, Python automatically converts the integer value 13 into a float value 13.0 and then performs the addition.
```

**Output:**
```text
25.5
```
---

### 2. Explicit Typecasting
When the programmer manually converts one data type into another data type using built-in functions, it is called **explicit typecasting**.
Some commonly used typecasting functions are:

#### a. int()
Converts a value into an integer.

**Example:**
```python
age = "16"
print(int(age))
```

**Output:**
```text
16
```

> Note: `int()` can convert a valid integer string into an integer. However, `int("16.5")` produces a `ValueError` because the string contains a decimal point.

#### b. float()
Converts a value into a floating-point number.

**Example:**
```python
price = "99"
print(float(price))
```

**Output:**
```text
99.0
```

#### c. str()
Converts a value into a string.

**Example:**
```python
age = 15
print(str(age))
```

**Output:**
```text
15
```

#### d. bool()
Converts a value into a Boolean value (`True` or `False`).

**Example:**
```python
a = 10
b = 0

print(bool(a))
print(bool(b))
```

**Output:**
```text
True
False
```

> In Python, zero, empty strings, and empty collections are treated as `False`, whereas most other values are treated as `True`.
---

### Demonstration of Typecasting
Since the `input()` function always returns a string, we need to convert numerical input into the appropriate data type before performing calculations.

#### Example 1: Without Typecasting
```python
a = input("Enter a number: ")
b = input("Enter second number: ")
print(a + b)
# Here, Python joins the two strings instead of performing mathematical addition.
```

**Sample Input:**
```text
Enter a number: 10
Enter second number: 20
```

**Output:**
```text
1020
```

#### Example 2: With Typecasting

```python
a = input("Enter a number: ")
b = input("Enter second number: ")
print(int(a) + int(b))
# Here, int() converts the input strings into integers, allowing Python to perform mathematical addition.
```

**Sample Input:**
```text
Enter a number: 10
Enter second number: 20
```

**Output:**
```text
30
```
> Not every value can be converted into every data type. For example, `int("Hello")` produces a `ValueError` because `"Hello"` cannot be converted into an integer.

---

### Why is Typecasting Important?
- Typecasting helps convert data entered by users into the required data type. For example, converting entered numbers into integers or floats so that we can perform mathematical and other calculations.
- It allows us to change data from one type to another whenever needed. For example, converting a number into a string when we need to combine it with some text.
- It prevents errors that may occur when we try to perform incompatible operations on different data types. For example, we cannot directly add a number like `10` and a word like `"Hello"` mathematically. Typecasting helps us convert data into a suitable type before performing an operation.
---