// script.js
// by Preston Hager

let defaultCode = '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n  <div class="blue">\n    <p>You can nest divs inside of divs.</p>\n  </div>\n</div>\n</body>';
let codeAnimation = [
  '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n</div>\n</body>',
  '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n  <div class="blue">\n    <p>You can nest divs inside of divs.</p>\n  </div>\n</div>\n</body>'
]
let autoSaveTime = 3000 // time in miliseconds.
let autoSaveTimeout = setTimeout(executeCode, autoSaveTime);

// create the code animation
let animationLink = document.getElementById("animate");
animationLink.addEventListener("click", function(e) {
  let animation = genCode(codeAnimation);
  function animationTimeout(code) {
    setTimeout(() => {
      let next = code.next();
      if (! next.done) {
        jar.updateCode(next.value);
        executeCode();
        animationTimeout(code);
      }
    }, 1000);
  }
  animationTimeout(animation)
});

// code for the editor
let editorElement = document.querySelector(".editor");
// add the "Cmd+S" or "Ctrl+S" to execute the code.
editorElement.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey ) && e.keyCode === 83) {
    e.preventDefault();
    executeCode();
  }
});

// set up the editor
let jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: "#000",
  backgroundColor: "rgb(232, 232, 232)"
}), {
  tab: '  ',
  indentOn: /<[a-zA-Z =\"\-]+>$/
});
jar.updateCode(defaultCode);
jar.onUpdate(code => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(executeCode, autoSaveTime);
});

let executeButton = document.getElementById("execute-button");
let resetButton = document.getElementById("reset-button");
executeButton.onclick = executeCode;
resetButton.onclick = function (e) {
  jar.updateCode(defaultCode);
  executeCode();
};

executeCode();

// HELPER FUNCTIONS
function executeCode(e) {
  let frame = document.getElementById("explore-show");
  let frameDoc =
    frame.contentWindow ||
    frame.contentDocument.document ||
    frame.contentDocument;
  let body = jar.toString();
  frameDoc.document.write(
    '<html><head><link rel="stylesheet" href="style.css"><style>body{padding:0.5em 1em;margin:0;}</style></head>' +
      body +
      "</html>"
  );
  frameDoc.document.close();
}
function* genCode(code) {
  for (var c of code) {
    yield c;
  }
}
