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

##### The `common.scss` file

This file includes the Bit by Bit theme colors, certain element styles, and helpful classes.
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

##### Adding an Editor

CodeJar is a light weight Javascript code editor.
The first step is to add a `<div>` to the main HTML page.
The div has the id `editor` and a class designating the language the editor uses.
The following code adds an HTML editor to the page.

```html
<div id="editor-section">
  <div id="editor" class="lang-html"></div>
</div>
```

Note that a wrapper must be used otherwise there is a scrolling bug causing the page rather than the editor to scroll on the x-axis.
Next, create the Jar inside the Javascript file.
There are a few options when creating a new Jar as well.
The recommended options are `tab` and `indentOn`.
The option `tab` is what the tab key types and what character(s) count as a tab.
The default is `\t`, the recommended setting is `"  "` (two spaces).
`indentOn` is when the editor will insert a tab after a new line.
By default, this is a `{`, `[` or `(` character.
The recommended for HTML is `/<[a-zA-Z =\"\-]+>$/`.
Any other language can ignore this and keep the default.

There is still one more tool however, which is the `withLineNumbers` function.
Wrap the `Prism.highlightElement` in this function to generate line numbers on the side.
With this comes two more options: `color` and `backgroundColor`.

After all this, this is the code to create a new HTML Jar.

```js
let jar = CodeJar(document.getElementById("editor"), withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  ',
  indentOn: /<[a-zA-Z =\"\-]+>$/
});
```

A jar has multiple methods as well.
The main ones are `updateCode` and `onUpdate`.
`updateCode` takes one argument, a string, and will update the current code to that string.
Second, `onUpdate` is called whenever the code changes, either from user input or from the `updateCode` method.
To get the code from the jar call the `toString` method.
For a good example of use of CodeJar, check out the `div-demo/script.js` file.

##### Option Input with Dropdowns

An input with a dropdown attatched to it, which automatically filters the options.
This helps greatly enhance the User Interface.
The file `assets/options.js` must first by included.
Then, call the `createOption` function.

The `createOption` function takes three arguments, one optional.
First, the element.
This is the DOM element that will get modified.
Create an `<input>` element with an ID and the class `option`.
Then pass this element in as the first argument of the `createOption` function.
The second argument is a mapping of the options.
The format is an object with the readable text as the key and the value as the value.
An example might be something like this:

```json
{
  "Small": "small",
  "Medium": "medium",
  "Large": "large"
}
```

Finally, the callback function.
This funciton is called whenever the option gets changed.
This is the only optional function.
Note that the argument passed into this function is the registered event with an additional key.
Access the options through this function by the `event.options` object.

Check out the `object-demo` for a good example of this option module.
A completed custom option might look something like this:

```js
let sizeOptionElement = document.getElementById("size-option");
createOption(sizeOptionElement, {
  "Small": "small",
  "Medium": "medium",
  "Large": "large"
}, optionHandler);
```

##### How to Include a Common

So many common files to choose from, but how does one include this in their project?
For JavaScript files, use the `<script>` tag.
This usually looks like `<script src="../assets/{name}.js"></script>`.
Where `{name}` is then replaced by whatever filename is to be included.
For CSS files it's similar with a `<link>` tag.
The keything to remember is the use of the double dots (`..`) at the start of the file path.
This included would therefore look something like `<link href="../assets/{name}.css" rel="stylesheet">`.
Where `{name}` is again replaced with whichever file is to be included.
