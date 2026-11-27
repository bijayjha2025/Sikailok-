import { expand } from './builders.js'

const T = {
  structure: 'Page Structure',
  text: 'Text and Links',
  lists: 'Lists and Tables',
  forms: 'Forms',
}

const html = (topic, difficulty, key, variants, build) =>
  expand({ language: 'html', topic, difficulty, key, variants, build })

const doc = (body, head = '') =>
  `<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8">\n${head}  </head>\n  <body>\n${body}\n  </body>\n</html>`

const blank = (hint) =>
  `<!doctype html>\n<html>\n  <body>\n    <!-- ${hint} -->\n  </body>\n</html>`

export const htmlQuestions = [
  ...html(T.structure, 'Easy', 'heading-paragraph', [
    ['Mount Everest', 'The highest mountain above sea level.'],
    ['Pokhara', 'A lakeside city in Gandaki Province.'],
    ['My School', 'A place where I learn something new every day.'],
  ], ([heading, text]) => ({
    title: 'Heading and paragraph',
    prompt: `Create a page with an <h1> that says "${heading}" and a <p> that says "${text}"`,
    starter: blank('Add your heading and paragraph'),
    solution: doc(`    <h1>${heading}</h1>\n    <p>${text}</p>`),
  })),
  ...html(T.structure, 'Medium', 'head-metadata', [
    ['Trek Diary', 'Notes from my walks in the hills'],
    ['Recipe Corner', 'Simple meals for busy days'],
    ['Code Journal', 'What I learn each day'],
  ], ([name, description]) => ({
    title: 'Title and metadata',
    prompt: `Add a <head> with the page title "${name}", a charset meta tag, and a meta description that says "${description}". In the body, show "${name}" as an <h1>.`,
    starter: '<!doctype html>\n<html>\n  <!-- Add a head section here -->\n  <body>\n  </body>\n</html>',
    solution: doc(`    <h1>${name}</h1>`, `    <title>${name}</title>\n    <meta name="description" content="${description}">\n`),
  })),
  ...html(T.structure, 'Hard', 'semantic-layout', [
    ['Trek Diary', ['Home', 'Routes', 'About']],
    ['Recipe Corner', ['Breakfast', 'Dinner', 'Desserts']],
    ['Code Journal', ['Python', 'Web', 'Databases']],
  ], ([name, items]) => ({
    title: 'Semantic page layout',
    prompt: `Lay out a page for "${name}" using semantic elements: a <header> with an <h1> and a <nav> containing links (${items.join(', ')}); a <main> with an <article> that has an <h2> and a paragraph; and a <footer> with a copyright line.`,
    starter: blank('header, nav, main, article, footer'),
    solution: doc(
      `    <header>\n      <h1>${name}</h1>\n      <nav>\n${items.map((i) => `        <a href="#${i.toLowerCase()}">${i}</a>`).join('\n')}\n      </nav>\n    </header>\n    <main>\n      <article>\n        <h2>Latest entry</h2>\n        <p>Write something short here.</p>\n      </article>\n    </main>\n    <footer>\n      <p>&copy; 2026 ${name}</p>\n    </footer>`,
    ),
  })),

  ...html(T.text, 'Easy', 'link', [
    ['Wikipedia', 'https://www.wikipedia.org'],
    ['MDN Web Docs', 'https://developer.mozilla.org'],
    ['Python.org', 'https://www.python.org'],
  ], ([text, url]) => ({
    title: 'Add a link',
    prompt: `Create a link with the text "${text}" that points to ${url}`,
    starter: blank('Add your link'),
    solution: doc(`    <a href="${url}">${text}</a>`),
  })),
  ...html(T.text, 'Easy', 'emphasis', [
    ['Read the question carefully before you answer.', 'carefully', 'answer'],
    ['Practice a little every single day.', 'little', 'day'],
    ['Save your work often and test it early.', 'often', 'early'],
  ], ([text, bold, italic]) => ({
    title: 'Bold and italic words',
    prompt: `Show the sentence "${text}" in a paragraph, with "${bold}" in bold using <strong> and "${italic}" in italics using <em>.`,
    starter: blank('Add a paragraph'),
    solution: doc(`    <p>${text.replace(bold, `<strong>${bold}</strong>`).replace(italic, `<em>${italic}</em>`)}</p>`),
  })),
  ...html(T.text, 'Medium', 'new-tab-link', [
    ['Wikipedia', 'https://www.wikipedia.org'],
    ['MDN Web Docs', 'https://developer.mozilla.org'],
    ['Python.org', 'https://www.python.org'],
  ], ([text, url]) => ({
    title: 'Link that opens in a new tab',
    prompt: `Create a link "${text}" to ${url} that opens in a new tab. Add rel="noopener noreferrer" so the new page cannot access yours.`,
    starter: blank('Add your link'),
    solution: doc(`    <a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`),
  })),
  ...html(T.text, 'Medium', 'figure', [
    ['mountain.jpg', 'A snow-capped mountain', 'The view from base camp'],
    ['lake.jpg', 'A calm lake at sunrise', 'Phewa Lake in the morning'],
    ['market.jpg', 'A busy street market', 'Evening market stalls'],
  ], ([src, alt, caption]) => ({
    title: 'Image with a caption',
    prompt: `Add a <figure> that contains an <img> (src "${src}", alt "${alt}") and a <figcaption> that says "${caption}".`,
    starter: blank('Add a figure'),
    solution: doc(`    <figure>\n      <img src="${src}" alt="${alt}">\n      <figcaption>${caption}</figcaption>\n    </figure>`),
  })),

  ...html(T.lists, 'Easy', 'unordered', [
    ['Fruits', ['Apple', 'Banana', 'Mango']],
    ['Subjects', ['Maths', 'Science', 'English', 'Computer']],
    ['Weekend plans', ['Hike', 'Read', 'Cook']],
  ], ([heading, items]) => ({
    title: 'Bulleted list',
    prompt: `Add an <h2> that says "${heading}" followed by a bulleted list with these items: ${items.join(', ')}.`,
    starter: blank('Add a heading and a list'),
    solution: doc(`    <h2>${heading}</h2>\n    <ul>\n${items.map((i) => `      <li>${i}</li>`).join('\n')}\n    </ul>`),
  })),
  ...html(T.lists, 'Easy', 'ordered', [
    ['How to make tea', ['Boil water', 'Add tea leaves', 'Pour into a cup', 'Enjoy']],
    ['Start a Python file', ['Open the editor', 'Create a new file', 'Type your code', 'Press Run']],
    ['Wash your hands', ['Wet your hands', 'Add soap', 'Scrub for 20 seconds', 'Rinse and dry']],
  ], ([heading, steps]) => ({
    title: 'Numbered steps',
    prompt: `Add an <h2> that says "${heading}" followed by a numbered list with these steps, in order: ${steps.join(', ')}.`,
    starter: blank('Add a heading and a numbered list'),
    solution: doc(`    <h2>${heading}</h2>\n    <ol>\n${steps.map((s) => `      <li>${s}</li>`).join('\n')}\n    </ol>`),
  })),
  ...html(T.lists, 'Medium', 'marks-table', [
    [['Asha', 92], ['Milan', 85], ['Sita', 78]],
    [['Ravi', 66], ['Nima', 88]],
    [['Pema', 95], ['Tashi', 71], ['Dawa', 60], ['Karma', 74]],
  ], (rows) => ({
    title: 'Marks table',
    prompt: `Build a table with header cells "Name" and "Score", then one row for each student: ${rows.map(([n, s]) => `${n} (${s})`).join(', ')}.`,
    starter: blank('Add a table'),
    solution: doc(`    <table border="1">\n      <tr>\n        <th>Name</th>\n        <th>Score</th>\n      </tr>\n${rows.map(([n, s]) => `      <tr>\n        <td>${n}</td>\n        <td>${s}</td>\n      </tr>`).join('\n')}\n    </table>`),
  })),
  ...html(T.lists, 'Medium', 'nested-list', [
    ['Web technologies', [['HTML', ['Elements', 'Attributes']], ['CSS', ['Selectors', 'Layout']]]],
    ['Programming', [['Python', ['Loops', 'Functions']], ['SQL', ['SELECT', 'JOIN']]]],
  ], ([heading, groups]) => ({
    title: 'Nested list',
    prompt: `Under an <h2> "${heading}", build a bulleted list with these main items: ${groups.map(([g]) => g).join(', ')}. Inside each main item, nest a smaller list: ${groups.map(([g, subs]) => `${g} → ${subs.join(', ')}`).join('; ')}.`,
    starter: blank('Add a list inside a list'),
    solution: doc(`    <h2>${heading}</h2>\n    <ul>\n${groups.map(([g, subs]) => `      <li>${g}\n        <ul>\n${subs.map((s) => `          <li>${s}</li>`).join('\n')}\n        </ul>\n      </li>`).join('\n')}\n    </ul>`),
  })),
  ...html(T.lists, 'Hard', 'table-structure', [
    ['Stationery order', [['Notebook', 4, 180], ['Pen', 10, 100], ['Ruler', 2, 40]]],
    ['Canteen bill', [['Momo', 2, 240], ['Tea', 3, 90], ['Samosa', 4, 80]]],
  ], ([caption, rows]) => ({
    title: 'Full table structure',
    prompt: `Build a table with a <caption> "${caption}". Use <thead> for the headings (Item, Qty, Total), <tbody> for the rows (${rows.map(([i, q, t]) => `${i} ${q} ${t}`).join('; ')}) and a <tfoot> row where the first cell says "Total" and spans two columns (colspan), followed by the sum of the totals.`,
    starter: blank('caption, thead, tbody, tfoot'),
    solution: doc(`    <table border="1">\n      <caption>${caption}</caption>\n      <thead>\n        <tr><th>Item</th><th>Qty</th><th>Total</th></tr>\n      </thead>\n      <tbody>\n${rows.map(([i, q, t]) => `        <tr><td>${i}</td><td>${q}</td><td>${t}</td></tr>`).join('\n')}\n      </tbody>\n      <tfoot>\n        <tr><td colspan="2">Total</td><td>${rows.reduce((s, r) => s + r[2], 0)}</td></tr>\n      </tfoot>\n    </table>`),
  })),

  ...html(T.forms, 'Easy', 'name-email', [
    ['Contact us', 'Send message'],
    ['Newsletter signup', 'Subscribe'],
    ['Feedback', 'Submit feedback'],
  ], ([heading, button]) => ({
    title: 'Name and email form',
    prompt: `Create a form under an <h2> "${heading}" with a Name text field and an Email field. Connect each <label> to its input using for and id. Add a submit button that says "${button}".`,
    starter: blank('Add your form'),
    solution: doc(`    <h2>${heading}</h2>\n    <form>\n      <label for="name">Name</label>\n      <input type="text" id="name" name="name">\n\n      <label for="email">Email</label>\n      <input type="email" id="email" name="email">\n\n      <button type="submit">${button}</button>\n    </form>`),
  })),
  ...html(T.forms, 'Medium', 'select-radio', [
    ['favourite language', ['Python', 'HTML', 'CSS', 'SQL']],
    ['study time', ['Morning', 'Afternoon', 'Evening', 'Night']],
    ['favourite subject', ['Maths', 'Science', 'English', 'Computer']],
  ], ([label, options]) => ({
    title: 'Dropdown and radio buttons',
    prompt: `Create a form with a dropdown (<select>) labelled "Choose your ${label}" with these options: ${options.join(', ')}. Below it, add a radio button group named "level" with the choices Beginner, Intermediate and Advanced.`,
    starter: blank('Add a select and a radio group'),
    solution: doc(`    <form>\n      <label for="choice">Choose your ${label}</label>\n      <select id="choice" name="choice">\n${options.map((o) => `        <option value="${o.toLowerCase()}">${o}</option>`).join('\n')}\n      </select>\n\n      <p>Your level</p>\n      <label><input type="radio" name="level" value="beginner"> Beginner</label>\n      <label><input type="radio" name="level" value="intermediate"> Intermediate</label>\n      <label><input type="radio" name="level" value="advanced"> Advanced</label>\n    </form>`),
  })),
  ...html(T.forms, 'Hard', 'validation', [
    ['Course sign-up', 'Enrol'],
    ['Event registration', 'Register'],
  ], ([heading, button]) => ({
    title: 'Form with validation',
    prompt: `Build a "${heading}" form using built-in validation: a required full name (at least 3 characters), a required email, an age number between 10 and 100, a required password of at least 8 characters, and a required checkbox "I agree to the rules". End with a button that says "${button}".`,
    starter: blank('Add inputs with validation attributes'),
    solution: doc(`    <h2>${heading}</h2>\n    <form action="#" method="post">\n      <label for="fullname">Full name</label>\n      <input type="text" id="fullname" name="fullname" required minlength="3">\n\n      <label for="email">Email</label>\n      <input type="email" id="email" name="email" required>\n\n      <label for="age">Age</label>\n      <input type="number" id="age" name="age" min="10" max="100">\n\n      <label for="password">Password</label>\n      <input type="password" id="password" name="password" required minlength="8">\n\n      <label><input type="checkbox" name="agree" required> I agree to the rules</label>\n\n      <button type="submit">${button}</button>\n    </form>`),
  })),
]