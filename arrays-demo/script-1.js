const l = ["dog", "cat", "mouse"];
let pushInput = document.getElementById("push-input-1");
let pushButton = document.getElementById("push-button-1");
let pArray = document.getElementById("p-array-1");
let pError = document.getElementById('p-error-1');

pushButton.onclick = function() {
    pError.innerText = '';
    if (pushInput.value === '') {
        pError.innerText = "The new element can't be nothing!";
    } else if (pushInput.value.length > 50) {
        pError.innerText = "Please limit your element length to 50.";
    } else {
        l.push(pushInput.value);
        pArray.innerText = "Array: [" + l.join(", ") + "]";
    }
};

pushInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pushButton.click();
    }
});