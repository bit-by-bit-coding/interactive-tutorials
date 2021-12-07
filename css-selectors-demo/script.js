let img = document.createElement('img');
img.src = './../assets/bit-by-bot-images/two-hands-party-bot.png';

let defaultCode = '<head>\n <style>\n    h1{ color: gold }\n </style>\n</head> \n<body>\n <div style="display:flex;align-items:center">\n  <h1>CSS Selector Demo</h1>\n  <div>\n    <p style="text-align:center;">You can select any element within your HTML files using CSS Selectors</p>\n  </div>\n  <div>\n    <p style="text-align:center;">Try selecting the elements using their element tags</p>\n  </div>\n  <img src="./../assets/bit-by-bot-images/pumpkin-yellow-bot.png" width=175 height=175 />\n </div>\n</body>';

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