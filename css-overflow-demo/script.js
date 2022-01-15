const exampleDiv = document.getElementById("example-div");
const scrollButton = document.getElementById("scroll-button");
const hiddenButton = document.getElementById("hidden-button");
const autoButton = document.getElementById("auto-button");
const visibleButton = document.getElementById("visible-button");
const codeOverflowProperty = document.getElementById("overflow-property");

const setOverflow = (button) => {
    exampleDiv.className = button.value;
    codeOverflowProperty.innerText = button.value;
};

scrollButton.addEventListener("click", function () {
    setOverflow(this);
});
hiddenButton.addEventListener("click", function () {
    setOverflow(this);
});
autoButton.addEventListener("click", function () {
    setOverflow(this);
});
visibleButton.addEventListener("click", function () {
    setOverflow(this);
});
