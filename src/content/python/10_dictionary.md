# Dictionary in Python
A **dictionary** is a collection of data stored in key-value pairs. Each value is accessed using its corresponding key instead of an index number. A dictionary is created using curly brackets `{}`.

## Syntax
```python
dictionary_name = {
    key1: value1,
    key2: value2
}
```

## Example
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'age': 16, 'grade': 10}
```

## Features of Dictionaries
1. A dictionary stores data in key-value pairs.
2. Dictionaries are mutable, meaning their contents can be changed.
3. Each key must be unique.
4. Values can be duplicated.
5. Values can be of different data types.
6. Dictionaries maintain insertion order in modern Python.
7. Keys must be immutable (hashable) types, such as strings, numbers, or tuples containing hashable elements.

## Accessing Dictionary Values
We can access a value using its corresponding key.

### Example
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student["name"])
print(student["age"])
print(student["grade"])
```

**Output:**
```text
Arjun
16
10
```

We can also use the `get()` method to access values.

### Example
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student.get("name"))
print(student.get("age"))
print(student.get("address"))
```

**Output:**
```text
Arjun
16
None
```

Unlike square-bracket access, `get()` returns `None` by default if the key does not exist, instead of raising a `KeyError`.

## Adding New Elements
We can add a new key-value pair by assigning a value to a new key.

### Example
```python
student = {
    "name": "Arjun",
    "age": 16
}
student["grade"] = 10
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'age': 16, 'grade': 10}
```

## Modifying Dictionary Values
We can modify an existing value by assigning a new value to its key.

### Example
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
student["age"] = 17
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'age': 17, 'grade': 10}
```

## Dictionary Methods
### 1. `keys()`
Returns all the keys of a dictionary.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student.keys())
```

**Output:**
```text
dict_keys(['name', 'age', 'grade'])
```

### 2. `values()`
Returns all the values of a dictionary.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student.values())
```

**Output:**
```text
dict_values(['Arjun', 16, 10])
```

### 3. `items()`
Returns all key-value pairs of a dictionary.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(student.items())
```

**Output:**
```text
dict_items([('name', 'Arjun'), ('age', 16), ('grade', 10)])
```

### 4. `update()`
Adds new key-value pairs or updates existing values.

```python
student = {
    "name": "Arjun",
    "age": 16
}

student.update({"grade": 10, "age": 17})
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'age': 17, 'grade': 10}
```

### 5. `pop()`
Removes a specified key and returns its value.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
student.pop("age")
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'grade': 10}
```

### 6. `popitem()`
Removes and returns the last inserted key-value pair.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
student.popitem()
print(student)
```

**Output:**
```text
{'name': 'Arjun', 'age': 16}
```

### 7. `clear()`
Removes all elements from a dictionary.

```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
student.clear()
print(student)
```

**Output:**
```text
{}
```

### 8. `len()`
Returns the number of key-value pairs in a dictionary.
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
print(len(student))
```

**Output:**
```text
3
```

## Traversing a Dictionary Using a Loop
We can use a `for` loop to access dictionary keys and values.

### 1. Accessing Keys
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
for key in student:
    print(key)
```

**Output:**
```text
name
age
grade
```

### 2. Accessing Values
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
for value in student.values():
    print(value)
```

**Output:**
```text
Arjun
16
10
```

### 3. Accessing Both Keys and Values
```python
student = {
    "name": "Arjun",
    "age": 16,
    "grade": 10
}
for key, value in student.items():
    print(key, ":", value)
```

**Output:**
```text
name : Arjun
age : 16
grade : 10
```

## 5. Differences Between List and Dictionary
| List | Dictionary |
|---   |---|
| A list stores elements in a sequence. | A dictionary stores data in key-value pairs. |
| List elements are accessed by index. | Dictionary values are accessed by keys. |
| List elements have an order. | Dictionaries maintain insertion order in modern Python. |
| List elements can be added or removed. | Dictionary key-value pairs can be added or removed. |
| Lists are created using square brackets `[]`. | Dictionaries are created using curly brackets `{}`. |
| Duplicate elements are allowed. | Keys must be unique, but values can be duplicated. |
| Example: `["Apple", "Banana"]` | Example: `{"name": "Arjun", "age": 16}` |
---