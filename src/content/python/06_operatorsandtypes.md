# Operators and Their Types

## What is an Operator?
An **operator** is a special symbol that performs a specific operation on given values. These values on which an operation is performed are called **operands**.
For example, in `a + b`, `a` and `b` are operands and `+` is an operator.

We use operators to perform calculations, compare values, make decisions based on them, assign values to variables, and many other reasons.

## Types of Operators
### 1. Arithmetic Operators
They are used to perform mathematical calculations.

| Operator | Meaning        | Example   | Result |
|:---:     |---             |---        |---:|
| `+`      | Addition       | `11 + 6`  | `17` |
| `-`      | Subtraction    | `11 - 6`  | `5` |
| `*`      | Multiplication | `11 * 6`  | `66` |
| `/`      | Division       | `11 / 6`  | `1.8333` |
| `//`     | Floor Division | `11 // 6` | `1` |
| `%`      | Modulus (Remainder) | `11 % 6` | `5` |
| `**`     | Exponent (Power) | `2 ** 3` | `8` |

### 2. Relational Operators
They are used to compare two values and always give a result of `True` or `False`.
| Operator   | Meaning |
|:---:       |---|
| `==`       | Equal to |
| `!=`       | Not equal to |
| `>`        | Greater than |
| `<`        | Less than |
| `>=`       | Greater than or equal to |
| `<=`       | Less than or equal to |

### 3. Assignment Operators
They are used to assign values to variables. Some assignment operators also perform an operation and assign the resulting value to the variable.
| Operator   | Meaning | Example |
|:---:       |---|---|
| `=`        | Assign value | `x = 11` |
| `+=`       | Add and assign | `x += 6` |
| `-=`       | Subtract and assign | `x -= 4` |
| `*=`       | Multiply and assign | `x *= 2` |
| `/=`       | Divide and assign | `x /= 2` |
| `%=`       | Modulus and assign | `x %= 4` |
| `//=`      | Floor divide and assign | `x //= 2` |
| `**=`      | Power and assign | `x **= 2` |

> **Note:** `=` is an assignment operator, whereas `==` is a comparison operator.

### 4. Logical Operators
They are used to combine conditions or reverse a condition. They are commonly used in decision-making.
| Operator | Meaning |
|:---:  |---|
| `and` | Returns `True` if both conditions are `True` |
| `or`  | Returns `True` if at least one condition is `True` |
| `not` | Reverses the result of a condition |

### 5. Bitwise Operators
Bitwise operators work directly on the binary (0 and 1) representation of numbers. They are mainly used in advanced programming and low-level operations.
| Operator | Meaning |
|:---:     |---|
| `&`      | Bitwise AND |
| `\|`     | Bitwise OR |
| `^`      | Bitwise XOR |
| `~`      | Bitwise NOT |

### 6. Identity Operators
Identity operators check whether two variables refer to the same object in memory.
| Operator  | Meaning |
|:---:      |---|
| `is`      | Checks whether two variables refer to the same object |
| `is not`  | Checks whether two variables refer to different objects |

### 7. Membership Operators
Membership operators check whether a value exists in a sequence such as a string or list.
| Operator | Meaning |
|:---:     |---|
| `in`     | Checks whether a value is present |
| `not in` | Checks whether a value is not present |

## `id()` Function
Everything created in Python is an **object**, and every object has its own identity in Python.
The `id()` function gives the unique identity of an object. Its general syntax is:

```python
id(object)
```
* The identity (memory-related identifier) can vary depending on the device, Python implementation, and the objects created. *
---