# Formatting text
HTML provides elements for emphasizing text and marking text with special meaning, such as strong importance, emphasis, inserted or deleted text, and subscripts or superscripts.

## Text formatting elements

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Text formatting</title>
  </head>
  <body>
    <p>Normal text</p>
    <p><strong>Important text</strong></p>
    <p><em>Emphasized text</em></p>
    <p><u>Underlined text</u></p>
    <p><del>Deleted text</del></p>
    <p>H<sub>2</sub>O</p>
    <p>a<sup>2</sup> + b<sup>2</sup></p>
  </body>
</html>
```

## The `<hr>` element

The `<hr>` element represents a thematic break between sections. Use CSS to customize how it looks.

```html
<hr color='grey' size='04' width="100%" align="center">
<!--align can have a value of left, right, or center-->
```

## The `<marquee>` element
```html
<p><marquee delay="20" direction="right">I am scrolling text</marquee></p>
<!--The <marquee> tag is used to create a scrolling text effect--> 
```