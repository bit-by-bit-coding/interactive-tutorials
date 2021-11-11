// alert("Instructions: Enter a selector in the box in the top right corner of the screen. This will apply a red border on any element under that selector.\n\nIn the boxes by the elements, you can give the element an ID and a class (both optional). Just make sure not to give 2 elements the same ID!");

// function highlight() {
//     $("*").css("border", "0px solid white");
//     $($("#selectinput").val()).css("border", "10px solid red");
// }

// var elements = ["iframe", "h3", "img", "table", "button", "p", "ul", "body > div", "div div:first", "div div:last"];

// $(document).ready(function(){
//     $("input").keyup(function(event) {
//         var elementID = event.target.id;
//         if (elementID.charAt(0) == "i") {
//             $(elements[parseInt(elementID.charAt(1))]).attr("id", $("#" + elementID).val());
//         }
//         else if (elementID.charAt(0) == "c") {
//             $(elements[parseInt(elementID.charAt(1))]).attr("class", $("#" + elementID).val());
//         }
//         highlight();
//     });
//     $("#selectinput").focus(function() {
//         if ($("#selectinput").val() == "Enter selector here...")
//             $("#selectinput").val("");
//     })
//     $("#selectinput").blur(function() {
//         if ($("#selectinput").val() == "")
//             $("#selectinput").val("Enter selector here...");
//     })
// });

let defaultCode = '<head>\n  <style>\n    h1{ color: gold }\n </style>\n</head> \n<body>\n<div>\n  <h1>CSS Selector Demo</h1>\n  <div>\n    <p>You can select any element within your HTML files using CSS Selectors</p>\n  </div>\n  <div>\n    <p>Try selecting the elements using their element tags</p>\n  </div>\n </div>\n</body>';
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