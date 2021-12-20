let textDefaultCode = `
<script>\n 
    function textClicked() {\n 
        var firstName = document.getElementById("fname").value;\n
        var lastName = document.getElementById("lname").value;\n
        if (firstName === "") {\n
            alert("Please enter your first name!");\n
        } else if (lastName === "") {\n
            alert("Please enter your last name!");\n
        } else {\n
            alert("Hello, " + firstName + " " + lastName);\n 
        }
    }\n 
</script>\n 
<form onsubmit="textClicked(); return false;">\n 
    <label for="fname">Enter your first name:</label><br>\n 
    <input type="text" id="fname" name="fname"><br>\n 
    <label for="lname">Enter your last name:</label><br>\n 
    <input type="text" id="lname" name="lname"><br>\n 
    <br>\n
    <input type="submit" value="Submit Your Name">\n
</form>`;

let radioDefaultCode = `
<script>\n 
    function radioClicked() {\n 
        var elements = document.getElementsByName("fav_language");\n
        for (i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                alert("Your favorite language is " + elements[i].value);
            }
        }
    }\n 
</script>\n
<form onsubmit="radioClicked(); return false;">\n 
    <p>Select your favorite Web language</p>\n 
    <input type="radio" id="html" name="fav_language" value="HTML">\n 
    <label for="html">HTML</label><br>\n 
    <input type="radio" id="css" name="fav_language" value="CSS">\n 
    <label for="css">CSS</label><br> \n 
    <input type="radio" id="javascript" name="fav_language" value="JavaScript"> \n 
    <label for="javascript">JavaScript</label><br>\n 
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let checkboxDefaultCode = `
<script>\n 
    function checkboxClicked() {\n 
        var elements = document.getElementsByName("course");\n
        var result = "";
        for (i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                result += elements[i].value;
                result += ", ";
            }
        }
        if (result === "") {
            alert("You didn't select any course!");
        } else {
            result = result.slice(0, result.length - 2);
        alert("Your have selected " + result + ".");
        }
    }\n 
</script>\n
<form onsubmit="checkboxClicked(); return false;"> \n 
    <p>Select Courses</p> \n 
    <input type="checkbox" id="course1" name="course" value="Art"> \n 
    <label for="course1"> Art </label><br> \n 
    <input type="checkbox" id="course2" name="course" value="History"> \n 
    <label for="course2"> History </label><br> \n 
    <input type="checkbox" id="course3" name="course" value="Math"> \n 
    <label for="course3"> Math </label><br> \n 
    <input type="checkbox" id="course4" name="course" value="Science"> \n 
    <label for="course4"> Science </label><br> \n 
    <input type="checkbox" id="course5" name="course" value="Physics"> \n 
    <label for="course5"> Physics </label><br>\n 
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let numberDefaultCode = `
<script>\n 
    function numberClicked() {\n 
        var element = document.getElementById("quantity");\n
        alert("The number you picked is " + element.value + "!");
    }\n 
</script>\n
<form onsubmit="numberClicked(); return false;">\n
    <label for="quantity">Pick a number between 1 and 10:</label>\n
    <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">\n
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let colorDefaultCode = `
<script>\n 
    function colorClicked() {\n 
        var element = document.getElementById("favcolor");\n
        alert("The code of the color you picked is " + element.value + "!");
    }\n 
</script>\n
<form onsubmit="colorClicked(); return false;">\n
    <label for="favcolor">Select your favorite color:</label>\n
    <input type="color" id="favcolor" name="favcolor">\n
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let dateDefaultCode = `
<script>\n 
    function dateClicked() {\n 
        var element = document.getElementById("randomDate").value;\n
        if (!Date.parse(element)) {
            alert("Please pick a date!");
        } else {
            alert("You choose the date: " + element.value + "!");
        }
    }\n 
</script>\n
<form onsubmit="dateClicked(); return false;">\n
    <label for="randomDate">Pick a random date:</label> \n
    <input type="date" id="randomDate" name="randomDate">\n
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let emailDefaultCode = `
<script>\n 
    function emailClicked() {\n 
        var element = document.getElementById("email").value;\n
        if (element === "") {
            alert("Please enter your email!");
        } else {
            alert("Your email is: " + element + "!");
        }
    }\n 
</script>\n
<form onsubmit="emailClicked(); return false;">\n
    <label for="email">Enter your email:</label> \n
    <input type="email" id="email" name="email">\n
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let rangeDefaultCode = `
<script>\n 
    function rangeClicked() {\n 
        var element = document.getElementById("range").value;\n
        alert("The volume is " + element + "!");
    }\n 
</script>\n
<form onsubmit="rangeClicked(); return false;">\n
    <label for="range">Volume (choose between 0 and 100):</label> \n
    <input type="range" id="range" name="volume" min="0" max="100">\n
    <br>\n
    <input type="submit" value="Submit">\n
</form>`;

let textDefn = "The text input type defines a single-line input field.";
let radioDefn = "The radio input defines a radio button. Users can only select ONE of the choices.";
let checkboxDefn = "The checkbox input defines a checkbox. Checkboxes allow users to select ZERO or MORE options of a limited number of choices.";
let numberDefn = "The number input allows users to select a number. You can also specifies the maximum or minimum values."
let colorDefn = "The color input allows users to select a color."
let dateDefn = "The date input allows users to select a date."
let emailDefn = "A field for email input.";
let rangeDefn = "A control for entering a number whose exact value is not important. It looks like a slider control, defaulting to the middle value. You can also specifies the maximum or minimum values.";

/* Initialize the Jar */
let Jar = CodeJar(document.getElementById("input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

let frameElementId = "display-input-frame";
var displayedCode = textDefaultCode;

Jar.updateCode(displayedCode);
executeCode(frameElementId, Jar);

Jar.onUpdate(code => {
    executeCode(frameElementId, Jar);
});

let resetButton = document.getElementById("reset-button");
resetButton.onclick = function (e) {
    Jar.updateCode(displayedCode);
  executeCode(frameElementId, Jar);
};

/* Helpler Function */
/* Run the code in jar and display the result in frame */
function executeCode(frameElementId, jar) {
    let frame = document.getElementById(frameElementId);
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

function reply_click(button_id) {
    switch (button_id) {
        case "text-input" :
            document.getElementById("definition").innerHTML = textDefn;
            displayedCode = textDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "radio-input":
            document.getElementById("definition").innerHTML = radioDefn;
            displayedCode = radioDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "checkbox-input":
            document.getElementById("definition").innerHTML = checkboxDefn;
            displayedCode = checkboxDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "number-input":
            document.getElementById("definition").innerHTML = numberDefn;
            displayedCode = numberDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "color-input":
            document.getElementById("definition").innerHTML = colorDefn;
            displayedCode = colorDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "date-input":
            document.getElementById("definition").innerHTML = dateDefn;
            displayedCode = dateDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "email-input":
            document.getElementById("definition").innerHTML = emailDefn;
            displayedCode = emailDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
        case "range-input":
            document.getElementById("definition").innerHTML = rangeDefn;
            displayedCode = rangeDefaultCode;
            Jar.updateCode(displayedCode);
            executeCode(frameElementId, Jar);
            break;
    }
}