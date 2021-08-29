const l2 = ["dog", "cat", "mouse"];
let pushInput2 = document.getElementById("push-input-2");
let pushButton2 = document.getElementById("push-button-2");
let indexInput2 = document.getElementById('index-input-2');
let indexButton2 = document.getElementById("index-button-2");
let indexGetP2 = document.getElementById("index-get-p-2");
let pArray2 = document.getElementById("p-array-2");
let pError2 = document.getElementById('p-error-2');

pushButton2.onclick = function() {
    pError2.innerText = '';
    if (pushInput2.value === '') {
        pError2.innerText = "The new element can't be nothing!";
    } else if (pushInput2.value.length > 50) {
        pError2.innerText = "Please limit your element length to 50.";
    } else {
        l2.push(pushInput2.value);
        pArray2.innerText = "Array: [" + l2.join(", ") + "]";
    }
};

pushInput2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pushButton2.click();
    }
});

indexButton2.onclick = function() {
    i = indexInput2.value;
    if (i === '') {
        indexGetP2.innerText = "The index can't be nothing!";
    } else if (i < 0) {
        indexGetP2.innerText = "The index must be greater than or equal to 0.";
    } else if (i >= l2.length) {
        indexGetP2.innerText = "The index must be less than the length of the array. (remember that we start counting the index from 0!)";
    } else {
        indexGetP2.innerText = "The element with index " + i.toString() + " is: " + l2[i.toString()];
    }
};

indexInput2.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        indexButton2.click();
    }
});