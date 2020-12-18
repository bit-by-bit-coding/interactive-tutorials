# interactive-tutorials

This repository stores all of the interactive tutorials for Form and Function.
They are used in class and also outside of class, teaching HTML, CSS, and JavaScript in an intuitive way.

-----

### How to Run Repository Locally

1. Clone the repository
1. Install Live Sass Compiler and Live Server on Visual Studio Code
1. Hit Watch Sass in the bottom right
1. Click go live in the bottom of Visual Studio Code

-----

### Creating a New Interactive Tutorial

1. Click new folder at the root of the project
1. Give the folder a descriptive name
1. Inside the folder add the following files:
    * `index.html`
    * `script.js`
    * `style.scss`
1. Add `@import "../assets/common.scss";` to the `style.scss` file.
  This allows you to use the variables and mixins from the shared `common.scss` file.

------

### What's included in the Common Files?

The `common.scss` file includes