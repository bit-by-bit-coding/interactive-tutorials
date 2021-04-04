let container1 = document.getElementById("container-1");
let dynamic1 = document.getElementById("dynamic-1");
let content1 = document.getElementById("content-1");
let container2 = document.getElementById("container-2");
let dynamic2 = document.getElementById("dynamic-2");
let content2 = document.getElementById("content-2");
let padding1 = document.getElementById("padding-1");
let border1 = document.getElementById("border-1");
let margin1 = document.getElementById("margin-1");
let paddingNum1 = document.getElementById("paddingNum-1");
let borderNum1 = document.getElementById("borderNum-1");
let marginNum1 = document.getElementById("marginNum-1");
let padding2 = document.getElementById("padding-2");
let border2 = document.getElementById("border-2");
let margin2 = document.getElementById("margin-2");
let paddingNum2 = document.getElementById("paddingNum-2");
let borderNum2 = document.getElementById("borderNum-2");
let marginNum2 = document.getElementById("marginNum-2");

let CONST_WIDTH = parseInt(window.getComputedStyle(container1).width);
let CONST_HEIGHT = parseInt(window.getComputedStyle(container1).height);

function changePadding(content, padding, paddingNum) {
    content.style.margin = padding.value;
    content.style.width = (CONST_WIDTH - 2 * padding.value);
    content.style.height = (CONST_HEIGHT - 2 * padding.value);
    paddingNum.textContent = padding.value;
}
function changeBorderOrMargin(container, dynamic, border, margin, borderNum, marginNum) {
    dynamic.style.borderWidth = border.value;
    dynamic.style.margin = margin.value;
    container.style.width = (CONST_WIDTH + 2 * border.value + 2 * margin.value);
    container.style.height = (CONST_HEIGHT + 2 * border.value + 2 * margin.value);
    borderNum.textContent = border.value;
    marginNum.textContent = margin.value;
}
changePadding(content1, padding1, paddingNum1);
changePadding(content2, padding2, paddingNum2);
changeBorderOrMargin(container1, dynamic1, border1, margin1, borderNum1, marginNum1);
changeBorderOrMargin(container2, dynamic2, border2, margin2, borderNum2, marginNum2);
padding1.onmousemove = () => { changePadding(content1, padding1, paddingNum1); };
border1.onmousemove = () => { changeBorderOrMargin(container1, dynamic1, border1, margin1, borderNum1, marginNum1); };
margin1.onmousemove = () => { changeBorderOrMargin(container1, dynamic1, border1, margin1, borderNum1, marginNum1); };
padding1.onchange = () => { changePadding(content1, padding1, paddingNum1); };
border1.onchange = () => { changeBorderOrMargin(container1, dynamic1, border1, margin1, borderNum1, marginNum1); };
margin1.onchange = () => { changeBorderOrMargin(container1, dynamic1, border1, margin1, borderNum1, marginNum1); };
padding2.onmousemove = () => { changePadding(content2, padding2, paddingNum2); };
border2.onmousemove = () => { changeBorderOrMargin(container2, dynamic2, border2, margin2, borderNum2, marginNum2); };
margin2.onmousemove = () => { changeBorderOrMargin(container2, dynamic2, border2, margin2, borderNum2, marginNum2); };
padding2.onchange = () => { changePadding(content2, padding2, paddingNum2); };
border2.onchange = () => { changeBorderOrMargin(container2, dynamic2, border2, margin2, borderNum2, marginNum2); };
margin2.onchange = () => { changeBorderOrMargin(container2, dynamic2, border2, margin2, borderNum2, marginNum2); };
