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

The `common.scss` file includes the Bit by Bit theme colors, certain element styles, and helpful classes.
The theme colors are defined as follows:

| Variable Name         | Color   | Where to use it                                                                             |
|-----------------------|---------|---------------------------------------------------------------------------------------------|
| background-color      | #ffffff | A general light background color.                                                           |
| background-color-dark | #1bb1de | A darker background color, used to create contrast with elements with the light background. |
| primary-color         | #38Bfe7 | This should be used to contrast items against the default text color.                       |
| accent-color          | #ff8900 | Used to accent the primary color, this is only used on about 5-10% of the page.             |
| text-color            | #000000 | Text color used against a light background.                                                 |
| text-color-dark       | #ffffff | Text color used against a dark background.                                                  |

To use these variables in your SASS files, use the `$variable-name` in place of a color value.
Even though the color values are given, use the variables instead, this allows for more compatibility.

In addition to these variables, there are a few classes you can assign to your HTML elements to keep a consistent page style.
First, if you wish to include a header, this should be done with the `header` id.
If you do include a header, wrap the rest of the page content in a div with the class `content`.
This will create the appropriate margins and padding.

The `section` class creates a page section with a blue themed border.
If you wish to put two sections side by side, wrap them in the `flex-box` class.
Then add the `flex-col` to the same `<div>` with the class `section`.
If you don't want the element to flex, for example it's an image, use the `no-flex-col` class.

The `editor`, `editor-section`, and `button-overlay` ids are used when creating a CodeJar editor.
See the **Adding an Editor** section for more on this.
The `explore-show` id is used for an iframe that shows the code inside of the editor.