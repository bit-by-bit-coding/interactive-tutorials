const setDisplay = (element) => {
    document.getElementById(element.name).style.display = element.value;
    if (element.value === "inline-block") {
        document.getElementById(element.name).style.width = '100px';
        document.getElementById(element.name).style.height = '50px';
    } else {
        document.getElementById(element.name).style.width = 'initial';
        document.getElementById(element.name).style.height = 'initial';
    }
};
const displayArray = [
    'inline',
    'inline-block',
    'none',
    'flex',
    'grid',
    'table',
    'inherit',
    'initial',
    'inline-flex',
    'inline-grid',
    'block'
];
let count = 0;
const cycleArray = () => {
    let index = count % displayArray.length;
    document.getElementById("display-property").innerText = displayArray[index];
    count++;
}
setInterval(cycleArray, 1500);