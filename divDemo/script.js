// script.js
// by Preston Hager

const defaultCode = '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n  <div class="blue">\n    <p>You can nest divs inside of divs.</p>\n  </div>\n</div>\n</body>';
const codeAnimation = [
  '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n</div>\n</body>',
  '<body>\n<div class="orange">\n  <h1>A Div Demo</h1>\n  <div class="blue">\n    <p>You can nest divs inside of divs.</p>\n  </div>\n</div>\n</body>'
]
const autoSaveTime = 3000 // time in miliseconds.
var autoSaveTimeout = setTimeout(executeCode, autoSaveTime);

// create the code animation
const animationLink = document.getElementById("animate");
animationLink.addEventListener("click", function(e) {
  var animation = genCode(codeAnimation);
  function animationTimeout(code) {
    setTimeout(() => {
      var next = code.next();
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
const editorElement = document.getElementById("editor");
// add the "Cmd+S" or "Ctrl+S" to execute the code.
editorElement.addEventListener("keydown", function(e) {
  if ((e.ctrlKey || e.metaKey ) && e.keyCode === 83) {
    e.preventDefault();
    executeCode();
  }
});

// set up the editor
var jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: "#fff" // for some reason the colors get inverted so we put in white to get black text.
}), {
  tab: '  ',
  indentOn: /<[a-zA-Z =\"\-]+>$/
});
jar.updateCode(defaultCode);
jar.onUpdate(code => {
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(executeCode, autoSaveTime);
});

var executeButton = document.getElementById("execute-button");
var resetButton = document.getElementById("reset-button");
executeButton.onclick = executeCode;
resetButton.onclick = function (e) {
  jar.updateCode(defaultCode);
  executeCode();
};

executeCode();

// HELPER FUNCTIONS
function executeCode(e) {
  var frame = document.getElementById("explore-show");
  var frameDoc =
    frame.contentWindow ||
    frame.contentDocument.document ||
    frame.contentDocument;
  var body = jar.toString();
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
