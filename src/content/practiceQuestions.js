const variants = [
  { number: 2, word: 'Mango', name: 'Asha', second: 5 },
  { number: 3, word: 'River', name: 'Milan', second: 7 },
  { number: 4, word: 'Cloud', name: 'Rita', second: 8 },
  { number: 5, word: 'Garden', name: 'Bikash', second: 9 },
  { number: 6, word: 'Pencil', name: 'Sita', second: 11 },
  { number: 7, word: 'Planet', name: 'Arun', second: 13 },
]

const questionFamilies = [
  {
    topic: 'Introduction to Python',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Print a greeting', prompt: `Write a Python program that prints "${v.word}!".`, starter: '# Print the greeting here', solution: `print("${v.word}!")`, expected: `${v.word}!` }),
      (v) => ({ title: 'Print a mini profile', prompt: `Print these two lines exactly: "${v.name}" and "${v.word}".`, starter: '# Print the two lines', solution: `print("${v.name}")\nprint("${v.word}")`, expected: `${v.name}\n${v.word}` }),
      (v) => ({ title: 'Build a message with a variable', prompt: `Store "${v.word}" in a variable named place, then print "Welcome to <place>!" using an f-string.`, starter: 'place = ""\n# Print the welcome message', solution: `place = "${v.word}"\nprint(f"Welcome to {place}!")`, expected: `Welcome to ${v.word}!` }),
    ],
  },
  {
    topic: 'First Python Program',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Display a message', prompt: `Write a program that displays "I am learning Python, lesson ${v.number}."`, starter: '# Display the lesson message', solution: `print("I am learning Python, lesson ${v.number}.")`, expected: `I am learning Python, lesson ${v.number}.` }),
      (v) => ({ title: 'Calculate a total', prompt: `Create a program that adds ${v.number} and ${v.second}, then prints the result.`, starter: '# Add the two numbers and print the result', solution: `print(${v.number} + ${v.second})`, expected: String(v.number + v.second) }),
      (v) => ({ title: 'Calculate a rectangle area', prompt: `A rectangle is ${v.number} units wide and ${v.second} units high. Calculate and print its area.`, starter: 'width = 0\nheight = 0\n# Calculate and print the area', solution: `width = ${v.number}\nheight = ${v.second}\nprint(width * height)`, expected: String(v.number * v.second) }),
    ],
  },
  {
    topic: 'Variables',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Store and display a value', prompt: `Store the number ${v.number} in a variable named score and print score.`, starter: 'score = 0\n# Print score', solution: `score = ${v.number}\nprint(score)`, expected: String(v.number) }),
      (v) => ({ title: 'Add two variables', prompt: `Store ${v.number} and ${v.second} in variables first and second. Print their sum.`, starter: 'first = 0\nsecond = 0\n# Print their sum', solution: `first = ${v.number}\nsecond = ${v.second}\nprint(first + second)`, expected: String(v.number + v.second) }),
      (v) => ({ title: 'Swap two values', prompt: `Set left to ${v.number} and right to ${v.second}. Swap them, then print left and right on separate lines.`, starter: 'left = 0\nright = 0\n# Swap the values and print them', solution: `left = ${v.number}\nright = ${v.second}\nleft, right = right, left\nprint(left)\nprint(right)`, expected: `${v.second}\n${v.number}` }),
    ],
  },
  {
    topic: 'Input and Output',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Echo a name', prompt: 'Read one line of input and print it back exactly as entered.', starter: 'name = input()\n# Print the name', solution: 'name = input()\nprint(name)', expected: v.name, testInput: v.name }),
      (v) => ({ title: 'Double an input number', prompt: `Read a number and print twice its value. Try the input ${v.number}.`, starter: 'number = input()\n# Convert it to an integer and print double', solution: 'number = int(input())\nprint(number * 2)', expected: String(v.number * 2), testInput: String(v.number) }),
      (v) => ({ title: 'Add two input numbers', prompt: `Read two numbers on separate lines, add them, and print the total. Try ${v.number} and ${v.second}.`, starter: 'first = input()\nsecond = input()\n# Convert, add, and print', solution: 'first = int(input())\nsecond = int(input())\nprint(first + second)', expected: String(v.number + v.second), testInput: `${v.number}\n${v.second}` }),
    ],
  },
  {
    topic: 'Data Types',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Check a value type', prompt: `Create the value ${v.number} and print its type name (for example, int).`, starter: 'value = 0\n# Print the type name', solution: `value = ${v.number}\nprint(type(value).__name__)`, expected: 'int' }),
      (v) => ({ title: 'Convert text to an integer', prompt: `Convert the text "${v.number}" to an integer, add 1, and print the result.`, starter: 'text = ""\n# Convert, add 1, and print', solution: `text = "${v.number}"\nprint(int(text) + 1)`, expected: String(v.number + 1) }),
      (v) => ({ title: 'Convert and combine values', prompt: `Convert "${v.number}" to an integer and ${v.second} to a float. Print their sum.`, starter: 'first = ""\nsecond = ""\n# Convert both values and print their sum', solution: `first = "${v.number}"\nsecond = "${v.second}"\nprint(int(first) + float(second))`, expected: String(v.number + v.second) }),
    ],
  },
  {
    topic: 'Operators and Types',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Use an arithmetic operator', prompt: `Print the result of ${v.number} multiplied by ${v.second}.`, starter: '# Multiply the numbers and print the result', solution: `print(${v.number} * ${v.second})`, expected: String(v.number * v.second) }),
      (v) => ({ title: 'Follow operator precedence', prompt: `Print the result of ${v.number} + ${v.second} * 2. Do not add extra parentheses.`, starter: '# Write the expression and print its result', solution: `print(${v.number} + ${v.second} * 2)`, expected: String(v.number + v.second * 2) }),
      (v) => ({ title: 'Use power and remainder', prompt: `Print ${v.number} to the power of 2, then print the remainder when ${v.second} is divided by ${v.number}.`, starter: '# Print each result on its own line', solution: `print(${v.number} ** 2)\nprint(${v.second} % ${v.number})`, expected: `${v.number ** 2}\n${v.second % v.number}` }),
    ],
  },
  {
    topic: 'Conditional Statements',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Classify a number', prompt: `Set number to ${v.number - 4}. Print "positive" if it is greater than 0, otherwise print "not positive".`, starter: 'number = 0\nif number > 0:\n    pass  # Print the positive case\nelse:\n    pass  # Print the other case', solution: `number = ${v.number - 4}\nif number > 0:\n    print("positive")\nelse:\n    print("not positive")`, expected: v.number - 4 > 0 ? 'positive' : 'not positive' }),
      (v) => ({ title: 'Check even or odd', prompt: `Set number to ${v.number}. Print "even" if it is even and "odd" otherwise.`, starter: 'number = 0\n# Check the remainder and print even or odd', solution: `number = ${v.number}\nif number % 2 == 0:\n    print("even")\nelse:\n    print("odd")`, expected: v.number % 2 === 0 ? 'even' : 'odd' }),
      (v) => ({ title: 'Find the largest value', prompt: `Compare ${v.number}, ${v.second}, and ${v.second - 2}. Print the largest number using conditional statements.`, starter: 'first = 0\nsecond = 0\nthird = 0\n# Find and print the largest number', solution: `first = ${v.number}\nsecond = ${v.second}\nthird = ${v.second - 2}\nif first >= second and first >= third:\n    print(first)\nelif second >= third:\n    print(second)\nelse:\n    print(third)`, expected: String(Math.max(v.number, v.second, v.second - 2)) }),
    ],
  },
  {
    topic: 'Loops',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Print a number sequence', prompt: `Use a for loop to print the numbers 1 through ${v.number}, one per line.`, starter: 'for number in range(1, 1):\n    pass  # Print each number', solution: `for number in range(1, ${v.number + 1}):\n    print(number)`, expected: Array.from({ length: v.number }, (_, index) => String(index + 1)).join('\n') }),
      (v) => ({ title: 'Add numbers with a loop', prompt: `Use a loop to calculate the sum of numbers from 1 through ${v.number}, then print the sum.`, starter: 'total = 0\n# Add each number from 1 to the limit\nprint(total)', solution: `total = 0\nfor number in range(1, ${v.number + 1}):\n    total += number\nprint(total)`, expected: String(v.number * (v.number + 1) / 2) }),
      (v) => ({ title: 'Calculate a factorial', prompt: `Use a loop to calculate ${v.number}! (the product of all positive integers up to ${v.number}) and print it.`, starter: 'result = 1\n# Multiply each number from 1 to the limit\nprint(result)', solution: `result = 1\nfor number in range(1, ${v.number + 1}):\n    result *= number\nprint(result)`, expected: String(Array.from({ length: v.number }, (_, index) => index + 1).reduce((total, number) => total * number, 1)) }),
    ],
  },
  {
    topic: 'Lists',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Find a list length', prompt: `Create a list containing ${v.number}, ${v.second}, and ${v.number + 1}. Print its length.`, starter: 'numbers = []\n# Print the number of items', solution: `numbers = [${v.number}, ${v.second}, ${v.number + 1}]\nprint(len(numbers))`, expected: '3' }),
      (v) => ({ title: 'Sum list values', prompt: `Create a list containing ${v.number}, ${v.second}, and ${v.number + 2}. Print the sum using sum().`, starter: 'numbers = []\n# Print the sum', solution: `numbers = [${v.number}, ${v.second}, ${v.number + 2}]\nprint(sum(numbers))`, expected: String(v.number + v.second + v.number + 2) }),
      (v) => ({ title: 'Filter even numbers', prompt: `From the list [${v.number}, ${v.number + 1}, ${v.number + 2}, ${v.number + 3}], print only the even numbers, one per line.`, starter: 'numbers = []\n# Loop through the list and print even values', solution: `numbers = [${v.number}, ${v.number + 1}, ${v.number + 2}, ${v.number + 3}]\nfor number in numbers:\n    if number % 2 == 0:\n        print(number)`, expected: [v.number, v.number + 1, v.number + 2, v.number + 3].filter((number) => number % 2 === 0).join('\n') }),
    ],
  },
  {
    topic: 'Dictionary',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Look up a dictionary value', prompt: `Create a dictionary with the key "fruit" set to "${v.word}". Print the value for "fruit".`, starter: 'details = {}\n# Print the fruit value', solution: `details = {"fruit": "${v.word}"}\nprint(details["fruit"])`, expected: v.word }),
      (v) => ({ title: 'Update a dictionary', prompt: `Create a dictionary with "score" set to ${v.number}. Update it to ${v.second}, then print the score.`, starter: 'player = {"score": 0}\n# Update and print the score', solution: `player = {"score": ${v.number}}\nplayer["score"] = ${v.second}\nprint(player["score"])`, expected: String(v.second) }),
      (v) => ({ title: 'Total dictionary values', prompt: `Create a dictionary with points ${v.number} and bonus ${v.second}. Print the sum of its values.`, starter: 'points = {}\n# Print the sum of all values', solution: `points = {"points": ${v.number}, "bonus": ${v.second}}\nprint(sum(points.values()))`, expected: String(v.number + v.second) }),
    ],
  },
  {
    topic: 'String Functions',
    subject: 'python',
    levels: [
      (v) => ({ title: 'Change letter case', prompt: `Print "${v.word}" in uppercase using a string method.`, starter: 'word = ""\n# Print the uppercase word', solution: `word = "${v.word}"\nprint(word.upper())`, expected: v.word.toUpperCase() }),
      (v) => ({ title: 'Count a character', prompt: `Print how many times the letter "${v.word[0].toLowerCase()}" appears in "${v.word.toLowerCase()}${v.word[0].toLowerCase()}". Use count().`, starter: 'word = ""\n# Print the character count', solution: `word = "${v.word.toLowerCase()}${v.word[0].toLowerCase()}"\nprint(word.count("${v.word[0].toLowerCase()}"))`, expected: String(v.word.toLowerCase().split(v.word[0].toLowerCase()).length - 1) }),
      (v) => ({ title: 'Check a palindrome', prompt: `Check whether "${v.word.toLowerCase()}${v.word[0].toLowerCase()}" is a palindrome. Print "yes" or "no".`, starter: 'word = ""\n# Compare the word with its reverse', solution: `word = "${v.word.toLowerCase()}${v.word[0].toLowerCase()}"\nif word == word[::-1]:\n    print("yes")\nelse:\n    print("no")`, expected: `${v.word.toLowerCase()}${v.word[0].toLowerCase()}` === `${v.word.toLowerCase()}${v.word[0].toLowerCase()}`.split('').reverse().join('') ? 'yes' : 'no' }),
    ],
  },
  {
    topic: 'Introduction to HTML',
    subject: 'html',
    levels: [
      (v) => ({ title: 'Add a page heading', prompt: `Create an HTML page with one level-one heading that says "${v.word}".`, starter: '<!doctype html>\n<html>\n  <body>\n    <!-- Add your heading -->\n  </body>\n</html>', solution: `<!doctype html>\n<html>\n  <body>\n    <h1>${v.word}</h1>\n  </body>\n</html>` }),
      (v) => ({ title: 'Add a heading and paragraph', prompt: `Create a page with the heading "${v.word}" and a paragraph that says "Welcome, ${v.name}!".`, starter: '<!doctype html>\n<html>\n  <body>\n    <!-- Add a heading and paragraph -->\n  </body>\n</html>', solution: `<!doctype html>\n<html>\n  <body>\n    <h1>${v.word}</h1>\n    <p>Welcome, ${v.name}!</p>\n  </body>\n</html>` }),
      (v) => ({ title: 'Build a complete HTML page', prompt: `Create a valid HTML document titled "${v.word} page", with a heading "${v.word}" and a paragraph introducing ${v.name}.`, starter: '<!doctype html>\n<html lang="en">\n  <head>\n    <title></title>\n  </head>\n  <body>\n    <!-- Add the heading and paragraph -->\n  </body>\n</html>', solution: `<!doctype html>\n<html lang="en">\n  <head>\n    <title>${v.word} page</title>\n  </head>\n  <body>\n    <h1>${v.word}</h1>\n    <p>Welcome, ${v.name}!</p>\n  </body>\n</html>` }),
    ],
  },
  {
    topic: 'Formatting Text in HTML',
    subject: 'html',
    levels: [
      (v) => ({ title: 'Emphasize text', prompt: `Write a paragraph containing "${v.word}" with the word marked as important using the strong element.`, starter: '<p><!-- Add emphasized text --></p>', solution: `<p><strong>${v.word}</strong></p>` }),
      (v) => ({ title: 'Use bold and italic text', prompt: `Write a paragraph with "${v.word}" in bold and "${v.name}" in italic using semantic HTML elements.`, starter: '<p><!-- Add bold and italic text --></p>', solution: `<p><strong>${v.word}</strong> and <em>${v.name}</em></p>` }),
      (v) => ({ title: 'Format a short note', prompt: `Create a heading "Note" and a paragraph with "${v.word}" emphasized using strong and "${v.name}" emphasized using em.`, starter: '<!-- Add a heading and formatted paragraph -->', solution: `<h2>Note</h2>\n<p><strong>${v.word}</strong> and <em>${v.name}</em></p>` }),
    ],
  },
]

const difficultyNames = ['Easy', 'Medium', 'Hard']

export const practiceTopics = [...new Set(questionFamilies.map((family) => family.topic))]

export const practiceQuestions = questionFamilies.flatMap((family) => (
  family.levels.flatMap((createQuestion, levelIndex) => (
    variants.map((variant, variantIndex) => {
      const question = createQuestion(variant)
      return {
        id: `${family.subject}-${levelIndex}-${family.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${variantIndex + 1}`, language: family.subject,
        topic: family.topic,
        difficulty: difficultyNames[levelIndex],
        variant: variantIndex + 1,
        ...question,
      }
    })
  ))
))
