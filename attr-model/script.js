/* A hash table that stores image-url mappings. */
// If you want to change the image, just update both Hash tables and the option menu.
let urlMap = new Map();
urlMap.set("snowbot", "https://bitbybitcoding.org/imgs/snowbot.svg");
urlMap.set("computerbot", "https://bitbybitcoding.org/imgs/FFbot.png");
urlMap.set("thinkingbot", "https://bitbybitcoding.org/imgs/thinkingbot.png");

let optionMap = new Map();
optionMap.set("Snow Bot", "snowbot");
optionMap.set("Computer Bot", "computerbot");
optionMap.set("Thinking Bot", "thinkingbot");

/* Set up the editor. */
let editorElement = document.querySelector(".editor");
let jar = CodeJar(editorElement, withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  '
});

/* Execute the code in the editor. */
function executeCode(e) {
  let frame = document.getElementById("explore-show");
  let frameDoc =
      frame.contentWindow ||
      frame.contentDocument.document ||
      frame.contentDocument;
  let body = jar.toString();
  frameDoc.document.write(
      '<html><head><link rel="stylesheet" href="style.css"><style>body{padding:0.5em 9em;margin:6;}</style></head>' +
      body +
      "</html>"
  );
  frameDoc.document.close();
}

/* When option changed, updte and execute the code. If you want to change the image, don't for get to update the option menu! */
let optionHandler = (e) => {
    let newValue = e.options[e.target.value];
    jar.updateCode(`<img src="${urlMap.get(newValue)}"\n width=${imgWidth.value} height=${imgHeight.value}>`);
    executeCode();
};
let imgSrcElement = document.getElementById("img-src");
createOption(imgSrcElement, {
    "Snow Bot": "snowbot",
    "Computer Bot" : "computerbot",
    "Thinking Bot": "thinkingbot",
  }, optionHandler);

/* Width and height slider. */
let imgWidth = document.getElementById("img-width");
let imgHeight = document.getElementById("img-height");
let widthNum = document.getElementById("width-num");
let heightNum = document.getElementById("height-num");
imgWidth.onmousemove = sliderUpdate;
imgHeight.onmousemove = sliderUpdate;
function sliderUpdate() {
  jar.updateCode(`<img src=\"${urlMap.get(optionMap.get(imgSrcElement.value))}\"\n width=${imgWidth.value} height=${imgHeight.value}>`);
  widthNum.textContent = imgWidth.value;
  heightNum.textContent = imgHeight.value;
  executeCode();
};

/* Default code. */
jar.updateCode(`<img src=\"https:\/\/bitbybitcoding.org/imgs/snowbot.svg\"\n width=${imgWidth.value} height=${imgHeight.value}>`);
executeCode();
imgSrcElement.value = "Snow Bot";
widthNum.textContent = imgWidth.value;
heightNum.textContent = imgHeight.value;