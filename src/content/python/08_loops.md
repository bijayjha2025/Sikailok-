# Loops in Python
## Loops
Loop means repetition. A loop executes a block of code repeatedly as long as a given condition is satisfied or for a specified number of times.

Python provides two main types of loops:
1. `for` loop
2. `while` loop

## 1. `for` Loop
A **`for` loop** is used to iterate over a sequence (such as a list, string, or range) and execute a block of code for each item.

### Syntax
```python
for variable in sequence:
    statement
```

### Example
**Program to print numbers from 0 to 4:**

```python
for i in range(5):
    print(i)
```

**Output:**
```text
0
1
2
3
4
```

Here, `range(5)` generates the numbers 0, 1, 2, 3, and 4. Therefore, the loop executes five times.

## `range()` Function
The **`range()` function generates a sequence of numbers**. It has three common forms:

### a. `range(stop)`
Generates numbers starting from 0 up to, but not including, the stop value.

```python
for i in range(5):
    print(i)
```

**Output:**
```text
0
1
2
3
4
```

### b. `range(start, stop)`
Generates numbers starting from the start value up to, but not including, the stop value.
```python
for i in range(2, 7):
    print(i)
```

**Output:**
```text
2
3
4
5
6
```

### c. `range(start, stop, step)`
Generates numbers starting from the start value, increasing or decreasing according to the step value, without including the stop value.
```python
for i in range(1, 10, 2):
    print(i)
```

**Output:**
```text
1
3
5
7
9
```

A negative step can be used to count backwards.
**Example:**
```python
for i in range(5, 0, -1):
    print(i)
```

**Output:**
```text
5
4
3
2
1
```

## `for` Loop with a String
A `for` loop can also be used to access each character of a string.

### Example
```python
name = "Python"
for ch in name:
    print(ch)
```

**Output:**
```text
P
y
t
h
o
n
```

Here, the loop accesses and prints each character of the string one by one.

## 2. `while` Loop
A **`while` loop** executes a block of code repeatedly as long as the given condition is `True`.

### Syntax
```python
while condition:
    statement
```

### Example
**Program to print numbers from 1 to 5:**

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

**Output:**
```text
1
2
3
4
5
```

### Explanation
- `i = 1` initializes the variable.
- `i <= 5` is the condition checked before each repetition.
- `print(i)` displays the current value.
- `i += 1` increases the value of `i` by 1.

When `i` becomes 6, the condition becomes `False`, and the loop stops.

> **Important:** If the condition never becomes `False`, the loop may run indefinitely. Such a loop is called an infinite loop.

## 3. Nested Loop
A loop written inside another loop is called a **nested loop**.

### Example
```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)
```

**Output:**

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

Here, the inner loop completes all its iterations for each iteration of the outer loop.

## 4. Loop Control Statements
Loop control statements are used to change the normal execution of a loop. Python provides three important loop control statements:

### a. `break` Statement
The `break` statement immediately terminates the loop when it is executed.

**Example:**
```python
for i in range(1, 6):
    if i == 4:
        break
    print(i)
```

**Output:**
```text
1
2
3
```

When `i` becomes 4, the `break` statement terminates the loop.

### b. `continue` Statement
The `continue` statement skips the remaining statements in the current iteration and moves to the next iteration.

**Example:**
```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

**Output:**
```text
1
2
4
5
```

When `i` becomes 3, the statement is skipped for that iteration.

### c. `pass` Statement
The `pass` statement does nothing. It is used as a placeholder when a statement is required syntactically, but no action is needed yet.

**Example:**
```python
for i in range(1, 6):
    if i == 3:
        pass
    print(i)
```

**Output:**
```text
1
2
3
4
5
```

Unlike `break` and `continue`, `pass` does not stop or skip the loop.

## Differences Between `for` and `while` Loop
| `for`      Loop | `while` Loop |
|---              |---|
| Used when iterating over a sequence or when the number of iterations is known. | Used when repetition depends on a condition. |
| Iterates over items in a sequence or iterable. | Repeats as long as the condition is `True`. |
| Iteration is handled automatically by the loop. | Updating the variable is often done manually. |
| Initialization can be done inside or outside the loop, depending on the program. | Initialization is usually done before the loop. |
| No separate condition is required in its syntax. | A condition is required in its syntax. |
| Generally simpler for iterating over sequences. | Useful when the number of repetitions is not known beforehand. |
| Can also run indefinitely when used with an infinite iterable. | Can run indefinitely if its condition never becomes `False`. |
---