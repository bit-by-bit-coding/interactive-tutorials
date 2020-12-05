// script.js
// by Preston Hager

const defaultCode = '<body>\n<div class="section-orange">\n  Hello there\n  <div class="nested">\n    Nested Div.\n  </div>\n</div>\n</body>';
const autoSaveTime = 1000 // time in miliseconds.

const editorElement = document.querySelector("#editor");
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
  tab: '  '.repeat(2),
  indentOn: /<[a-zA-Z =\"\-]+>$/
});
jar.updateCode(defaultCode);
jar.onUpdate(code => {
  cooldown = autoSaveTime;
});

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

var executeButton = document.getElementById("execute-button");
var resetButton = document.getElementById("reset-button");
executeButton.onclick = executeCode;
resetButton.onclick = function (e) {
  jar.updateCode(defaultCode);
  executeCode();
};

executeCode();
