/* Default Code */
let textDefaultCode = `
<form>\n 
    <label for="fname">Enter your first name:</label><br>\n 
    <input type="text" id="fname" name="fname"><br>\n 
    <label for="lname">Enter your last name:</label><br>\n 
    <input type="text" id="lname" name="lname">\n 
</form>`;

let radioDefaultCode = `
<form>\n 
    <p>Select your favorite Web language</p>\n 
    <input type="radio" id="html" name="fav_language" value="HTML">\n 
    <label for="html">HTML</label><br>\n 
    <input type="radio" id="css" name="fav_language" value="CSS">\n 
    <label for="css">CSS</label><br> \n 
    <input type="radio" id="javascript" name="fav_language" value="JavaScript"> \n 
    <label for="javascript">JavaScript</label> \n 
</form>`;

let checkboxDefaultCode = `
<form> \n 
    <p>Select Courses</p> \n 
    <input type="checkbox" id="course1" name="course1" value="Art"> \n 
    <label for="course1"> Art </label><br> \n 
    <input type="checkbox" id="course2" name="course2" value="History"> \n 
    <label for="course2"> History </label><br> \n 
    <input type="checkbox" id="course3" name="course3" value="Math"> \n 
    <label for="course3"> Math </label><br> \n 
    <input type="checkbox" id="course4" name="course4" value="Science"> \n 
    <label for="course4"> Science </label><br> \n 
    <input type="checkbox" id="course5" name="course5" value="Physics"> \n 
    <label for="course5"> Physics </label><br> \n 
</form>`;

let buttonDefaultCode = `<input type="button" onclick="alert('Hello World!')" value="Click Me!">`;

let numberDefaultCode = `
<form>\n
    <p>Pick a number!</p>\n
    <label for="quantity">Quantity (between 1 and 10):</label>\n
    <input type="number" id="quantity" name="quantity" min="1" max="10"> \n
</form>`;

let colorDefaultCode = `
<form>\n
    <label for="favcolor">Select your favorite color:</label> \n
    <input type="color" id="favcolor" name="favcolor">\n
</form>`;

let dateDefaultCode = `
<form>\n
    <label for="randomDate">Pick a random date:</label> \n
    <input type="date" id="randomDate" name="randomDate">\n
</form>`;

let othersDefaultCode = `<form>\n
    <label for="email">Enter your email:</label> \n
    <input type="email" id="email">\n
</form>\n
<form>\n
    <label for="myfile">Select a file:</label>\n
    <input type="file" id="myfile" name="myfile">\n
</form>\n
<form>\n
    <label for="vol">Select volume (between 0 and 100):</label>\n
    <input type="range" id="vol" name="vol" min="0" max="100">\n
</form>\n
<form>\n
    <label for="phone">Enter your phone number:</label>\n
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"> \n
</form>\n
<form>\n
    <label for="appt">Select a time:</label>\n
    <input type="time" id="appt" name="appt">\n
</form>\n`;

/* Text Editor */
let TextJar = CodeJar(document.getElementById("text-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let textElementId = "text-input-frame";

TextJar.updateCode(textDefaultCode);
executeCode(textElementId, TextJar);

TextJar.onUpdate(code => {
    executeCode(textElementId, TextJar);
});

let textResetButton = document.getElementById("text-reset-button");
textResetButton.onclick = function (e) {
    TextJar.updateCode(textDefaultCode);
  executeCode(textElementId, TextJar);
};

/* Radio Editor */
let RadioJar = CodeJar(document.getElementById("radio-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let radioElementId = "radio-input-frame";

RadioJar.updateCode(radioDefaultCode);
executeCode(radioElementId, RadioJar);

RadioJar.onUpdate(code => {
    executeCode(radioElementId, RadioJar);
});

let radioResetButton = document.getElementById("radio-reset-button");
radioResetButton.onclick = function (e) {
    RadioJar.updateCode(radioDefaultCode);
  executeCode(radioElementId, RadioJar);
};

/* Checkbox Editor */
let CheckboxJar = CodeJar(document.getElementById("checkbox-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let checkboxElementId = "checkbox-input-frame";

CheckboxJar.updateCode(checkboxDefaultCode);
executeCode(checkboxElementId, CheckboxJar);

CheckboxJar.onUpdate(code => {
    executeCode(checkboxElementId, CheckboxJar);
});

let checkboxResetButton = document.getElementById("checkbox-reset-button");
checkboxResetButton.onclick = function (e) {
    CheckboxJar.updateCode(checkboxDefaultCode);
  executeCode(checkboxElementId, CheckboxJar);
};

/* Button Editor */
let ButtonJar = CodeJar(document.getElementById("button-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let buttonElementId = "button-input-frame";

ButtonJar.updateCode(buttonDefaultCode);
executeCode(buttonElementId, ButtonJar);

ButtonJar.onUpdate(code => {
    executeCode(buttonElementId, ButtonJar);
});

let buttonResetButton = document.getElementById("button-reset-button");
buttonResetButton.onclick = function (e) {
    ButtonJar.updateCode(buttonDefaultCode);
  executeCode(buttonElementId, ButtonJar);
};

/* Number Editor */
let NumberJar = CodeJar(document.getElementById("number-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let numberElementId = "number-input-frame";

NumberJar.updateCode(numberDefaultCode);
executeCode(numberElementId, NumberJar);

NumberJar.onUpdate(code => {
    executeCode(numberElementId, NumberJar);
});

let numberResetButton = document.getElementById("number-reset-button");
numberResetButton.onclick = function (e) {
    NumberJar.updateCode(numberDefaultCode);
  executeCode(numberElementId, NumberJar);
};

/* Color Editor */
let ColorJar = CodeJar(document.getElementById("color-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let colorElementId = "color-input-frame";

ColorJar.updateCode(colorDefaultCode);
executeCode(colorElementId, ColorJar);

ColorJar.onUpdate(code => {
    executeCode(colorElementId, ColorJar);
});

let colorResetButton = document.getElementById("color-reset-button");
colorResetButton.onclick = function (e) {
    ColorJar.updateCode(colorDefaultCode);
  executeCode(colorElementId, ColorJar);
};

/* Date Editor */
let DateJar = CodeJar(document.getElementById("date-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let dateElementId = "date-input-frame";

DateJar.updateCode(dateDefaultCode);
executeCode(dateElementId, DateJar);

DateJar.onUpdate(code => {
    executeCode(dateElementId, DateJar);
});

let dateResetButton = document.getElementById("date-reset-button");
dateResetButton.onclick = function (e) {
    DateJar.updateCode(dateDefaultCode);
  executeCode(dateElementId, DateJar);
};

/* Others Editor */
let jar = CodeJar(document.getElementById("others-input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let othersElementId = "others-input-frame";

jar.updateCode(othersDefaultCode);
executeCode(othersElementId, jar);

jar.onUpdate(code => {
    executeCode(othersElementId, jar);
});

let othersResetButton = document.getElementById("others-reset-button");
othersResetButton.onclick = function (e) {
    jar.updateCode(othersDefaultCode);
  executeCode(othersElementId, jar);
};


/* Helpler Function */
function executeCode(elementId, jar) {
    let frame = document.getElementById(elementId);
    let frameDoc =
      frame.contentWindow ||
      frame.contentDocument.document ||
      frame.contentDocument;
    let body = jar.toString();
    frameDoc.document.write(
      '<html><head></head>' +
        body +
        "</html>"
    );
    frameDoc.document.close();
}