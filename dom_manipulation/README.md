 ## DOM Manipulation

This repository contains HTML and JavaScript files that demonstrate how to manipulate the DOM.

### 0-select-id.html

The `0-select-id.html` file demonstrates how to select an element by its ID and modify its content.

1. First, we select the element by its ID using the `getElementById()` method.
2. Then, we modify the content of the element using the `textContent` property.

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>

  <script>
    // Select the element by its id and store it in a variable
    const myParagraphElement = document.getElementById("myParagraph");

    // Modify the content of the <p> element
    myParagraphElement.textContent = "I successfully updated this paragraph with JavaScript";
  </script>
</body>
</html>
```

### 1-select-class.html

The `1-select-class.html` file demonstrates how to select all elements with a certain class and modify their content.

1. First, we select all elements with the class "highlight" using the `querySelectorAll()` method.
2. Then, we loop through the selected elements and modify their content using the `textContent` property.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Use document.querySelectorAll to select all elements with class "highlight"
      const highlightedElements = document.querySelectorAll(".highlight");

      // Loop through the selected elements and make their content bold
      highlightedElements.forEach(function (element) {
        element.style.fontWeight = "bold";
      });
    });
  </script>
</body>
</html>
```

### 2-select-image.html

The `2-select-image.html`
