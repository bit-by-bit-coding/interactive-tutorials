/* A hash table that stores image-url mappings. */
// If you want to change the image, just update both Hash tables and the option menu.
let urlMap = new Map();
urlMap.set("pikachu", "https://www.kumulos.com/wp-content/uploads/2013/10/pikachu-6.png");
urlMap.set("cyndaquil", "https://www.pngitem.com/pimgs/m/165-1653295_pokemon-cyndaquil-hd-png-download.png");
urlMap.set("squirtle", "https://miro.medium.com/max/302/1*KuSu6ZTyLAcRDwOsI9ZzZA.png");

let optionMap = new Map();
optionMap.set("Pikachu", "pikachu");
optionMap.set("Cyndaquil", "cyndaquil");
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
    "Pikachu": "pikachu",
    "Cyndaquil" : "cyndaquil",
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
jar.updateCode(`<img src=\"https://www.kumulos.com/wp-content/uploads/2013/10/pikachu-6.png\"\n width=${imgWidth.value} height=${imgHeight.value}>`);
executeCode();
imgSrcElement.value = "Pikachu";
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