# List in Python
A **list** is a collection of multiple items stored in a single variable. Lists are used to store different values such as numbers, names, marks, and other data.

A list is created using square brackets `[]`, and its elements are separated by commas.
## Syntax
```python
list_name = [item1, item2, item3, ...]
```

## Example
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
print(fruits)
```

**Output:**
```text
['Apple', 'Banana', 'Mango', 'Orange']
```

## Features of Lists
1. A list can store multiple values.
2. A list is **ordered**, meaning its elements maintain their positions.
3. A list is **mutable**, meaning its elements can be changed after creation.
4. A list allows duplicate values.
5. A list can contain different data types.
6. List elements are accessed using index numbers, starting from `0`.

## Accessing List Elements
Each element in a list has an index number. The first element has index `0`, the second has index `1`, and so on.

### Example
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
print(fruits[0])
print(fruits[1])
print(fruits[2])
print(fruits[3])
```

**Output:**
```text
Apple
Banana
Mango
Orange
```

## Negative Indexing
Python also supports negative indexing, which starts from the end of a list. `-1` represents the last element, and `-2` represents the second-last element.

### Example
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
print(fruits[-1])
print(fruits[-2])
print(fruits[-3])
print(fruits[-4])
```

**Output:**
```text
Orange
Mango
Banana
Apple
```

## Modifying List Elements
Since lists are mutable, we can change their elements using their index numbers.

### Example
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
fruits[1] = "Grapes"
print(fruits)
```

**Output:**
```text
['Apple', 'Grapes', 'Mango', 'Orange'] #Here, `Grapes` is inserted at index `1` by replacing `Banana`.
```

## List Operations and Methods
Python provides several built-in methods to perform operations on lists.

### 1. `append()`
Adds an element at the end of the list.

```python
fruits = ["Apple", "Banana", "Mango"]
fruits.append("Orange")
print(fruits)
```

**Output:**
```text
['Apple', 'Banana', 'Mango', 'Orange']
```

### 2. `insert()`
Inserts an element at a specified position.
```python
fruits = ["Apple", "Banana", "Mango"]
fruits.insert(1, "Grapes")
print(fruits)
```

**Output:**
```text
['Apple', 'Grapes', 'Banana', 'Mango']
```

### 3. `remove()`
Removes the first occurrence of a specified value.

```python
fruits = ["Apple", "Banana", "Mango", "Banana"]
fruits.remove("Banana")
print(fruits)
```

**Output:**
```text
['Apple', 'Mango', 'Banana']
```

### 4. `pop()`
Removes and returns an element from the list. By default, it removes the last element.

```python
fruits = ["Apple", "Banana", "Mango"]
fruits.pop()
print(fruits)
```

**Output:**
```text
['Apple', 'Banana']
```

We can also specify an index:
```python
fruits = ["Apple", "Banana", "Mango"]
fruits.pop(1)
print(fruits)
```

**Output:**
```text
['Apple', 'Mango']
```

### 5. `sort()`
Arranges the list elements in ascending order by default.

```python
numbers = [5, 2, 8, 1, 9, 3]
numbers.sort()
print(numbers)
```

**Output:**
```text
[1, 2, 3, 5, 8, 9]
```

To arrange elements in descending order:
```python
numbers = [5, 2, 8, 1, 9, 3]
numbers.sort(reverse=True)
print(numbers)
```

**Output:**
```text
[9, 8, 5, 3, 2, 1]
```

### 6. `reverse()`
Reverses the current order of the list elements.

```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)
```

**Output:**
```text
[5, 4, 3, 2, 1]
```

### 7. `count()`
Returns the number of times a particular element appears in a list.

```python
numbers = [1, 2, 3, 2, 4, 2, 5]
print(numbers.count(2))
```

**Output:**
```text
3
```

### 8. `index()`
Returns the index of the first occurrence of a specified element.
```python
fruits = ["Apple", "Banana", "Mango", "Banana"]
print(fruits.index("Banana"))
```

**Output:**
```text
1
```

### 9. `len()`
Returns the total number of elements in a list.
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
print(len(fruits))
```

**Output:**
```text
4
```

## Traversing a List Using a Loop
We can use a `for` loop to access each element of a list one by one.

### Example
```python
fruits = ["Apple", "Banana", "Mango", "Orange"]
for fruit in fruits:
    print(fruit)
```

**Output:**
```text
Apple
Banana
Mango
Orange
```

## List Slicing
List slicing is used to access a particular portion of a list.

### Syntax
```python
list_name[start:stop:step]
```
- `start` - Starting index (included).
- `stop` - Ending index (excluded).
- `step` - The interval between elements.

### Example
```python
numbers = [10, 20, 30, 40, 50, 60]
print(numbers[1:4])
print(numbers[:3])
print(numbers[2:])
print(numbers[::2])
print(numbers[::-1])
```

**Output:**
```text
[20, 30, 40]
[10, 20, 30]
[30, 40, 50, 60]
[10, 30, 50]
[60, 50, 40, 30, 20, 10]
```

> **Note:** The stop index is excluded.

## Question: Find the Sum and Average of List Elements

### Program
```python
marks = [80, 75, 90, 85, 70]
total = 0
for mark in marks:
    total += mark
average = total / len(marks)
print("Sum =", total)
print("Average =", average)
```

**Output:**

```text
Sum = 400
Average = 80.0
```