window.onload = async function() {
    await sleep(400);
    
}
let giveID = document.getElementById("giveID");
let showID = document.getElementById("showID");
let giveText = document.getElementById("giveText");
let giveBGColor = document.getElementById("giveBGColor");
let giveColor = document.getElementById("giveColor");
let giveWidth = document.getElementById("giveWidth");
let giveBorderColor = document.getElementById("giveBorderColor");
let submit = document.getElementById("submit");
let DOMCode = document.getElementById("DOMCode");
let post = document.getElementById("post");
let postContent = document.getElementById("postContent");
let sliderValue = document.getElementById("sliderValue");
let rightcont = document.getElementById("rightcont");
let generatedCode = "";
let chosenID = "";
let SPEED;
let currentlyRunning = false;
giveID.onkeyup = function() {
    if (giveID.value == "")
        showID.innerText = "N/A";
    else
        showID.innerText = giveID.value;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function colorText(str, color) {
    return "<span style=\"color:" + color + ";\">" + str + "</span>";
}
submit.onclick = async function() {
    if (currentlyRunning == true)
        return;
    if (giveID.value.search("^[a-zA-Z_$][a-zA-Z_$0-9]*$") == -1 && giveID.value != "") {
        alert("This is not an acceptable ID name.");
        return;
    }
    currentlyRunning = true;
    submit.style.cursor = "progress";
    submit.textContent = "...";
    DOMCode.textContent = "";
    SPEED = 0.29 * (sliderValue.value - 101) * (sliderValue.value - 101) + 100;
    postContent.textContent = "Hello world! I am a div.";
    post.style.backgroundColor = "white";
    post.style.color = "black";
    post.style.border = "3px solid black";
    generatedCode = "";
    if (giveID.value != "") {
        generatedCode += colorText("let", "#77F") + " " + colorText(giveID.value, "#8EF") + " = document." + colorText("getElementById", "#FFA") + "(" + colorText("\"" + giveID.value + "\"", "#C90") + ");<br>";
        chosenID = giveID.value;
    }
    else
        chosenID = "div";
    DOMCode.innerHTML = generatedCode;
    if (giveText.value != "Hello world! I am a div.") {
        var codeFriendlyText = giveText.value.replace(/\"/g, "\\\"");
        generatedCode += colorText(chosenID, "#8EF") + "." + colorText("innerText", "#FAF") + " = " + colorText("\"" + codeFriendlyText + "\"", "#C90") + ";<br>";
        await sleep(SPEED);
    }
    DOMCode.innerHTML = generatedCode;
    postContent.textContent = giveText.value;
    SPEED = 0.29 * (sliderValue.value - 101) * (sliderValue.value - 101) + 100;
    if (giveBGColor.value != "white" && giveBGColor.value != "#fff" && giveBGColor.value != "#FFF" && giveBGColor.value != "#ffffff" && giveBGColor.value != "#FFFFFF" && giveBGColor.value != "rgb(255, 255, 255)") {
        generatedCode += colorText(chosenID, "#8EF") + "." + colorText("style", "#A3A") + "." + colorText("backgroundColor", "#FAF") + " = " + colorText("\"" + giveBGColor.value + "\"", "#C90") + ";<br>";
        await sleep(SPEED);
    }
    DOMCode.innerHTML = generatedCode;
    post.style.backgroundColor = giveBGColor.value;
    SPEED = 0.29 * (sliderValue.value - 101) * (sliderValue.value - 101) + 100;
    if (giveColor.value != "black" && giveColor.value != "#000" && giveColor.value != "#000000" && giveColor.value != "rgb(0, 0, 0)") {
        generatedCode += colorText(chosenID, "#8EF") + "." + colorText("style", "#A3A") + "." + colorText("color", "#FAF") + " = " + colorText("\"" + giveColor.value + "\"", "#C90") + ";<br>";
        await sleep(SPEED);
    }
    DOMCode.innerHTML = generatedCode;
    post.style.color = giveColor.value;
    SPEED = 0.29 * (sliderValue.value - 101) * (sliderValue.value - 101) + 100;
    if (giveWidth.value != "3") {
        generatedCode += colorText(chosenID, "#8EF") + "." + colorText("style", "#A3A") + "." + colorText("borderWidth", "#FAF") + " = " + colorText("\"" + giveWidth.value + "\"", "#C90") + ";<br>";
        await sleep(SPEED);
    }
    DOMCode.innerHTML = generatedCode;
    post.style.borderWidth = giveWidth.value;
    SPEED = 0.29 * (sliderValue.value - 101) * (sliderValue.value - 101) + 100;
    if (giveBorderColor.value != "black" && giveBorderColor.value != "#000000" && giveBorderColor.value != "rgb(0, 0, 0)") {
        generatedCode += colorText(chosenID, "#8EF") + "." + colorText("style", "#A3A") + "." + colorText("borderColor", "#FAF") + " = " + colorText("\"" + giveBorderColor.value + "\"", "#C90") + ";<br>";
        await sleep(SPEED);
    }
    DOMCode.innerHTML = generatedCode;
    post.style.borderColor = giveBorderColor.value;
    submit.style.cursor = "pointer";
    submit.textContent = "GO!";
    if(giveWidth.value >= 10){
        rightcont.style.overflow = "auto";
    }
    else{

        rightcont.style.overflow = "hidden";
    }
    currentlyRunning = false;
}