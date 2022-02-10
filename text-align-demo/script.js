let numInput = document.getElementById("numInput");
let numButton = document.getElementById("numButton");
let leftDiv = document.getElementById("leftDiv");
let leftButton = document.getElementById("leftButton");
let numP = 3; // global variable but not using let is bad practice or something idk
let rightDiv = document.getElementById("rightDiv");

numButton.onclick = function(){
    leftDiv.innerHTML = "";
    rightDiv.innerHTML = "";
    for (let i = 1; i < parseInt(numInput.value)+1; i++) {
        leftDiv.innerHTML = leftDiv.innerHTML + "<p>P Tag " + i.toString() + ":  <select id='left" + i.toString() + "'><option></option><option value='left'>Left</option><option value='right'>Right</option><option value='center'>Center</option><option value='justify'>Justify</option></select> <input id='leftInput" + i.toString() + "' placeholder='Hello World!' /></p>";
        rightDiv.innerHTML = rightDiv.innerHTML + "<p id='right" + i.toString() + "'>Hello World!</p>";
    }
    numP = parseInt(numInput.value);
};

numInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        numButton.click();
    }
});

leftButton.onclick = function(){
    for (let i = 1; i < numP+1; i++) {
        document.getElementById("right" + i.toString()).style.setProperty("text-align", document.getElementById("left" + i.toString()).value);
        document.getElementById("right" + i.toString()).innerText = document.getElementById("leftInput" + i.toString()).value;
    }
};