# Our First Python Program
```python
print("Hello, from Python")
```
Output:
```text
Hello, from Python
```

In this program:
- Statement: print("Hello, from Python") is a statement. A statement is an instruction in a program that instructs the program to perform an action.
- Built-in function: print() is a built-in function that is used to display output. (Will study this later on)
- String: "Hello, from Python" is a string. The text enclosed within quotation mark is displayed as output.

> Note: The quotation marks are not displayed in the output. They indicate that the enclosed text is a string.

## Comments in Python	
Comments are used to explain code and make it easier to understand. Comments are ignored during execution, so they do not affect the program’s output and it will not be displayed. Two common ways to comment: single-line comments and multiline comments.

Single-line comments: Use the hash symbol (#) to write a comment.
```python
print("Hello World!") #Whatever I write now, will not be printed. It is ignored by the compiler when displaying.
```

Multi-line comments: We can use hash symbol (#) in each line or we can use triple quotations """----""" Or '''------'''
```python
print("Hello") #This is multiline comment
# and
# is
# ignored
```
Output:
```text
Hello
```

>> Triple quotation marks create a string, not an actual comment. The string is not displayed unless we use print(). When used at the beginning of a function, class, or module, it can serve as documentation called a docstring.
