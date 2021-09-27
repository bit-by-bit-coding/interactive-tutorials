let l2 = ["dog", "cat", "mouse"];
let prev = [];
let indexInput2 = document.getElementById('index-input-2');
let indexButton2 = document.getElementById("index-button-2");
let pArray2 = document.getElementById("p-array-2");
let pError2 = document.getElementById('p-error-2');
let pCode2 = document.getElementById('p-code-2');
let inputCode2 = document.getElementById('input-code-2');
let clearButton2 = document.getElementById('clear-button-2');
let buttonCode2 = document.getElementById('button-code-2');
let consoleOutput2 = document.getElementById('console-output-2');

indexButton2.onclick = function() {
    let i = indexInput2.value;
    if (i === '') {
        pError2.innerText = "The index can't be nothing!";
    } else if (i < 0) {
        pError2.innerText = "The index must be greater than or equal to 0.";
    } else if (i >= l2.length) {
        pError2.innerText = "The index must be less than the length of the array. (remember that we start counting the index from 0!)";
    } else {
        prev.push(l2[i]);
        consoleOutput2.innerHTML = 'Console Output: <br />' + prev.join('<br />') + '<br />><span class="blink_me">_</span>'
        pError2.innerText = '';
        pCode2.innerHTML = pCode2.innerHTML + '<br /><span style="color:rgb(156,219,252);">console</span>.<span style="color:rgb(227,227,176);">log</span>(<span style="color:rgb(156,219,252);">animals</span>[<span style="color:rgb(227,227,176);">' + i.toString() + '</span>]);';
    }
};

indexInput2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        indexButton2.click();
    }
});

buttonCode2.onclick = function() {
    let x = inputCode2.value;
    if (!(x.indexOf('console.log(animals[') === 0)) {
        if ((x.toLowerCase().indexOf('animal') === 12) || (x.toLowerCase().indexOf('animals') === 12)) {
            pError2.innerText = 'Remember that the variable name needs to be exactly the same as what it was defined at the start';
        } else {
            pError2.innerText = 'Remember that the console.log command comes in the form of console.log(animals[index]);';
        }
    } else if (!(x.substr(x.length - 1, 1) === ';')) {
        pError2.innerText = 'Remember that Javascript commands need to end with a semicolon (;)!';
    } else if (!(x.substr(x.length - 2, 1) === ')')) {
        pError2.innerText = 'Remember that you need to close the parantheses!';
    } else if (!(x.substr(x.length - 3, 1) === ']')) {
        pError2.innerText = 'Remember that you need to close the brackets!';
    } else {
        try {
            if (20 === x.length - 3) {
                pError2.innerText = 'Remember that you need to pass an integer between the brackets!';
                return
            }
            y = Number(x.slice(20, x.length - 3));
            if (isNaN(y)) {
                pError2.innerText = 'Remember that you need to pass in an integer between the brackets!';
            } else if (y < 0) {
                pError2.innerText = 'Remember that the integer can\'t be negative!';
            } else if (y >= l2.length) {
                pError2.innerText = 'Remember that the integer can\'t be greater than or equal to the length of the array!'
            } else {
                prev.push(l2[y]);
                consoleOutput2.innerHTML = 'Console Output: <br />' + prev.join('<br />') + '<br />><span class="blink_me">_</span>'
                pError2.innerText = '';
                pCode2.innerHTML = pCode2.innerHTML + '<br /><span style="color:rgb(156,219,252);">console</span>.<span style="color:rgb(227,227,176);">log</span>(<span style="color:rgb(156,219,252);">animals</span>[<span style="color:rgb(227,227,176);">' + y.toString() + '</span>]);';
            }
        } catch {
            pError2.innerText = 'Remember that you need to pass in an integer between the brackets!'
        }
    }
};

inputCode2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonCode2.click();
    }
});

clearButton2.onclick = function() {
    consoleOutput2.innerHTML = 'Console Output: <br />><span class="blink_me">_</span>';
    pCode2.innerHTML = '<span style="color: rgb(86,156,214);">let</span> <span style="color: rgb(156,219,252);">animals</span> = [<span style="color: rgb(202,142,118);">"dog"</span>, <span style="color: rgb(202,142,118);">"cat"</span>, <span style="color: rgb(202,142,118);">"mouse"</span>];';
    pError2.innerText = '';
    prev = [];
}