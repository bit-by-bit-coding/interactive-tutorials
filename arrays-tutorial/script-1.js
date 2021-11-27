let l = ["dog", "cat", "mouse"];
let pushInput = document.getElementById("push-input-1");
let pushButton = document.getElementById("push-button-1");
let pArray = document.getElementById("p-array-1");
let pError = document.getElementById('p-error-1');
let pCode = document.getElementById('p-code-1');
let inputCode = document.getElementById('input-code-1');
let clearButton = document.getElementById('clear-button-1');
let buttonCode = document.getElementById('button-code-1');

pushButton.onclick = function() {
    pError.innerText = '';
    if (pushInput.value === '') {
        pError.innerText = "The new element can't be nothing!";
    } else if (pushInput.value.length > 50) {
        pError.innerText = "Please limit your element length to 50.";
    } else if (!pushInput.value.match(/^[0-9a-z]+$/)) {
        pError.innerText = "Please keep the string alphanumeric.";
    } else {
        l.push(pushInput.value);
        pArray.innerText = "Array: [" + l.join(", ") + "]";
        pCode.innerHTML = pCode.innerHTML + '<br />' + '<span style="color: rgb(156,219,252);">animals</span>.<span style="color: rgb(86,156,214);">push</span>(<span style="color: rgb(202,142,118);">"' + pushInput.value + '"</span>);'
    }
};

pushInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pushButton.click();
    }
});

buttonCode.onclick = function() {
    let x = inputCode.value;
    if (!(x.indexOf('animals') === 0)) {
        if ((x.toLowerCase().indexOf('animal.') === 0) || (x.toLowerCase().indexOf('animals.') === 0)) {
            pError.innerText = 'Remember that the variable name needs to be exactly the same as what it was defined at the start';
        } else {
            pError.innerText = 'Remember that the push command comes in the form of animals.push("string");';
        }
    } else if (!(x.indexOf('animals.push("') === 0)) {
        pError.innerText = 'Don\'t forget that the method we use to add elements to a list is "push"! You also need to open parantheses and have double quotes around the new string.';
    } else if (!(x.substr(x.length - 1, 1) === ';')) {
        pError.innerText = 'Remember that Javascript commands need to end with a semicolon (;)!';
    } else if (!(x.substr(x.length - 2, 1) === ')')) {
        pError.innerText = 'Remember that you need to close the parantheses!';
    } else if (!(x.substr(x.length - 3, 1) === '"')) {
        pError.innerText = "Remember that you need to end your double quotes!"
    } else if ((x.match(/"/g) || []).length > 2) {
        pError.innerText = 'You can\'t have a double quote in your string!';
    }
    else {
        pError.innerText = '';
        if (x.slice(14,x.length - 3).length > 50) {
            pError.innerText = "Please limit your element length to 50.";
            return
        }
        l.push(x.slice(14,x.length - 3));
        pArray.innerText = "Array: [" + l.join(", ") + "]";
        pCode.innerHTML = pCode.innerHTML + '<br />' + '<span style="color: rgb(156,219,252);">animals</span>.<span style="color: rgb(86,156,214);">push</span>(<span style="color: rgb(202,142,118);">"' + x.slice(14,x.length - 3) + '"</span>);'
    }
};

inputCode.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonCode.click();
    }
});

clearButton.onclick = function() {
    l = []
    pCode.innerHTML = '<span style="color: rgb(86,156,214);">let</span> <span style="color: rgb(156,219,252);">animals</span> = [];'
    pArray.innerText= 'Array: []'
}