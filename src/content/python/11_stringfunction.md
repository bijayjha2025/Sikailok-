
# String, Numeric and Mathematical Functions
## 1. String Functions and Methods
A **string** is a sequence of characters enclosed in quotation marks. It can contain letters, numbers, symbols, and spaces.
```python
#Examples of string
name = "Monty"
city = "Kathmandu"
message = "Hello Class"
```

String manipulation means changing, checking, or working with strings. Some common string functions and methods are:

### a. `len()`
It returns the number of characters in a string, including spaces.
```python
text = "Hello Class"
print(len(text))
```

**Output:**
```text
11
```

### A. Case Conversion
#### a. `upper()`
It converts all letters to uppercase.
```python
text = "hello python"
print(text.upper())
```

**Output:**
```text
HELLO PYTHON
```

#### b. `lower()`
It converts all letters to lowercase.
```python
text = "HELLO PYTHON"
print(text.lower())
```

**Output:**
```text
hello python
```

#### c. `capitalize()`
It makes the first character uppercase and the remaining characters lowercase.

```python
text = "hello PYTHON"

print(text.capitalize())
```

**Output:**
```text
Hello python
```

#### d. `title()`
It makes the first letter of each word uppercase.

```python
text = "hello python programming"
print(text.title())
```

**Output:**
```text
Hello Python Programming
```

#### e. `swapcase()`
It converts uppercase letters to lowercase and lowercase letters to uppercase.

```python
text = "Hello PYTHON"
print(text.swapcase())
```

**Output:**
```text
hELLO python
```

### B. Searching
#### a. `count()`
It counts how many times a character or word appears in a string.

```python
text = "banana"
print(text.count("a"))
```

**Output:**
```text
3
```

#### b. `find()`
It gives the index of the first occurrence of the specified string. It returns `-1` if it is not found.

```python
text = "Python Programming"
print(text.find("P"))
print(text.find("z"))
```

**Output:**

```text
0
-1
```

#### c. `rfind()`
It returns the index of the last occurrence of the specified string. It returns `-1` if it is not found.

```python
text = "banana"
print(text.rfind("a"))
print(text.rfind("z"))
```

**Output:**
```text
5
-1
```

#### d. `index()`
It returns the index of the first occurrence of a specified string. It raises a `ValueError` if the string is not found.

```python
text = "banana"
print(text.index("a"))
```

**Output:**
```text
1
```

#### e. `rindex()`
It returns the index of the last occurrence of a specified string. It raises a `ValueError` if the string is not found.

```python
text = "banana"
print(text.rindex("a"))
```

**Output:**
```text
5
```

### C. Testing / Validation
#### a. `isalpha()`
Checks whether all characters are alphabets. Returns `True` if the string contains only letters and is not empty.

```python
text = "Python"
print(text.isalpha())
```

**Output:**
```text
True
```

#### b. `isalnum()`
Checks whether all characters are alphabets or numbers.

```python
text = "Python123"
print(text.isalnum())
```

**Output:**
```text
True
```

#### c. `isspace()`
Checks whether all characters in the string are whitespace characters (such as spaces or tabs).

```python
text = "   "
print(text.isspace())
```

**Output:**
```text
True
```

#### d. `isnumeric()`
Checks whether all characters in the string are numeric characters.
```python
text = "12345"
print(text.isnumeric())
```

**Output:**
```text
True
```

#### e. `islower()`
Checks whether all cased characters in the string are lowercase.

```python
text = "hello"

print(text.islower())
```

**Output:**
```text
True
```

#### f. `isupper()`
Checks whether all cased characters in the string are uppercase.

```python
text = "PYTHON"
print(text.isupper())
```

**Output:**

```text
True
```

### D. Other String Methods
#### a. `strip()`
It removes whitespace from the beginning and end of a string.

```python
text = "   Hello Python   "
print(text.strip())
```

**Output:**
```text
Hello Python
```

#### b. `replace()`
It replaces one word or character with another.
```python
text = "I like Java"

print(text.replace("Java", "Python"))
```

**Output:**
```text
I like Python
```

#### c. `startswith()`
It checks whether a string starts with a given value.

```python
text = "Python Programming"
print(text.startswith("Python"))
```

**Output:**
```text
True
```

#### d. `endswith()`
It checks whether a string ends with a given value.

```python
text = "Python Programming"
print(text.endswith("Programming"))
```

**Output:**
```text
True
```

#### e. `split()`
It splits a string into a list using a separator. By default, it splits using whitespace.
```python
text = "Hello Python Programming"
print(text.split())
```

**Output:**
```text
['Hello', 'Python', 'Programming']
```

#### f. `join()`
It joins the elements of an iterable, such as a list of strings, into a single string using the specified separator.

```python
words = ["Hello", "Python", "Programming"]
print(" ".join(words))
```
**Output:**
```text
Hello Python Programming
```

## 2. Numeric Functions in Python
Numeric functions are used to perform common operations on numerical values such as integers and floating-point numbers.

### a. `abs()`
Returns the absolute (non-negative) value of a number.

```python
print(abs(-15))
```

**Output:**
```text
15
```

### b. `round()`
Rounds a number to the nearest integer or to a specified number of decimal places.

```python
print(round(3.14159))
print(round(3.14159, 2))
```

**Output:**
```text
3
3.14
```

### c. `max()`
Returns the largest value among the given numbers or elements.
```python
print(max(10, 25, 5, 40, 15))
```

**Output:**
```text
40
```

### d. `min()`
Returns the smallest value among the given numbers or elements.
```python
print(min(10, 25, 5, 40, 15))
```

**Output:**
```text
5
```

### e. `sum()`
Returns the sum of all elements in an iterable, such as a list or tuple.

```python
numbers = [10, 20, 30, 40]
print(sum(numbers))
```

**Output:**
```text
100
```

### f. `pow()`
Returns a number raised to the power of another number.

```python
print(pow(2, 3))
```

**Output:**
```text
8
```

### g. `divmod()`
Returns the quotient and remainder of a division in the form of a tuple.
```python
print(divmod(17, 5))
```

**Output:**
```text
(3, 2)
```

## 3. Mathematical Functions in Python
Python provides a built-in module called `math` that contains various mathematical functions and constants.

To use these functions, we first need to import the `math` module.

### Syntax
```python
import math
```

### Common Mathematical Functions
#### a. `math.sqrt()`
Returns the square root of a number.

```python
import math
print(math.sqrt(25))
```

**Output:**
```text
5.0
```

#### b. `math.ceil()`
Rounds a number upward to the smallest integer greater than or equal to that number.

```python
import math
print(math.ceil(4.2))
```

**Output:**
```text
5
```

#### c. `math.floor()`
Rounds a number downward to the greatest integer less than or equal to that number.

```python
import math
print(math.floor(4.8))
```

**Output:**
```text
4
```

#### d. `math.factorial()`
Returns the factorial of a non-negative integer.

```python
import math
print(math.factorial(5))
```

**Output:**
```text
120
```

#### e. `math.pow()`
Returns a number raised to the power of another number as a floating-point value.

```python
import math
print(math.pow(2, 3))
```

**Output:**
```text
8.0
```

#### f. `math.pi`
Provides the mathematical constant π (pi), approximately 3.14159.

```python
import math
print(math.pi)
```

**Output:**
```text
3.141592653589793
```

#### g. `math.e`
Provides the mathematical constant e, approximately 2.71828.

```python
import math
print(math.e)
```

**Output:**
```text
2.718281828459045
```

#### h. `math.sin()`
Returns the sine of an angle given in radians.

```python
import math
print(math.sin(math.pi / 2))
```

**Output:**
```text
1.0
```

#### i. `math.cos()`
Returns the cosine of an angle given in radians.

```python
import math
print(math.cos(0))
```

**Output:**
```text
1.0
```

#### j. `math.log()`
Returns the natural logarithm (base `e`) of a number by default.

```python
import math
print(math.log(math.e))
```

**Output:**
```text
1.0
```

## 4. String Indexing
Each character in a string has a position called an **index**. Indexing starts from `0`.

### Example
```text
P   a   l   p   a
0   1   2   3   4
```

```python
word = "Palpa"
print(word[0])
```

**Output:**
```text
P
```

### Negative Indexing
Python also counts from the end of the string using negative indexes.
```text
P    a    l    p    a
-5   -4   -3   -2   -1
```

### Example
```python
word = "Palpa"
print(word[-1])
```

**Output:**
```text
a
```
---