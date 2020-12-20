let container = document.getElementById("container");
let dynamic = document.getElementById("dynamic");
let content = document.getElementById("content");
let padding = document.getElementById("padding");
let border = document.getElementById("border");
let margin = document.getElementById("margin");
let paddingNum = document.getElementById("paddingNum");
let borderNum = document.getElementById("borderNum");
let marginNum = document.getElementById("marginNum");
function changePadding() {
    content.style.margin = padding.value;
    content.style.height = (300 - 2 * padding.value) + "px";
    paddingNum.textContent = padding.value;
}
function changeBorderOrMargin() {
    dynamic.style.borderWidth = border.value;
    dynamic.style.margin = margin.value;
    container.style.width = (300 + 2 * border.value + 2 * margin.value) + "px";
    container.style.height = (300 + 2 * border.value + 2 * margin.value) + "px";
    container.style.marginTop = (170 - border.value - margin.value) + "px";
    borderNum.textContent = border.value;
    marginNum.textContent = margin.value;
}
changePadding();
changeBorderOrMargin();
padding.onmousemove = changePadding;
border.onmousemove = changeBorderOrMargin;
margin.onmousemove = changeBorderOrMargin;
padding.onchange = changePadding;
border.onchange = changeBorderOrMargin;
margin.onchange = changeBorderOrMargin;