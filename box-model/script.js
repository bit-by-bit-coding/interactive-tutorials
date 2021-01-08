let container = document.getElementById("container");
let dynamic = document.getElementById("dynamic");
let content = document.getElementById("content");
let instructions = document.getElementById("instructions");
let padding = document.getElementById("padding");
let border = document.getElementById("border");
let margin = document.getElementById("margin");
let paddingNum = document.getElementById("paddingNum");
let borderNum = document.getElementById("borderNum");
let marginNum = document.getElementById("marginNum");

let CONST_WIDTH = 400;
let CONST_HEIGHT = 400;
let CONST_MARGINTOP = 170;
let CONST_MARGINLEFT = 331;

instructions.style.marginTop = (CONST_MARGINTOP - border.value - margin.value) + "px";
instructions.style.marginLeft = (window.innerWidth / 2 - border.value - margin.value - (CONST_WIDTH / 2) - CONST_MARGINLEFT) + "px";
container.style.width = CONST_WIDTH;
container.style.height = CONST_HEIGHT;
dynamic.style.width = CONST_WIDTH;
dynamic.style.height = CONST_HEIGHT;
content.style.height = CONST_HEIGHT;
instructions.style.height = CONST_HEIGHT;

function changeResize() {
    instructions.style.marginTop = (CONST_MARGINTOP - border.value - margin.value) + "px";
    instructions.style.marginLeft = (window.innerWidth / 2 - border.value - margin.value - (CONST_WIDTH / 2) - CONST_MARGINLEFT) + "px";
}
function changePadding() {
    content.style.margin = padding.value;
    content.style.height = (CONST_HEIGHT - 2 * padding.value) + "px";
    paddingNum.textContent = padding.value;
}
function changeBorderOrMargin() {
    dynamic.style.borderWidth = border.value;
    dynamic.style.margin = margin.value;
    container.style.width = (CONST_WIDTH + 2 * border.value + 2 * margin.value) + "px";
    container.style.height = (CONST_HEIGHT + 2 * border.value + 2 * margin.value) + "px";
    container.style.marginTop = (CONST_MARGINTOP - border.value - margin.value) + "px";
    borderNum.textContent = border.value;
    marginNum.textContent = margin.value;
    instructions.style.marginLeft = (window.innerWidth / 2 - border.value - margin.value - (CONST_WIDTH / 2) - CONST_MARGINLEFT) + "px";
}
changePadding();
changeBorderOrMargin();
padding.onmousemove = changePadding;
border.onmousemove = changeBorderOrMargin;
margin.onmousemove = changeBorderOrMargin;
padding.onchange = changePadding;
border.onchange = changeBorderOrMargin;
margin.onchange = changeBorderOrMargin;
window.onresize = changeResize;