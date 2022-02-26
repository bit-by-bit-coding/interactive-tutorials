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
 * Map that stores function details
 * Key: function name 
 * Value: function usage
 */
 const FunctionMap = new Map();

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
<p> <code class="codeBold">&lt;canvas&gt;</code> only draw paths and rectangles. 
But we can draw other complex shapes by combining one or more paths.</p>
`;

let instruction_1 = `
<h2> Drawing Shapes / Drawing Rectangles</h2>
<p> There are three ways to draw a rectangle. </p>
<ol>
  <li> <button id="fillRect-button" onClick="showFunctionDetail(this.id)"> fillRect(x, y, width, height) </button> </li> <br>
  <li> <button id="strokeRect-button" onClick="showFunctionDetail(this.id)"> strokeRect(x, y, width, height) </button> </li> <br>
  <li> <button id="clearRect-button" onClick="showFunctionDetail(this.id)"> clearRect(x, y, width, height) </button> </li>
</ol>
`;

let instruction_2 = `
<h2> Drawing Shapes / Drawing Paths</h2>
<p> A <code class="codeBold">path</code> is a set of connected points. It can be curved or straight. </p> \n
<p> We start with a <button id="beginPath-button" onClick="showFunctionDetail(this.id)"> beginPath() </button> function. Everytime this function is called, a new path is created (but not drawn yet).\n
<p> Then we use path methods to draw path, including: </p>
<ol>
  <li> <button id="moveTo-button" onClick="showFunctionDetail(this.id)"> moveTo(x, y) </button> </li> <br>
  <li> <button id="lineTo-button" onClick="showFunctionDetail(this.id)"> lineTo(x, y) </button> </li> <br>
  <li> <button id="arc-button" onClick="showFunctionDetail(this.id)"> arc(x, y, radius, startAngle, endAngle, counterclockwise) </button> </li>
</ol>
<p> Finally, we close the path with <button id="closePath-button" onClick="showFunctionDetail(this.id)"> closePath() </button> function. This step is optional. It closed the path by draw a straight line from the current point to the starting point. </p>
<p> See stroke() and fill() function in next page. </p>
`

let instruction_3 = `
<h2> Drawing Shapes / Drawing Paths </h2>
<p> These two functions are also used to draw shapes. </p> \n
<ol>
  <li> <button id="stroke-button" onClick="showFunctionDetail(this.id)"> stroke() </button> </li> <br>
  <li> <button id="fill-button" onClick="showFunctionDetail(this.id)"> fill() </button> </li>
</ol>
`;

let instruction_4 = `
<h2> Styles and Colors </h2>
<p> We have now learned how to draw shapes on canvas in default styles. But we can add colors and more styles to it. </p> \n
<p> We can change the color by setting the following properties: </p>
<ol>
  <li> <button id="fillStyle-button" onClick="showFunctionDetail(this.id)"> fillStyle = COLOR </button></li> <br>
  <li> <button id="strokeStyle-button" onClick="showFunctionDetail(this.id)"> strokeStyle = COLOR </button> </li>
</ol>
<p> where the color is a string representing CSS color. You can define fillStyle and strokeStyle just like the way you define color in CSS.
`;

let instruction_5 = `
<h2> Styles and Colors </h2>
<p> It is also possible to change the transparency with the property:</p> 
<button id="globalAlpha-button" onClick="showFunctionDetail(this.id)"> globalAlpha = VALUE </button>
<p> The value of globalAlpha is between 0.0 (fully transparent) and 1.0 (fully opaque). </p>
`;

let instruction_6 = `
<h2> Styles and Colors / Line Styles </h2>
<p> The following properties define the styles of a path.
<ol>
  <li> <button id="lineWidth-button" onClick="showFunctionDetail(this.id)"> lineWidth = VALUE </button> </li> <br>
  <li> <button id="lineCap-button" onClick="showFunctionDetail(this.id)"> lineCap = VALUE </button> </li> <br>
  <li> <button id="lineJoin-button" onClick="showFunctionDetail(this.id)"> lineJoin = VALUE </button> </li>
</ol>
`;

let instruction_7 = `
<h2> Text </h2>
<p> To print texts on canvas, use the following funtions: </p>
<ol>
  <li> <button id="fillText-button" onClick="showFunctionDetail(this.id)"> fillText(text, x, y, maxWidth) </button> </li> <br>
  <li> <button id="strokeText-button" onClick="showFunctionDetail(this.id)"> strokeText(text, x, y, maxWidth) </button> </li>
</ol>
`;

let instruction_8 = `
<h2> Text </h2>
<p> And used these properties to add style: </p>
<ol>
  <li> <button id="font-button" onClick="showFunctionDetail(this.id)"> font = VALUE </button> </li> <br> 
  <li> <button id="textAlign-button" onClick="showFunctionDetail(this.id)"> textAlign = VALUE </button> </li> <br>
  <li> <button id="textBaseline-button" onClick="showFunctionDetail(this.id)"> textBaseline = VALUE </button> </li> <br> 
  <li> <button id="direction-button" onClick="showFunctionDetail(this.id)"> direction = VALUE </button> </li>
</ol>
`

/* Functions */
let fillRectFunction = `
<h2> fillRect(x, y, width, height) </h2>
<p> This function draw a rectangle. x and y indicate starting point of the rectangle. width and height determine the size. </p>
<p> For example: <code class="codeNavy">fillRect(<code class="codeOrange">50</code>, <code class="codeOrange">60</code>, <code class="codeOrange">100</code>, <code class="codeOrange">200</code>)</code> </p>
<p> This method draw a rectangle which has a starting point at (50, 60). </p>
<p> This rectangle has a width of 100 and a height of 200. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`

let strokeRectFunction = `
<h2> strokeRect(x, y, width, height) </h2>
<p> This function draw a filled rectangle. x and y indicate starting point of the rectangle. Width and height determine the size. </p>
<p> For example: <code class="codeNavy">strokeRect(<code class="codeOrange">50</code>, <code class="codeOrange">60</code>, <code class="codeOrange">100</code>, <code class="codeOrange">200</code>)</code> </p>
<p> This method draw a filled rectangle which has a starting point at (50, 60). </p>
<p> This filled rectangle has a width of 100 and a height of 200. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`

let clearReactFunction = `
<h2> clearRect(x, y, width, height) </h2>
<p> This function clear a rectangle by making it fully transparent. x and y indicate starting point of the rectangle. Width and height determine the size. </p>
<p> For example: <code class="codeNavy">clearRect(<code class="codeOrange">50</code>, <code class="codeOrange">60</code>, <code class="codeOrange">100</code>, <code class="codeOrange">200</code>)</code> </p>
<p> This method clear a  rectangle which has a starting point at (50, 60). </p>
<p> The rectangle being cleared has a width of 100 and a height of 200. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let beginPathFunction = `
<h2> beginPath() </h2>
<p> This function begin a new path. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let moveToFunction = `
<h2> moveTo(x, y) </h2>
<p> This function moves the starting point at (x, y). </p>
<p> This function does not draw anything. You may think of it as lifting a pen and place it on the coordinate (x, y). </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let lineToFunction = `
<h2> lineTo(x, y) </h2>
<p> This function draw a line from current position to (x, y). </p>
<p> For example: </p>
<p> We can first move our pen to (50, 50) by <code class="codeNavy">moveTo(<code class="codeOrange">50</code>, <code class="codeOrange">50</code>)</code>. </p>
<p> Then by calling <code class="codeNavy">lineTo(<code class="codeOrange">100</code>, <code class="codeOrange">50</code>)</code>, we draw a horizontal line of length 50. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let arcFunction = `
<h2> arc(x, y, radius, startAngle, endAngle, counterclockwise) </h2>
<p> This function create a circular arc. The arc centered at (x, y), with radius of radius. </p>
<p> The startAngle and endAngle specifies the starting and ending position of the arc. </p>
<p> If the counterclockwise parameter is true, we draw the arc counter-clockwise. Otherwise we draw the arc clock-wise. </p>
<p> In the sample code on the right section: </p>
<p> We creat an arc centered at (200, 100), starting from angle 0 to Pi. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let closePathFunction = `
<h2> closePath() </h2>
<p> This function close a path by adding a straight line between the starting point and the current point. </p>
<p> If the shape is already closed, then this function do nothing. </p>
<p> This function is optional. You do not need to close the path every time. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let strokeFunction = `
<h2> stroke() </h2>
<p> This function strokes the outlines of the current shape. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let fillFunction = `
<h2> fill() </h2>
<p> This function fills the inside area of current paths. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let fillStyleProperty = `
<h2> fillStyle = COLOR </h2>
<p> The <code class="codeBlue">fillStyle</code> property can define the color of the shapes. </p>
<p> Here are some examples of <code class="codeBlue">fillStyle</code> you can try: 
<ul>
<li><code class="codeNavy">ctx.<code class="codeBlue">fillStyle</code> = "<code class="codeOrange">orange</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">fillStyle</code> = "<code class="codeOrange">#38Bfe7</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">fillStyle</code> = "<code class="codeOrange">rgb(0, 255, 0)</code>"</code></li>
</ul>
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let strokeStyleProperty = `
<h2> strokeStyle = COLOR </h2>
<p> The <code class="codeBlue">strokeStyle</code> property can define the color of the strokes around the shapes. </p>
<p> Here are some examples of <code class="codeBlue">strokeStyle</code> you can try: 
<ul>
<li><code class="codeNavy">ctx.<code class="codeBlue">strokeStyle</code> = "<code class="codeOrange">blue</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">strokeStyle</code> = "<code class="codeOrange">#FF0000</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">strokeStyle</code> = "<code class="codeOrange">rgb(0, 255, 0)</code>"</code></li>
</ul>
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let globalAlphaProperty = `
<h2> globalAlpha = VALUE </h2>
<p> The globalAlpha property define the transparency of a shape. </p>
<p> The values of globalAlpha is a number between 0.0(fully transparent) and 1.0(fully opaque). The default value is 1.0.</code>. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let lineWidthProperty = `
<h2> lineWidth = VALUE </h2>
<p> The lineWidth property define the thickness of lines. </p>
<p> The values of lineWidth is a number. The default value is 1.0. </p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let lineCapProperty = `
<h2> lineCap = VALUE </h2>
<p> The lineCap property define the shape of the end point of lines. </p>
<p> Possible values of lineCap includes: 
<ul>
<li><code class="codeOrange">"butt"</code></li>
<li><code class="codeOrange">"round"</code></li>
<li><code class="codeOrange">"square"</code></li>
</ul>
The default value is <code class="codeOrange">"butt"</code>.
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let lineJoinProperty = `
<h2> lineJoin = VALUE </h2>
<p> The lineJoin property define the corners where two or more lines intersect. </p>
<p> Possible values of lineJoin includes: 
<ul>
<li><code class="codeOrange">"bevel"</code></li>
<li><code class="codeOrange">"round"</code></li>
<li><code class="codeOrange">"miter"</code></li>
</ul>
The default value is <code class="codeOrange">"miter"</code>.
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let fillTextFunction = `
<h2> fillText(text, x, y, maxWidth) </h2>
<p> This function draw a filled text. </p>
<p> Parameters: 
<ul>
<li><code class="codeBlue">text</code> : A string that specifies the content of text. </li>
<li><code class="codeBlue">x</code> : The x-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">y</code> : The y-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">y</code> : The y-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">maxWidth</code> : An optional parameters that limits the width of text. </li>
</ul>
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let strokeTextFunction = `
<h2> strokeText(text, x, y, maxWidth) </h2>
<p> This function draw the outlines of the text. </p>
<p> Parameters: 
<ul>
<li><code class="codeBlue">text</code> : A string that specifies the content of text. </li>
<li><code class="codeBlue">x</code> : The x-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">y</code> : The y-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">y</code> : The y-axis coordinate of the start of the text. </li>
<li><code class="codeBlue">maxWidth</code> : An optional parameters that limits the width of text. </li>
</ul>
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let fontProperty = `
<h2> font = VALUE </h2>
<p> The font property define the text font, such as size, weight, and family. </p>
<p> Here are some examples of font you can try: 
<ul>
<li><code class="codeNavy">ctx.<code class="codeBlue">font</code> = "<code class="codeOrange">normal 30px Arial</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">font</code> = "<code class="codeOrange">bolder 30px Arial</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">font</code> = "<code class="codeOrange">normal smaller Arial</code>"</code></li>
<li><code class="codeNavy">ctx.<code class="codeBlue">font</code> = "<code class="codeOrange">normal 30px serif</code>"</code></li>
</ul>
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let textAlignProperty = `
<h2> textAlign = VALUE </h2>
<p> The textAlign property define the text alignment. </p>
<p> Possible values of textAlign includes: 
<ul>
<li><code class="codeOrange">"left"</code></li>
<li><code class="codeOrange">"right"</code></li>
<li><code class="codeOrange">"center"</code></li>
<li><code class="codeOrange">"start"</code></li>
<li><code class="codeOrange">"end"</code></li>
</ul>
The default value is <code class="codeOrange">"start"</code>.
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let textBaselineProperty = `
<h2> textBaseline = VALUE </h2>
<p> The textBaseline property define the text baseline, which is the line upon which most letters sit. </p>
<p> Possible values of textBaseline includes: 
<ul>
<li><code class="codeOrange">"top"</code></li>
<li><code class="codeOrange">"hanging"</code></li>
<li><code class="codeOrange">"middle"</code></li>
<li><code class="codeOrange">"alphabetic"</code></li>
<li><code class="codeOrange">"ideographic"</code></li>
<li><code class="codeOrange">"bottom"</code></li>
</ul>
The default value is <code class="codeOrange">"alphabetic"</code>.
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

let directionProperty = `
<h2> direction = VALUE </h2>
<p> The direction property define the direction of text. </p>
<p> Possible values of direction includes: 
<ul>
<li><code class="codeOrange">"ltr"</code> : left-to-right direction. </li>
<li><code class="codeOrange">"rtl"</code> : right-to-left direction. </li>
<li><code class="codeOrange">"inherit"</code> : text direction is inherit from the <code class="codeNavy">&lt;canvas&gt;</code> element. </li>
</ul>
The default value is <code class="codeOrange">"inherit"</code>.
</p>
<button id="function-back-button" onClick="backButtonClicked()">Back</button>
`;

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

FunctionMap.set("fillRect-button", fillRectFunction);
FunctionMap.set("strokeRect-button", strokeRectFunction);
FunctionMap.set("clearRect-button", clearReactFunction);
FunctionMap.set("beginPath-button", beginPathFunction);
FunctionMap.set("moveTo-button", moveToFunction);
FunctionMap.set("lineTo-button", lineToFunction);
FunctionMap.set("arc-button", arcFunction);
FunctionMap.set("closePath-button", closePathFunction);
FunctionMap.set("stroke-button", strokeFunction);
FunctionMap.set("fill-button", fillFunction);
FunctionMap.set("fillStyle-button", fillStyleProperty);
FunctionMap.set("strokeStyle-button", strokeStyleProperty);
FunctionMap.set("globalAlpha-button", globalAlphaProperty);
FunctionMap.set("lineWidth-button", lineWidthProperty);
FunctionMap.set("lineCap-button", lineCapProperty);
FunctionMap.set("lineJoin-button", lineJoinProperty);
FunctionMap.set("fillText-button", fillTextFunction);
FunctionMap.set("strokeText-button", strokeTextFunction);
FunctionMap.set("font-button", fontProperty);
FunctionMap.set("textAlign-button", textAlignProperty);
FunctionMap.set("textBaseline-button", textBaselineProperty);
FunctionMap.set("direction-button", directionProperty);


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

/* Function Button Clicked */
function showFunctionDetail(functionId) {

  document.getElementById("instructionContent").innerHTML = FunctionMap.get(functionId);

  document.getElementById("prev-button").style.visibility = "hidden";
  document.getElementById("next-button").style.visibility = "hidden";
}

function backButtonClicked() {
  document.getElementById("prev-button").style.visibility = "visible";
  document.getElementById("next-button").style.visibility = "visible";

  update()
}

/* Canvas that draw the grid */

/* create a canvas and append it to grid-div */
var grid = document.createElement('canvas');
grid.id = "grid-canvas";
grid.width = 400;
grid.height = 300 ;

var body = document.getElementById("grid-div");
body.appendChild(grid);

/* draw the grid */
var gctx = grid.getContext('2d');

gctx.beginPath();
gctx.lineWidth = 1;
gctx.strokeStyle = "gray";

for (let x = 30; x <= 300; x += 30) {
  gctx.moveTo(x, 30);
  gctx.lineTo(x, 300);
}

for (let y = 30; y <= 300; y += 30) {
  gctx.moveTo(30, y);
  gctx.lineTo(300, y);
}

gctx.stroke();

/* draw a point at (0, 0) */
gctx.beginPath();
gctx.arc(30, 30, 5, 0, 2 * Math.PI, true);
gctx.fill();

gctx.beginPath();
gctx.font = '15px serif';
gctx.fillText("(0,0)", 15, 15)

/* draw a point at (5, 3) */
gctx.beginPath();
gctx.arc(180, 120, 5, 0, 2 * Math.PI, true);
gctx.fill();

gctx.beginPath();
gctx.font = '15px serif';
gctx.fillText("(5,3)", 165, 105)
