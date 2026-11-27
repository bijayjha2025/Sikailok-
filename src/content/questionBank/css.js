import { expand } from './builders.js'

const T = {
  colours: 'Colours and Fonts',
  box: 'Box Model',
  flex: 'Flexbox',
  interaction: 'Hover and Transitions',
  responsive: 'Responsive Design',
}

const css = (topic, difficulty, key, variants, build) =>
  expand({ language: 'css', topic, difficulty, key, variants, build })

export const cssQuestions = [
  ...css(T.colours, 'Easy', 'heading-colour', [
    ['orange', '#d9480f'],
    ['green', '#2f9e44'],
    ['purple', '#7048e8'],
  ], ([name, hex]) => ({
    title: `Make the heading ${name}`,
    prompt: `Change the colour of the <h1> to ${name}, using the hex colour ${hex}.`,
    starter: '/* Style the heading */\nh1 {\n  \n}\n',
    solution: `h1 {\n  color: ${hex};\n}`,
  })),
  ...css(T.colours, 'Easy', 'page-colours', [
    ['#fff3c4', '#1c2b4a'],
    ['#e7f5ff', '#0b3d62'],
    ['#ebfbee', '#1b4d2b'],
  ], ([bg, text]) => ({
    title: 'Page background and text',
    prompt: `Give the page a background colour of ${bg} and set the default text colour to ${text}.`,
    starter: '/* Style the whole page */\nbody {\n  \n}\n',
    solution: `body {\n  background: ${bg};\n  color: ${text};\n}`,
  })),
  ...css(T.colours, 'Easy', 'paragraph-text', [
    ['18px', '1.6'],
    ['20px', '1.8'],
    ['16px', '1.5'],
  ], ([size, leading]) => ({
    title: 'Readable paragraph',
    prompt: `Set paragraphs to a font size of ${size} and a line-height of ${leading}, using the Georgia font with a serif fallback.`,
    starter: '/* Style the paragraph */\np {\n  \n}\n',
    solution: `p {\n  font-family: Georgia, serif;\n  font-size: ${size};\n  line-height: ${leading};\n}`,
  })),
  ...css(T.colours, 'Medium', 'text-style', [
    ['uppercase', '0.08em'],
    ['capitalize', '0.04em'],
    ['lowercase', '2px'],
  ], ([transform, spacing]) => ({
    title: 'Style the heading text',
    prompt: `Make the <h1> text ${transform}, with ${spacing} letter spacing and a bold font weight (700). Give paragraphs a line-height of 1.8.`,
    starter: '/* Style the text */\n',
    solution: `h1 {\n  text-transform: ${transform};\n  letter-spacing: ${spacing};\n  font-weight: 700;\n}\n\np {\n  line-height: 1.8;\n}`,
  })),
  ...css(T.colours, 'Hard', 'gradient-heading', [
    ['#d9480f', '#f59f00'],
    ['#2367a8', '#7048e8'],
    ['#2f9e44', '#1098ad'],
  ], ([from, to]) => ({
    title: 'Gradient heading text',
    prompt: `Fill the <h1> text with a left-to-right gradient from ${from} to ${to}. Hint: use a background gradient, background-clip: text and a transparent text colour.`,
    starter: '/* Gradient text */\nh1 {\n  \n}\n',
    solution: `h1 {\n  background: linear-gradient(90deg, ${from}, ${to});\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}`,
  })),

  ...css(T.box, 'Easy', 'button-padding', [
    ['12px 24px', '8px'],
    ['16px 32px', '999px'],
    ['10px 20px', '4px'],
  ], ([padding, radius]) => ({
    title: 'Comfortable button',
    prompt: `Give the button ${padding} of padding and a border radius of ${radius}.`,
    starter: '/* Style the button */\nbutton {\n  \n}\n',
    solution: `button {\n  padding: ${padding};\n  border-radius: ${radius};\n}`,
  })),
  ...css(T.box, 'Medium', 'card', [
    ['#1c2b4a', '12px'],
    ['#2367a8', '16px'],
    ['#c92a2a', '8px'],
  ], ([colour, radius]) => ({
    title: 'Turn <main> into a card',
    prompt: `Style <main> as a card: a 3px solid ${colour} border, ${radius} rounded corners, 24px of padding inside and 24px of margin outside.`,
    starter: '/* Style the card */\nmain {\n  \n}\n',
    solution: `main {\n  border: 3px solid ${colour};\n  border-radius: ${radius};\n  padding: 24px;\n  margin: 24px;\n}`,
  })),
  ...css(T.box, 'Hard', 'centred-column', ['520px', '640px', '480px'], (width) => ({
    title: 'Centred column',
    prompt: `Make <main> at most ${width} wide, centred horizontally on the page (auto side margins), with 24px of padding. Use box-sizing: border-box so the padding does not widen it.`,
    starter: '/* Centre the content column */\nmain {\n  \n}\n',
    solution: `main {\n  box-sizing: border-box;\n  max-width: ${width};\n  margin: 0 auto;\n  padding: 24px;\n}`,
  })),

  ...css(T.flex, 'Medium', 'flex-column', [
    ['16px', 'center'],
    ['24px', 'flex-start'],
    ['8px', 'center'],
  ], ([gap, align]) => ({
    title: 'Stack items with flexbox',
    prompt: `Make <main> a flex container that stacks its children in a column, with a ${gap} gap and align-items set to ${align}.`,
    starter: '/* Flex column */\nmain {\n  \n}\n',
    solution: `main {\n  display: flex;\n  flex-direction: column;\n  gap: ${gap};\n  align-items: ${align};\n}`,
  })),
  ...css(T.flex, 'Hard', 'centre-everything', [
    ['100vh', '#f1f3f5'],
    ['90vh', '#fff3c4'],
    ['100vh', '#e7f5ff'],
  ], ([height, bg]) => ({
    title: 'Centre the page content',
    prompt: `Make <body> a flex container with a minimum height of ${height} that centres <main> both horizontally and vertically. Give the page a ${bg} background and remove the default body margin.`,
    starter: '/* Centre <main> inside the page */\nbody {\n  \n}\n',
    solution: `body {\n  margin: 0;\n  min-height: ${height};\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ${bg};\n}`,
  })),

  ...css(T.interaction, 'Medium', 'button-hover', [
    ['#2367a8', '#1c4f82'],
    ['#2f9e44', '#237032'],
    ['#c92a2a', '#962020'],
  ], ([base, hover]) => ({
    title: 'Button hover colour',
    prompt: `Style the button with a ${base} background, white text, no border and a pointer cursor. When hovered, change its background to ${hover}.`,
    starter: '/* Button and hover state */\nbutton {\n  \n}\n',
    solution: `button {\n  background: ${base};\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background: ${hover};\n}`,
  })),
  ...css(T.interaction, 'Hard', 'transition-lift', [
    ['0.2s', '-3px'],
    ['0.3s', '-5px'],
    ['150ms', '-2px'],
  ], ([time, lift]) => ({
    title: 'Button lift animation',
    prompt: `Make the button smoothly move up by ${lift.replace('-', '')} when hovered. Use a transition on transform lasting ${time}, and translateY on hover.`,
    starter: '/* Smooth hover lift */\nbutton {\n  \n}\n',
    solution: `button {\n  padding: 10px 20px;\n  transition: transform ${time} ease;\n}\n\nbutton:hover {\n  transform: translateY(${lift});\n}`,
  })),

  ...css(T.responsive, 'Hard', 'media-query', [
    ['600px', '#fff3c4'],
    ['700px', '#e7f5ff'],
    ['480px', '#ebfbee'],
  ], ([width, bg]) => ({
    title: 'Change style on small screens',
    prompt: `Set the <h1> to 2.5rem. Then add a media query so that on screens up to ${width} wide, the <h1> shrinks to 1.5rem and the page background becomes ${bg}.`,
    starter: '/* Base style, then a media query */\nh1 {\n  \n}\n',
    solution: `h1 {\n  font-size: 2.5rem;\n}\n\n@media (max-width: ${width}) {\n  h1 {\n    font-size: 1.5rem;\n  }\n  body {\n    background: ${bg};\n  }\n}`,
  })),
]