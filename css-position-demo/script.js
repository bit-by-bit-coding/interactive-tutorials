const positionArray = [
    'static',
    'relative',
    'fixed',
    'absolute',
    'sticky'
];

const top1 = document.getElementById("top1");
const left1 = document.getElementById("left1");
const staticExample1 = document.querySelectorAll(".static.example1")[0];
const relativeExample1 = document.querySelectorAll(".relative.example1")[0];

let count = 0;

const cycleArray = () => {
    let index = count % positionArray.length;
    document.getElementById("position-property").innerText = positionArray[index];
    count++;
}

setInterval(cycleArray, 1500);

document.getElementById("top1").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < -30) this.value = -30;
    if (v > 30) this.value = 30;
    setDisplay(this);
});
document.getElementById("left1").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < -30) this.value = -30;
    if (v > 30) this.value = 30;
    setDisplay(this);
});

const setDisplay = (element) => {
    if (element.value === "static") {
        relativeExample1.style.top = '0px';
        relativeExample1.style.left = '0px';
        staticExample1.style.top = '-3px';
        staticExample1.style.left = '-3px';
        top1.disabled = true;
        left1.disabled = true;
    } else if (element.value === "relative") {
        top1.disabled = false;
        left1.disabled = false;
        top1.value = 0;
        left1.value = 0;
    } else {
        relativeExample1.style[element.name] = element.value + "px";
        let staticValue = -3 + (element.value * -1);
        staticExample1.style[element.name] = staticValue + "px";
    }
};



const top2 = document.getElementById("top2");
const left2 = document.getElementById("left2");
const relativeExample2 = document.querySelectorAll(".relative.example2")[0];
const absoluteExample2 = document.querySelectorAll(".absolute.example2")[0];

const setDisplay2 = (element) => {
    if (element.value === "relative") {
        absoluteExample2.style.position = "relative";
        absoluteExample2.style.top = '0px';
        absoluteExample2.style.left = '0px';
        top2.disabled = true;
        left2.disabled = true;
    } else if (element.value === "absolute") {
        absoluteExample2.style.position = "absolute";
        top2.disabled = false;
        left2.disabled = false;
        top2.value = 0;
        left2.value = 0;
    } else {
        absoluteExample2.style[element.name] = element.value + "px";
    }
};

document.getElementById("top2").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < -30) this.value = -30;
    if (v > 30) this.value = 30;
    setDisplay2(this);
});
document.getElementById("left2").addEventListener("change", function() {
    let v = parseInt(this.value);
    if (v < -30) this.value = -30;
    if (v > 30) this.value = 30;
    setDisplay2(this);
});