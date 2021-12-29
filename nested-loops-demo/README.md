# interactive-tutorials Template Files

This folder is made to show what the start of an interactive tutorial might look like.
Remember, however, that a lot of creating a tutorial is creative freedom.
Thus, don't take these as hard fast rules but rather guidelines.
We want to show a uniform look in all the tutorials and so that's why this template exists.
With this said, this document will walk you through how to create your own interactive tutorial.

### Jumping In

First, we need to get the back-bone of the tutorial page.
There is an `index.html` file inside the `template` directory, this is an example of a minimal demo.
In fact, this demo isn't even functional.
With no editor, input, or real result, you'll have to add all those yourself.
To do this we need a `script.js` and some understanding of how each of the common assets work.

Let's start!
Copy the `template` folder to a new folder in the same root `interactive-demos` directory.
For our purposes, we'll call this the `test-demo`.
Then open the `index.html` file.
Inside you'll find HTML comments with the prefix `TODO:`, these point to places that need replaced.
For example, the header below the `<!-- TODO: Change the name of the demo here -->` comment should be replaced with the name of your demo.
Inside the `"content"` div there is already a few sections.
Open the page up to see what this layout produces and read the contents of each section.

### The First Common

There's already styling on the page, but how exactly does it work?
There's a `style.css` file, but this isn't our css file.
Another file, `style.scss`, is what we use to modify the styling on the page.
If you don't already know SASS, quickly read up on it [here][0].
Then, install it using the instructions [here][1].
(The best method is just using `npm install -g sass`.)

Notice the top of the `style.scss` file, `@import "../assets/common.scss";`.
This takes the common SASS file and using its styling and then overwrites them with whatever your styles are.
The `..` is there because the assets directory is one level up from where the demos are.
If you use any other assets such as CodeJar, line numbers, or the options files, don't forget this `..` before the path.

### Proper Local Development

So far, we've been viewing the file as the `index.html` file, and sometimes this is fine.
However, for the best results, we should use a local webserver.
To do this we will use `serve` on npm.
Install it using `npm install -g serve`.
Then run it using `serve` inside the `interactive-demos` directory.
It's recommended to do this in a new terminal window.
It should then start hosting a static webserver at `localhost:5000`.
When making changes to any files be sure to also reload your web view.
To stop it, press `Ctrl + C`.

### Code Editor

The code editor that the demos use is called CodeJar.
First, we must add the assets to the html file.
Add these three script tags to the bottom of the body in the `index.html` file.

```html
<script src="../assets/codejar.js"></script>
<script src="../assets/linenumbers.js"></script>
<script src="../assets/prism.js"></script>
```

The first asset, CodeJar, is the actual code editor.
We'll add the editor in a moment.
Next, `linenumbers.js` is an extension to the CodeJar library.
Finally, Prism is a code highlighting library.
We also need to add a CSS file to the head for this one to work.
The link tag should be as follows:

```html
<link rel="stylesheet" href="../assets/prism.css">
```

Take note that there is a `../assets/` preceeding each filename.
This is very important for the way the file URL's work.

Let's add an editor to the HTML page now.
To whichever section you want to make the editor section, add the class `editor-section`.
Then place another div inside of this section with the class `editor`.
Best practice is also to give the editor div an ID so that it identifiable from the script.
For the code highlighting to work, also add a language class to the editor.
This should be something like `"lang-html"` or `"lang-js"`.
The final result should look something like this:

```html
<div class="editor-section section">
  <div class="editor lang-html" id="editor"></div>
</div>
```

We now add this editor as a CodeJar in the script.
First, create a `script.js` file and add it to the end of the body, after the other three script tags.
In this file, we'll create a CodeJar and test the methods of manipulating it.
First, get the div element with the class `"editor"`, in this case it has an id of `"editor"` as well.
Then pass this into the `Codejar` class constructor.
For the basic highlighting use `Prism.highlightElement`; for line numbers wrap this in the `withLineNumbers` function.
The last argument is for the options of the editor.
A final Codejar with line numbers and prism highlighting would look something like this.

```js
let editorElement = document.getElementById("editor");
let jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  ',
  indentOn: /[\[({]$/
});
```

The last options are the tab size/character, and when to auto-indent.
For JavaScript this can be kept to default, however, for HTML it should be changed to something like `/<[a-zA-Z =\"\-]+>$/`.

There are three methods that are used on this code jar: `updateCode`, `toString`, and `onUpdate`.
First, `updateCode` takes in a string and sets the code in the editor.
The method `toString` returns a string containing the code in the editor.
Finally, `onUpdate` takes a function as the only parameter, which is called any time the code in the editor changes.

Examples of these functions being used include: an execute button that calls `toString` and passes it into the source of an iframe, auto saving 3 seconds after the last code update, and creating an animated code/result display.
All three of these examples are in the `div-demo/script.js` file.


[0]: https://sass-lang.com/guide
[1]: https://sass-lang.com/install
