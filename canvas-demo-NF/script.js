/* Append default code at the beginning of the code editor */
let defaultCanvasCode = '<canvas id="canvas" width="700" height="300"></canvas>\n';

/**
 * Map that stores default codes
 * Key: page number
 * Value: default code
 */
const CodeMap = new Map();
/**
 * Map that stores instructions
 * Key: page number
 * Value: instructions
 */
const InstructionMap = new Map();

/**
 * Sample Code for each page
 */
let sampleCode_0 = "";

let sampleCode_1 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 200);
      ctx.strokeRect(150, 25, 100, 200);
      ctx.strokeRect(275, 25, 100, 200);
      ctx.clearRect(250, 20, 150, 250);
  }
</script> 
`;

let sampleCode_2 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(100, 50);
      ctx.stroke();
      
      ctx.beginPath();
      var x = 200;
      var y = 100;
      var radius = 50;
      var startAngle = 0;
      var endAngle = Math.PI;
      var counterclockwise = true;
      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      ctx.stroke();
  }
</script>
`;

let sampleCode_3 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(50, 150);
      ctx.lineTo(150, 150);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(300, 100);
      ctx.lineTo(250, 150);
      ctx.lineTo(350, 150);
      ctx.fill();
  }
</script> 
`;

let sampleCode_4 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.strokeStyle = 'orange';
      ctx.moveTo(50, 50);
      ctx.lineTo(150, 50);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.strokeStyle = '#38Bfe7';
      ctx.moveTo(50, 100);
      ctx.lineTo(150, 100);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.fillStyle = 'rgb(21,53,112)';
      ctx.moveTo(200, 50);
      ctx.lineTo(200, 100);
      ctx.lineTo(250, 100);
      ctx.fill();
      
      ctx.beginPath();
      ctx.fillStyle = '#ff8900';
      ctx.moveTo(300, 50);
      ctx.lineTo(300, 100);
      ctx.lineTo(350, 100);
      ctx.fill();
  }
</script> 
`;

let sampleCode_5 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      for (var i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.globalAlpha = 0.1 * i;
          ctx.moveTo(50 * i, 50);
          ctx.lineTo(50 * i, 100);
          ctx.lineTo(50 * i + 50, 100);
          ctx.fill();
      }
  }
</script> 
`;

let sampleCode_6 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      for (var i = 0; i < 5; i++) {
          ctx.lineWidth = i + 1;
          ctx.beginPath();
          ctx.moveTo(5 + i * 20, 5);
          ctx.lineTo(5 + i * 20, 150);
          ctx.stroke();
      }
      
      ctx.lineCap = 'butt';
      ctx.beginPath();
      ctx.moveTo(130, 5);
      ctx.lineTo(130, 150);
      ctx.stroke();
      
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(150, 5);
      ctx.lineTo(150, 150);
      ctx.stroke();
      
      ctx.lineCap = 'square';
      ctx.beginPath();
      ctx.moveTo(170, 5);
      ctx.lineTo(170, 150);
      ctx.stroke();

      ctx.lineWidth = 10;
  
      ctx.lineJoin  = 'round';
      ctx.beginPath();
      ctx.moveTo(50, 200);
      ctx.lineTo(50, 250);
      ctx.lineTo(100, 250);
      ctx.stroke();
      
      ctx.lineJoin  = 'bevel';
      ctx.beginPath();
      ctx.moveTo(150, 200);
      ctx.lineTo(150, 250);
      ctx.lineTo(200, 250);
      ctx.stroke();
      
      ctx.lineJoin  = 'miter';
      ctx.beginPath();
      ctx.moveTo(250, 200);
      ctx.lineTo(250, 250);
      ctx.lineTo(300, 250);
      ctx.stroke();
  }
</script> 
`;

let sampleCode_7 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.font = "40px serif";
      ctx.fillText('Hello world', 50, 50);
      ctx.strokeText('Bit By Bit', 400, 50);
  }
</script> 
`;

let sampleCode_8 = `
<script>
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      var textAlign = ['start', 'end', 'left', 'right', 'center'];
      var textBaseLine = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
      var direction = ['ltr', 'rtl', 'inherit'];
      
      ctx.font = "20px serif";
      
      ctx.strokeStyle = '#38Bfe7';
      ctx.beginPath();
      ctx.moveTo(100, 0);
      ctx.lineTo(100, 270);
      ctx.stroke();
      ctx.strokeStyle = 'black';
      for (var i = 0; i < 5; i++) {
          ctx.textAlign = textAlign[i]
          ctx.strokeText(textAlign[i], 100, 50 * i + 20);
      }
      
      
      for (var j = 0; j < 6; j++) {
          ctx.strokeStyle = '#38Bfe7';
          ctx.beginPath();
          ctx.moveTo(200, 50 * j + 20);
          ctx.lineTo(400, 50 * j + 20);
          ctx.stroke();
          ctx.textBaseline = textBaseLine[j]
          ctx.fillText('Bit By Bit (' + textBaseLine[j] + ' )', 300, 50 * j + 20);
      }
      
      for (var k = 0; k < 3; k++) {
          ctx.direction = direction[k]
          ctx.fillText('Hello World! (' + direction[k] + ')' , 500, 50 * k + 20);
      }
  }
</script> 
`;

/**
 * Instruction for each page
 */
let instruction_0 = `
<h2> Drawing Shapes </h2>
<p> <code class="codeHighlight">&lt;canvas&gt;</code> only draw paths and rectangles. 
But we can draw other complex shapes by combining one or more paths.</p>
`;

let instruction_1 = `
<h2> Drawing Shapes / Drawing Rectangles</h2>
<p> There are three ways to draw a rectangle. </p>
<ol>
  <li> <button id="fillRect-button"> fillRect(x, y, width, height) </button> </li> <br>
  <li> <button id="strokeRect-button"> strokeRect(x, y, width, height) </button> </li> <br>
  <li> <button id="clearRect-button"> clearRect(x, y, width, height) </button> </li>
</ol>
`;

let instruction_2 = `
<h2> Drawing Shapes / Drawing Paths</h2>
<p> A path is a set of connected points. It can be curved or straight. </p> \n
<p> We start with a <button id="beginPath-button"> beginPath() </button> function. Everytime this function is called, a new path is created (but not drawn yet).\n
<p> Then we use path methods to draw path, including: </p>
<ol>
  <li> <button id="moveTo-button"> moveTo(x, y) </button> </li> <br>
  <li> <button id="lineTo-button"> lineTo(x, y) </button> </li> <br>
  <li> <button id="arc-button"> arc(x, y, radius, startAngle, endAngle, counterclockwise) </button> </li>
</ol>
<p> Finally, we close the path with <button id="closePath-button"> closePath() </button> function. This step is optional. It closed the path by draw a straight line from the current point to the starting point. </p>
<p> See stroke() and fill() function in next page. </p>
`

let instruction_3 = `
<h2> Drawing Shapes / Drawing Paths </h2>
<p> These two functions are also used to draw shapes. </p> \n
<ol>
  <li> <button id="stroke-button"> stroke() </button> </li> <br>
  <li> <button id="fill-button"> fill() </button> </li>
</ol>
`;

let instruction_4 = `
<h2> Styles and Colors </h2>
<p> We have now learned how to draw shapes on canvas in default styles. But we can add colors and more styles to it. </p> \n
<p> We can change the color by setting the following properties: </p>
<ol>
  <li> <button id="fillStyle-button"> fillStyle = COLOR </button></li> <br>
  <li> <button id="strokeStyle-button"> strokeStyle = COLOR </button> </li>
</ol>
<p> where the color is a string representing CSS color. You can define fillStyle and strokeStyle just like the way you define color in CSS.
`;

let instruction_5 = `
<h2> Styles and Colors </h2>
<p> It is also possible to change the transparency with the property: <button id="globalAlpha-button"> globalAlpha </button>; </p>
<p> The value of globalAlpha is between 0.0 (fully transparent) and 1.0 (fully opaque). </p>
`;

let instruction_6 = `
<h2> Styles and Colors / Line Styles </h2>
<p> The following properties define the styles of a path.
<ol>
  <li> <button id="lineWidth-button"> lineWidth </button> </li> <br>
  <li> <button id="lineCap-button"> lineCap </button> </li> <br>
  <li> <button id="lineJoin-button"> lineJoin </button> </li>
</ol>
`;

let instruction_7 = `
<h2> Text </h2>
<p> To print texts on canvas, use the following funtions: </p>
<ol>
  <li> <button id="fillText-button"> fillText(text, x, y, maxWidth) </button> </li> <br>
  <li> <button id="strokeText-button"> strokeText(text, x, y, maxWidth) </button> </li>
</ol>
`;

let instruction_8 = `
<h2> Text </h2>
<p> And used these properties to add style: </p>
<ol>
  <li> <button id="font-button"> font = value </button> </li> <br> 
  <li> <button id="textAlign-button"> textAlign = value </button> </li> <br>
  <li> <button id="textBaseline-button"> textBaseline = value </button> </li> <br>
  <li> <button id="direction-button"> direction = value </button> </li>
</ol>
`

/* Build CodeMap and Instuction Map */
CodeMap.set(0, sampleCode_0);
CodeMap.set(1, sampleCode_1);
CodeMap.set(2, sampleCode_2);
CodeMap.set(3, sampleCode_3);
CodeMap.set(4, sampleCode_4);
CodeMap.set(5, sampleCode_5);
CodeMap.set(6, sampleCode_6);
CodeMap.set(7, sampleCode_7);
CodeMap.set(8, sampleCode_8);

InstructionMap.set(0, instruction_0);
InstructionMap.set(1, instruction_1);
InstructionMap.set(2, instruction_2);
InstructionMap.set(3, instruction_3);
InstructionMap.set(4, instruction_4);
InstructionMap.set(5, instruction_5);
InstructionMap.set(6, instruction_6);
InstructionMap.set(7, instruction_7);
InstructionMap.set(8, instruction_8);


/* Default */

/* Page number */
var pageNum = 0;

/* Instruction Section */
document.getElementById("instructionContent").innerHTML = InstructionMap.get(pageNum);

/* Editor Function */
let Jar = CodeJar(document.getElementById("input-editor"), withLineNumbers(Prism.highlightElement, {
    color: '#000',
    backgroundColor: 'rgb(232, 232, 232)'
}), {
    tab: '  ',
    indentOn: /<[a-zA-Z =\"\-]+>$/
});

var displayedCode = defaultCanvasCode;

Jar.updateCode(displayedCode);
executeCode(Jar);

Jar.onUpdate(code => {
    executeCode(Jar);
});

let resetButton = document.getElementById("reset-button");
resetButton.onclick = function (e) {
    Jar.updateCode(displayedCode);
  executeCode(Jar);
};

/* Helpler Function */
/* Run the code in jar and display the result in frame */
function executeCode(jar) {
  let frame = document.getElementById("display-input-frame");
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


/* Button Clicked Function */
function increament() {
  if (pageNum < 8) {
    pageNum++;
  }
  /* Check button visiblity */
  checkPageNum()
  /* update tutorial */
  update();
}

function decrement() {
  if (pageNum > 0) {
    pageNum--;
  }
  /* Check button visiblity */
  checkPageNum()
  /* update tutorial */
  update();
}

function checkPageNum() {
  if (pageNum <= 0) {
    document.getElementById("prev-button").style.visibility = "hidden";
  } else {
    document.getElementById("prev-button").style.visibility = "visible";
  }

  if (pageNum >= 8) {
    document.getElementById("next-button").style.visibility = "hidden";
  } else {
    document.getElementById("next-button").style.visibility = "visible";
  }
}

function update() {
  document.getElementById("instructionContent").innerHTML = InstructionMap.get(pageNum);
  displayedCode = defaultCanvasCode + CodeMap.get(pageNum);
  Jar.updateCode(displayedCode);
  executeCode(Jar);
}