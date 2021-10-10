/* A hash table that stores image-url mappings. */
// If you want to change the image, just update both Hash tables and the option menu.
let urlMap = new Map();
urlMap.set("party-bot", "../assets/bit-by-bot-images/two-hands-party-bot.png");
urlMap.set("pumpkin-bot", "../assets/bit-by-bot-images/pumpkin-yellow-bot.png");
urlMap.set("squirtle", "https://miro.medium.com/max/302/1*KuSu6ZTyLAcRDwOsI9ZzZA.png");

let optionMap = new Map();
optionMap.set("Party Bot", "party-bot");
optionMap.set("Pumpkin Bot", "pumpkin-bot");
optionMap.set("Squirtle", "squirtle");

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
    "Party Bot": "party-bot",
    "Pumpkin Bot" : "pumpkin-bot",
    "Squirtle": "squirtle",
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
jar.updateCode(`<img src=\"../assets/bit-by-bot-images/two-hands-party-bot.png\"\n width=${imgWidth.value} height=${imgHeight.value}>`);
executeCode();
imgSrcElement.value = "Party Bot";
widthNum.textContent = imgWidth.value;
heightNum.textContent = imgHeight.value;


/* Code for anchor element.*/
/* Set up the editor for a tag section. */
let aTageditorElement = document.querySelector("#atageditor");
let aTagJar = CodeJar(aTageditorElement, withLineNumbers(Prism.highlightElement, {
  color: '#000',
  backgroundColor: 'rgb(232, 232, 232)'
}), {
  tab: '  '
});

let webUrlMap = new Map();
webUrlMap.set("google", "https://www.google.com/");
webUrlMap.set("facebook", "https://www.facebook.com/");
webUrlMap.set("bitbybit", "https://bitbybitcoding.org/");

let optionHandlerAtag = (e) => {
  let newValue = e.options[e.target.value];
  let aTag = document.getElementById("atag");
  aTag.setAttribute("href", webUrlMap.get(newValue));
  aTagJar.updateCode(`<a href="${webUrlMap.get(newValue)}">Click me!</a>`);
};

let destUrlElement = document.getElementById("url-option");
createOption(destUrlElement, {
    "Google": "google",
    "Facebook" : "facebook",
    "Bit by Bit": "bitbybit",
  }, optionHandlerAtag);

/* Default Code for a tag. */
destUrlElement.value = "Google";
aTagJar.updateCode(`<a href="https://www.google.com">Click me!</a>`);