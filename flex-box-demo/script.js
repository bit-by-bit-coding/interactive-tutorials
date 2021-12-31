let numItems = document.getElementById("num-items");
let buttonNumItems = document.getElementById("button-num-items");
let leftItems = document.getElementById("left-items");
let rightItems = document.getElementById("right-flex-container");
let leftButtonContainer = document.getElementById("left-button-container");
let leftFlexDirection = document.getElementById("left-flex-direction");
let leftFlexWrap = document.getElementById("left-flex-wrap");
let leftJustifyContent = document.getElementById("left-justify-content");
let leftAlignItems = document.getElementById("left-align-items");
let leftAlignContent = document.getElementById("left-align-content");
let rightFlexContainer = document.getElementById("right-flex-container");
let leftButtonItems = document.getElementById("left-button-items");
let numItemsTracker = document.getElementById("num-items-tracker");
let leftButtonEverything = document.getElementById("left-button-everything");

buttonNumItems.onclick = function(){
    let x = numItems.value;
    let sLeft = "";
    for (let i=1; i<=x; i++) {
        // I am so sorry
        sLeft += "<button onclick='showDiv(" + i.toString() + ")' id='button-item-" + i.toString() + "'>Item " + i.toString() + "</button> <br /><div id='left-item-" + i.toString() + "' class='hidden'><p>order: <input type='number' id='order-item-" + i.toString() + "'></p><p>flex-grow: <input type='number' id='flex-grow-item-" + i.toString() + "'></p><p>flex-shrink: <input type='number' id='flex-shrink-item-" + i.toString() + "'></p><p>flex-basis: <input type='number' id='flex-basis-item-" + i.toString() + "'> px</p><p>align-self: <select id='align-self-" + i.toString() + "'><option></option><option value='center'>center</option><option value='flex-start'>flex-start</option><option value='flex-end'>flex-end</option><option value='stretch'>stretch</option><option value='baseline'>baseline</option></select></p></div> <br />";
    }
    leftItems.innerHTML = sLeft;
    let sRight = "";
    for (let i=1; i<=x; i++) {
        sRight += "<div id='right-item-" + i.toString() + "'>" + i.toString() + "</div>";
    }
    rightItems.innerHTML = sRight;
    numItemsTracker.innerText = x.toString();
};

numItems.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonNumItems.click();
    }
});

function showDiv(buttonNum) {
    buttonDiv = document.getElementById("left-item-" + buttonNum.toString());
    buttonDiv.classList.toggle("hidden");
}

leftButtonContainer.onclick = function(){
    rightFlexContainer.style.setProperty("flex-direction", leftFlexDirection.value);
    rightFlexContainer.style.setProperty("flex-wrap", leftFlexWrap.value);
    rightFlexContainer.style.setProperty("justify-content", leftJustifyContent.value);
    rightFlexContainer.style.setProperty("align-items", leftAlignItems.value);
    rightFlexContainer.style.setProperty("align-content", leftAlignContent.value);
};

leftButtonItems.onclick = function(){
    for (i=1; i<=parseInt(numItemsTracker.innerText); i++) {
        iRightItem = document.getElementById("right-item-" + i.toString());
        iRightItem.style.setProperty("order", document.getElementById("order-item-" + i.toString()).value);
        iRightItem.style.setProperty("flex-grow", document.getElementById("flex-grow-item-" + i.toString()).value);
        iRightItem.style.setProperty("flex-shrink", document.getElementById("flex-shrink-item-" + i.toString()).value);
        iRightItem.style.setProperty("flex-basis", document.getElementById("flex-basis-item-" + i.toString()).value.toString() + "px");
        iRightItem.style.setProperty("align-self", document.getElementById("align-self-" + i.toString()).value);
    }
}

leftButtonEverything.onclick = function(){
    leftButtonContainer.click();
    leftButtonItems.click();
    buttonNumItems.click();
};