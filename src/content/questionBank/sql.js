import { expand, table } from './builders.js'

const T = {
  basics: 'SELECT Basics',
  filter: 'Filtering and Sorting',
  aggregate: 'Aggregates and Grouping',
  update: 'Changing Data',
  joins: 'Joins',
}

const sql = (topic, difficulty, key, variants, build) =>
  expand({ language: 'sql', topic, difficulty, key, variants, build })

const datasets = [
  {
    table: 'students', cols: ['name', 'grade', 'score'], types: ['TEXT', 'INTEGER', 'INTEGER'],
    text: 'name', num: 'score', cat: 'grade', threshold: 80, havingMin: 150,
    who: 'Ravi',
    rows: [['Asha', 8, 92], ['Milan', 8, 85], ['Sita', 9, 78], ['Ravi', 9, 66], ['Nima', 10, 88], ['Pema', 10, 95]],
  },
  {
    table: 'products', cols: ['name', 'category', 'price', 'stock'], types: ['TEXT', 'TEXT', 'INTEGER', 'INTEGER'],
    text: 'name', num: 'price', cat: 'category', threshold: 100, havingMin: 500,
    who: 'Pen',
    rows: [['Pen', 'Stationery', 10, 100], ['Notebook', 'Stationery', 45, 60], ['Bag', 'Accessories', 650, 15], ['Bottle', 'Accessories', 250, 40], ['Ruler', 'Stationery', 20, 35], ['Wallet', 'Accessories', 400, 12]],
  },
  {
    table: 'books', cols: ['title', 'genre', 'pages', 'year'], types: ['TEXT', 'TEXT', 'INTEGER', 'INTEGER'],
    text: 'title', num: 'pages', cat: 'genre', threshold: 400, havingMin: 600,
    who: 'Emma',
    rows: [['Dune', 'Fiction', 412, 1965], ['Sapiens', 'History', 443, 2011], ['Wild', 'Memoir', 315, 2012], ['Cosmos', 'Science', 396, 1980], ['Emma', 'Fiction', 474, 1815], ['Origin', 'Science', 530, 2017]],
  },
]

const literal = (v) => (typeof v === 'string' ? `'${v}'` : String(v))
const compare = (i) => (a, b) => (a[i] < b[i] ? -1 : a[i] > b[i] ? 1 : 0)
const idx = (d, col) => d.cols.indexOf(col)

const seed = (d) =>
  `CREATE TABLE ${d.table} (${d.cols.map((c, i) => `${c} ${d.types[i]}`).join(', ')});\n` +
  `INSERT INTO ${d.table} VALUES\n${d.rows.map((r) => `  (${r.map(literal).join(', ')})`).join(',\n')};\n\n` +
  '-- Write your query below\n'

const pairs = (d) => d.rows.map((r) => [r[idx(d, d.text)], r[idx(d, d.num)]])

const joinSets = [
  {
    parent: 'teachers', child: 'courses', fk: 'teacher_id', childAlias: 'course', parentAlias: 'teacher', countAlias: 'course_count',
    parentRows: [[1, 'Mr. Rai'], [2, 'Ms. Gurung'], [3, 'Mr. Thapa']],
    childRows: [[1, 'Python Basics', 1], [2, 'Web Design', 2], [3, 'Databases', 3], [4, 'Advanced Python', 1]],
  },
  {
    parent: 'authors', child: 'books', fk: 'author_id', childAlias: 'book', parentAlias: 'author', countAlias: 'book_count',
    parentRows: [[1, 'Orwell'], [2, 'Austen'], [3, 'Tolstoy']],
    childRows: [[1, '1984', 1], [2, 'Emma', 2], [3, 'War and Peace', 3], [4, 'Animal Farm', 1]],
  },
]

const joinSeed = (s) =>
  `CREATE TABLE ${s.parent} (id INTEGER, name TEXT);\nINSERT INTO ${s.parent} VALUES\n${s.parentRows.map((r) => `  (${r.map(literal).join(', ')})`).join(',\n')};\n\n` +
  `CREATE TABLE ${s.child} (id INTEGER, title TEXT, ${s.fk} INTEGER);\nINSERT INTO ${s.child} VALUES\n${s.childRows.map((r) => `  (${r.map(literal).join(', ')})`).join(',\n')};\n\n` +
  '-- Write your query below\n'

const parentName = (s, id) => s.parentRows.find((p) => p[0] === id)[1]

export const sqlQuestions = [
  ...sql(T.basics, 'Easy', 'select-all', datasets, (d) => ({
    title: `Show every row of ${d.table}`,
    prompt: `The ${d.table} table already exists. Write a query that returns every column and every row.`,
    starter: seed(d),
    solution: `SELECT * FROM ${d.table};`,
    expected: table(d.cols, d.rows),
  })),
  ...sql(T.basics, 'Easy', 'select-columns', datasets, (d) => ({
    title: `Pick two columns from ${d.table}`,
    prompt: `Return only the ${d.text} and ${d.num} columns of ${d.table}, in that order.`,
    starter: seed(d),
    solution: `SELECT ${d.text}, ${d.num} FROM ${d.table};`,
    expected: table([d.text, d.num], pairs(d)),
  })),

  ...sql(T.filter, 'Easy', 'order-desc', datasets, (d) => ({
    title: `Sort ${d.table} by ${d.num}`,
    prompt: `Return ${d.text} and ${d.num}, sorted from the highest ${d.num} to the lowest.`,
    starter: seed(d),
    solution: `SELECT ${d.text}, ${d.num} FROM ${d.table}\nORDER BY ${d.num} DESC;`,
    expected: table([d.text, d.num], pairs(d).sort((a, b) => b[1] - a[1])),
  })),
  ...sql(T.filter, 'Medium', 'where', datasets, (d) => ({
    title: `Filter ${d.table} with WHERE`,
    prompt: `Return ${d.text} and ${d.num} for rows where ${d.num} is greater than ${d.threshold}. Sort the result by ${d.text} (A to Z).`,
    starter: seed(d),
    solution: `SELECT ${d.text}, ${d.num} FROM ${d.table}\nWHERE ${d.num} > ${d.threshold}\nORDER BY ${d.text};`,
    expected: table([d.text, d.num], pairs(d).filter((r) => r[1] > d.threshold).sort(compare(0))),
  })),
  ...sql(T.filter, 'Medium', 'limit', datasets, (d) => ({
    title: `Top three by ${d.num}`,
    prompt: `Return ${d.text} and ${d.num} for the three rows with the highest ${d.num}.`,
    starter: seed(d),
    solution: `SELECT ${d.text}, ${d.num} FROM ${d.table}\nORDER BY ${d.num} DESC\nLIMIT 3;`,
    expected: table([d.text, d.num], pairs(d).sort((a, b) => b[1] - a[1]).slice(0, 3)),
  })),

  ...sql(T.aggregate, 'Medium', 'count-sum', datasets, (d) => ({
    title: `Count and total of ${d.table}`,
    prompt: `In one row, return the number of rows (named total_rows) and the sum of ${d.num} (named total_value).`,
    starter: seed(d),
    solution: `SELECT COUNT(*) AS total_rows, SUM(${d.num}) AS total_value\nFROM ${d.table};`,
    expected: table(['total_rows', 'total_value'], [[d.rows.length, pairs(d).reduce((s, r) => s + r[1], 0)]]),
  })),
  ...sql(T.aggregate, 'Medium', 'average', datasets, (d) => ({
    title: `Average ${d.num}`,
    prompt: `Return the average ${d.num} as a single column named average_value.`,
    starter: seed(d),
    solution: `SELECT AVG(${d.num}) AS average_value FROM ${d.table};`,
    expected: table(['average_value'], [[pairs(d).reduce((s, r) => s + r[1], 0) / d.rows.length]]),
  })),
  ...sql(T.aggregate, 'Hard', 'group-by', datasets, (d) => {
    const groups = new Map()
    d.rows.forEach((r) => {
      const key = r[idx(d, d.cat)]
      const g = groups.get(key) || [key, 0, 0]
      g[1] += 1
      g[2] += r[idx(d, d.num)]
      groups.set(key, g)
    })
    return {
      title: `Group ${d.table} by ${d.cat}`,
      prompt: `For each ${d.cat}, return the ${d.cat}, the number of rows (named items) and the sum of ${d.num} (named total). Sort by ${d.cat}.`,
      starter: seed(d),
      solution: `SELECT ${d.cat}, COUNT(*) AS items, SUM(${d.num}) AS total\nFROM ${d.table}\nGROUP BY ${d.cat}\nORDER BY ${d.cat};`,
      expected: table([d.cat, 'items', 'total'], [...groups.values()].sort(compare(0))),
    }
  }),
  ...sql(T.aggregate, 'Hard', 'having', datasets, (d) => {
    const groups = new Map()
    d.rows.forEach((r) => {
      const key = r[idx(d, d.cat)]
      groups.set(key, (groups.get(key) || 0) + r[idx(d, d.num)])
    })
    const rows = [...groups].filter(([, total]) => total > d.havingMin).sort(compare(0))
    return {
      title: `Groups with a large total`,
      prompt: `Group ${d.table} by ${d.cat} and return the ${d.cat} and the total ${d.num} (named total), but only for groups whose total is greater than ${d.havingMin}. Sort by ${d.cat}.`,
      starter: seed(d),
      solution: `SELECT ${d.cat}, SUM(${d.num}) AS total\nFROM ${d.table}\nGROUP BY ${d.cat}\nHAVING SUM(${d.num}) > ${d.havingMin}\nORDER BY ${d.cat};`,
      expected: table([d.cat, 'total'], rows),
    }
  }),
  ...sql(T.aggregate, 'Hard', 'group-max', datasets, (d) => {
    const groups = new Map()
    d.rows.forEach((r) => {
      const key = r[idx(d, d.cat)]
      groups.set(key, Math.max(groups.get(key) ?? -Infinity, r[idx(d, d.num)]))
    })
    return {
      title: `Best ${d.num} in each ${d.cat}`,
      prompt: `For each ${d.cat}, return the ${d.cat} and the highest ${d.num} (named best). Sort by ${d.cat}.`,
      starter: seed(d),
      solution: `SELECT ${d.cat}, MAX(${d.num}) AS best\nFROM ${d.table}\nGROUP BY ${d.cat}\nORDER BY ${d.cat};`,
      expected: table([d.cat, 'best'], [...groups].sort(compare(0))),
    }
  }),

  // ───────────── Changing Data ─────────────
  ...sql(T.update, 'Medium', 'update', datasets, (d) => {
    const current = d.rows.find((r) => r[idx(d, d.text)] === d.who)[idx(d, d.num)]
    return {
      title: 'Update a value',
      prompt: `Increase ${d.num} by 5 for the row where ${d.text} is '${d.who}'. Then select that row's ${d.text} and ${d.num} to check your change.`,
      starter: seed(d),
      solution: `UPDATE ${d.table}\nSET ${d.num} = ${d.num} + 5\nWHERE ${d.text} = '${d.who}';\n\nSELECT ${d.text}, ${d.num} FROM ${d.table}\nWHERE ${d.text} = '${d.who}';`,
      expected: table([d.text, d.num], [[d.who, current + 5]]),
    }
  }),

  // ───────────── Joins ─────────────
  ...sql(T.joins, 'Medium', 'join', joinSets, (s) => ({
    title: `Join ${s.child} to ${s.parent}`,
    prompt: `Each row in ${s.child} points to a row in ${s.parent} through ${s.fk}. Return each ${s.child}.title (named ${s.childAlias}) next to the matching ${s.parent}.name (named ${s.parentAlias}). Sort by title.`,
    starter: joinSeed(s),
    solution: `SELECT ${s.child}.title AS ${s.childAlias}, ${s.parent}.name AS ${s.parentAlias}\nFROM ${s.child}\nJOIN ${s.parent} ON ${s.child}.${s.fk} = ${s.parent}.id\nORDER BY ${s.child}.title;`,
    expected: table([s.childAlias, s.parentAlias], s.childRows.map((r) => [r[1], parentName(s, r[2])]).sort(compare(0))),
  })),
  ...sql(T.joins, 'Hard', 'join-count', joinSets, (s) => {
    const counts = new Map()
    s.childRows.forEach((r) => {
      const name = parentName(s, r[2])
      counts.set(name, (counts.get(name) || 0) + 1)
    })
    return {
      title: `Count ${s.child} per ${s.parent.slice(0, -1)}`,
      prompt: `Join ${s.child} to ${s.parent} and return each ${s.parent}.name (named ${s.parentAlias}) with how many ${s.child} they have (named ${s.countAlias}). Sort by name.`,
      starter: joinSeed(s),
      solution: `SELECT ${s.parent}.name AS ${s.parentAlias}, COUNT(*) AS ${s.countAlias}\nFROM ${s.child}\nJOIN ${s.parent} ON ${s.child}.${s.fk} = ${s.parent}.id\nGROUP BY ${s.parent}.name\nORDER BY ${s.parent}.name;`,
      expected: table([s.parentAlias, s.countAlias], [...counts].sort(compare(0))),
    }
  }),
]