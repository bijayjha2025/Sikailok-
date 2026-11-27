export const languages = [
  { id: 'python', label: 'Python' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'sql', label: 'SQL' },
]

export const difficulties = ['Easy', 'Medium', 'Hard']

export const starterCode = {
  python: 'print("Hello, world!")',
  html: '<!doctype html>\n<html>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>Edit this page and press Run.</p>\n  </body>\n</html>',
  css: 'body {\n  font-family: system-ui, sans-serif;\n  color: #1c2b4a;\n}\nh1 {\n  color: #2367a8;\n}',
  sql: 'CREATE TABLE students (name TEXT, score INTEGER);\nINSERT INTO students VALUES (\'Asha\', 92), (\'Milan\', 85);\nSELECT name, score FROM students;',
}

export const isPreviewLanguage = (language) => language === 'html' || language === 'css'