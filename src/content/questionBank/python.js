import { expand } from './builders.js'

const T = {
  vars: 'Variables and Output',
  cond: 'Conditionals',
  loops: 'Loops',
  strings: 'Strings',
  lists: 'Lists',
  dicts: 'Dictionaries',
  funcs: 'Functions',
}

const py = (topic, difficulty, key, variants, build) =>
  expand({ language: 'python', topic, difficulty, key, variants, build })

const range = (n) => Array.from({ length: n }, (_, i) => i + 1)
const dictLiteral = (pairs) => `{${pairs.map(([k, v]) => `"${k}": ${v}`).join(', ')}}`
const listLiteral = (items) => `[${items.join(', ')}]`

export const pythonQuestions = [
  ...py(T.vars, 'Easy', 'greeting', ['Asha', 'Milan', 'Tenzin', 'Priya'], (name) => ({
    title: 'Print a greeting',
    prompt: `Store the name "${name}" in a variable, then print exactly: Hello, ${name}!`,
    starter: '# Store the name, then print the greeting\n',
    solution: `name = "${name}"\nprint("Hello, " + name + "!")`,
    expected: `Hello, ${name}!`,
  })),
  ...py(T.vars, 'Easy', 'area', [[4, 5], [7, 3], [12, 8]], ([w, h]) => ({
    title: 'Area of a rectangle',
    prompt: 'The width and height are already stored. Print the area of the rectangle.',
    starter: `width = ${w}\nheight = ${h}\n\n# Print the area\n`,
    solution: `width = ${w}\nheight = ${h}\nprint(width * height)`,
    expected: String(w * h),
  })),
  ...py(T.vars, 'Medium', 'celsius', [0, 37, 100, 25], (c) => ({
    title: 'Celsius to Fahrenheit',
    prompt: 'Read a temperature in Celsius, convert it with F = C × 9/5 + 32, and print the result with exactly one decimal place.',
    starter: 'celsius = int(input())\n\n# Convert and print\n',
    solution: 'celsius = int(input())\nfahrenheit = celsius * 9 / 5 + 32\nprint(f"{fahrenheit:.1f}")',
    testInput: String(c),
    expected: (c * 9 / 5 + 32).toFixed(1),
  })),
  ...py(T.vars, 'Hard', 'split-bill', [[100, 3], [250, 4], [99, 7]], ([total, people]) => ({
    title: 'Split the bill',
    prompt: 'Read the total bill and the number of people (one per line). Print how much each person pays in whole rupees, then how much is left over. Use the format "Each person pays: <amount>" and "Left over: <amount>".',
    starter: 'total = int(input())\npeople = int(input())\n\n# Print the two lines\n',
    solution: 'total = int(input())\npeople = int(input())\nprint("Each person pays:", total // people)\nprint("Left over:", total % people)',
    testInput: `${total}\n${people}`,
    expected: `Each person pays: ${Math.floor(total / people)}\nLeft over: ${total % people}`,
  })),

  ...py(T.cond, 'Easy', 'even-odd', [4, 7, 10, 13], (n) => ({
    title: 'Even or odd',
    prompt: 'Read a whole number. Print Even if it is even, otherwise print Odd.',
    starter: 'n = int(input())\n\n# Print Even or Odd\n',
    solution: 'n = int(input())\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
    testInput: String(n),
    expected: n % 2 === 0 ? 'Even' : 'Odd',
  })),
  ...py(T.cond, 'Medium', 'largest', [[3, 9, 5], [12, 4, 7], [8, 8, 2]], (nums) => ({
    title: 'Largest of three',
    prompt: 'Read three numbers (one per line) and print the largest one using if / elif / else.',
    starter: 'a = int(input())\nb = int(input())\nc = int(input())\n\n# Print the largest\n',
    solution: 'a = int(input())\nb = int(input())\nc = int(input())\nif a >= b and a >= c:\n    print(a)\nelif b >= c:\n    print(b)\nelse:\n    print(c)',
    testInput: nums.join('\n'),
    expected: String(Math.max(...nums)),
  })),
  ...py(T.cond, 'Medium', 'grade', [95, 80, 60, 30], (marks) => ({
    title: 'Grade calculator',
    prompt: 'Read marks out of 100. Print A for 90 or more, B for 75 or more, C for 50 or more, otherwise print Fail.',
    starter: 'marks = int(input())\n\n# Print the grade\n',
    solution: 'marks = int(input())\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 50:\n    print("C")\nelse:\n    print("Fail")',
    testInput: String(marks),
    expected: marks >= 90 ? 'A' : marks >= 75 ? 'B' : marks >= 50 ? 'C' : 'Fail',
  })),
  ...py(T.cond, 'Hard', 'leap-year', [2000, 1900, 2024, 2023], (year) => ({
    title: 'Leap year',
    prompt: 'Read a year. A leap year is divisible by 4, except century years, which must be divisible by 400. Print "Leap year" or "Not a leap year".',
    starter: 'year = int(input())\n\n# Decide and print\n',
    solution: 'year = int(input())\nif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n    print("Leap year")\nelse:\n    print("Not a leap year")',
    testInput: String(year),
    expected: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 'Leap year' : 'Not a leap year',
  })),
  ...py(T.loops, 'Easy', 'count', [3, 5, 7], (n) => ({
    title: `Count from 1 to ${n}`,
    prompt: `Use a for loop to print the numbers from 1 to ${n}, one per line.`,
    starter: '# Use a for loop\n',
    solution: `for i in range(1, ${n + 1}):\n    print(i)`,
    expected: range(n).join('\n'),
  })),
  ...py(T.loops, 'Easy', 'sum-to-n', [10, 50, 100], (n) => ({
    title: 'Sum of 1 to N',
    prompt: 'Read N and print 1 + 2 + 3 + ... + N.',
    starter: 'n = int(input())\n\n# Add the numbers 1 to n\n',
    solution: 'n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)',
    testInput: String(n),
    expected: String((n * (n + 1)) / 2),
  })),
  ...py(T.loops, 'Medium', 'times-table', [3, 7, 12], (n) => ({
    title: 'Multiplication table',
    prompt: 'Read a number and print the first five rows of its table in the format "3 x 1 = 3".',
    starter: 'n = int(input())\n\n# Print five rows\n',
    solution: 'n = int(input())\nfor i in range(1, 6):\n    print(f"{n} x {i} = {n * i}")',
    testInput: String(n),
    expected: range(5).map((i) => `${n} x ${i} = ${n * i}`).join('\n'),
  })),
  ...py(T.loops, 'Medium', 'evens', [10, 15, 20], (n) => ({
    title: 'Even numbers up to N',
    prompt: 'Read N and print every even number from 2 up to N on a single line, separated by spaces.',
    starter: 'n = int(input())\n\n# Print the even numbers\n',
    solution: 'n = int(input())\nprint(*range(2, n + 1, 2))',
    testInput: String(n),
    expected: range(n).filter((i) => i % 2 === 0).join(' '),
  })),
  ...py(T.loops, 'Hard', 'fibonacci', [8, 10, 12], (n) => {
    const seq = [0, 1]
    while (seq.length < n) seq.push(seq[seq.length - 1] + seq[seq.length - 2])
    return {
      title: 'Fibonacci sequence',
      prompt: 'Read N and print the first N Fibonacci numbers (0, 1, 1, 2, 3, ...) on one line, separated by spaces.',
      starter: 'n = int(input())\n\n# Build and print the sequence\n',
      solution: 'n = int(input())\na, b = 0, 1\nresult = []\nfor _ in range(n):\n    result.append(str(a))\n    a, b = b, a + b\nprint(" ".join(result))',
      testInput: String(n),
      expected: seq.slice(0, n).join(' '),
    }
  }),
  ...py(T.loops, 'Hard', 'prime', [29, 51, 97, 100], (n) => {
    const isPrime = n > 1 && ![...Array(n).keys()].slice(2).some((i) => n % i === 0)
    return {
      title: 'Prime check',
      prompt: 'Read a number greater than 1. Print Prime if it is a prime number, otherwise print Not prime.',
      starter: 'n = int(input())\n\n# Check for divisors\n',
      solution: 'n = int(input())\nis_prime = n > 1\nfor i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint("Prime" if is_prime else "Not prime")',
      testInput: String(n),
      expected: isPrime ? 'Prime' : 'Not prime',
    }
  }),
  ...py(T.loops, 'Hard', 'digit-sum', [1234, 9087, 55555], (n) => ({
    title: 'Sum of digits',
    prompt: 'Read a whole number and print the sum of its digits. Try solving it with a while loop, % and //.',
    starter: 'n = int(input())\n\n# Add up the digits\n',
    solution: 'n = int(input())\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\nprint(total)',
    testInput: String(n),
    expected: String([...String(n)].reduce((s, d) => s + Number(d), 0)),
  })),
  ...py(T.strings, 'Easy', 'length', ['python', 'database', 'stylesheet'], (word) => ({
    title: 'Length of a word',
    prompt: 'Read a word and print how many characters it has.',
    starter: 'word = input()\n\n# Print the length\n',
    solution: 'word = input()\nprint(len(word))',
    testInput: word,
    expected: String(word.length),
  })),
  ...py(T.strings, 'Medium', 'vowels', ['Learning to code is fun', 'Practice makes progress', 'Sikailok Academy'], (text) => ({
    title: 'Count the vowels',
    prompt: 'Read a sentence and print how many vowels (a, e, i, o, u) it contains. Ignore upper/lower case.',
    starter: 'sentence = input().lower()\n\n# Count the vowels\n',
    solution: 'sentence = input().lower()\ncount = 0\nfor ch in sentence:\n    if ch in "aeiou":\n        count += 1\nprint(count)',
    testInput: text,
    expected: String((text.toLowerCase().match(/[aeiou]/g) || []).length),
  })),
  ...py(T.lists, 'Easy', 'sum', [[3, 5, 8], [10, 20, 30, 40], [7, 1, 9, 2]], (nums) => ({
    title: 'Sum of a list',
    prompt: 'Print the sum of all numbers in the list.',
    starter: `numbers = ${listLiteral(nums)}\n\n# Print the sum\n`,
    solution: `numbers = ${listLiteral(nums)}\nprint(sum(numbers))`,
    expected: String(nums.reduce((a, b) => a + b, 0)),
  })),
  ...py(T.lists, 'Easy', 'append', [[1, 2, 3], [5, 10], [7, 8, 9, 10]], (nums) => ({
    title: 'Add to a list',
    prompt: 'Add the number 99 to the end of the list, then print the whole list.',
    starter: `numbers = ${listLiteral(nums)}\n\n# Add 99 and print\n`,
    solution: `numbers = ${listLiteral(nums)}\nnumbers.append(99)\nprint(numbers)`,
    expected: listLiteral([...nums, 99]),
  })),
  ...py(T.lists, 'Medium', 'evens', [[1, 2, 3, 4, 5, 6], [7, 8, 10, 13, 14], [11, 22, 33, 44]], (nums) => ({
    title: 'Keep the even numbers',
    prompt: 'Build a new list containing only the even numbers and print it.',
    starter: `numbers = ${listLiteral(nums)}\n\n# Build the list of evens\n`,
    solution: `numbers = ${listLiteral(nums)}\nevens = []\nfor n in numbers:\n    if n % 2 == 0:\n        evens.append(n)\nprint(evens)`,
    expected: listLiteral(nums.filter((n) => n % 2 === 0)),
  })),
  ...py(T.dicts, 'Easy', 'lookup', ['Asha', 'Milan', 'Sita'], (name) => {
    const scores = [['Asha', 92], ['Milan', 85], ['Sita', 78]]
    return {
      title: 'Look up a score',
      prompt: 'Print the score stored for the chosen student.',
      starter: `scores = ${dictLiteral(scores)}\nname = "${name}"\n\n# Print this student's score\n`,
      solution: `scores = ${dictLiteral(scores)}\nname = "${name}"\nprint(scores[name])`,
      expected: String(scores.find(([n]) => n === name)[1]),
    }
  }),
  ...py(T.dicts, 'Medium', 'items-loop', [
    [['Asha', 92], ['Milan', 85]],
    [['Sita', 78], ['Ravi', 66], ['Nima', 88]],
    [['Pema', 95], ['Tashi', 71], ['Dawa', 60]],
  ], (pairs) => ({
    title: 'Print every pair',
    prompt: 'Loop over the dictionary and print one line per student in the format "Asha scored 92".',
    starter: `scores = ${dictLiteral(pairs)}\n\n# Loop with .items()\n`,
    solution: `scores = ${dictLiteral(pairs)}\nfor name, score in scores.items():\n    print(f"{name} scored {score}")`,
    expected: pairs.map(([n, s]) => `${n} scored ${s}`).join('\n'),
  })),
  ...py(T.funcs, 'Easy', 'square', [4, 9, 12], (n) => ({
    title: 'Square function',
    prompt: 'Define a function square(n) that returns n multiplied by itself.',
    starter: `# Define square(n)\n\nprint(square(${n}))\n`,
    solution: `def square(n):\n    return n * n\n\nprint(square(${n}))`,
    expected: String(n * n),
  })),
  ...py(T.funcs, 'Easy', 'greet', ['Asha', 'Tenzin', 'Priya'], (name) => ({
    title: 'Greeting function',
    prompt: 'Define greet(name) so it returns the text "Hello, <name>!".',
    starter: `# Define greet(name)\n\nprint(greet("${name}"))\n`,
    solution: `def greet(name):\n    return "Hello, " + name + "!"\n\nprint(greet("${name}"))`,
    expected: `Hello, ${name}!`,
  })),
]