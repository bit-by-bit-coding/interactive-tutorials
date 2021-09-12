let l3 = ["dog", "cat", "mouse"];
let popButton3 = document.getElementById('pop-button-3');
let pCode3 = document.getElementById('p-code-3');
let inputCode3 = document.getElementById('input-code-3');
let buttonCode3 = document.getElementById('button-code-3');
let pArray3 = document.getElementById('p-array-3');
let pError3 = document.getElementById('p-error-3');
let clearButton3 = document.getElementById('clear-button-3');

popButton3.onclick = function() {
    if (l3.length === 0) {
        pError3.innerText = "If the array is empty, you can't delete elements from it!";
        return;
    }
    l3.pop();
    pArray3.innerText = "Array: [" + l3.join(', ') + ']';
    pCode3.innerText += '\n animals.pop();';
    pError3.innerText = '';
};

buttonCode3.onclick = function() {
    if (inputCode3.value !== "animals.pop();") {
        pError3.innerText = 'Don\'t forget that the syntax of the pop command is "animals.pop();"';
    } else if (l3.length === 0) {
        pError3.innerText = "If the array is empty, you can't delete elements from it!";
    } else {
        l3.pop();
        pArray3.innerText = "Array: [" + l3.join(', ') + ']';
        pCode3.innerText += '\n animals.pop();';
        pError3.innerText = '';
    }
};

inputCode3.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonCode3.click();
    }
});

clearButton3.onclick = function() {
    l3 = ["dog", "cat", "mouse"];
    pArray3.innerText = "Array: [dog, cat, mouse]";
    pCode3.innerText = 'let animals = ["dog", "cat", "mouse"];';
    pError3.innerText = '';
}