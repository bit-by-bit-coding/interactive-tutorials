const positionArray = ['static', 'relative', 'fixed', 'absolute', 'sticky'];

let count = 0;

const cycleArray = () => {
  let index = count % positionArray.length;
  document.getElementById('position-property').innerText = positionArray[index];
  count++;
};

setInterval(cycleArray, 1500);

let instructions0 = `
<h2>Fixed</h2>
<p>An element that is fixed remains in the exact same place on the page, even as the page is scrolled.</p>
<p>It is also positioned relative to the viewable area of your screen, and its position can be is affected by the top, right, bottom, and left properties.</p>
`;

let demo0 = `
<p>The header on this page that reads "CSS POSITION DEMO" for example, is a demonstration of using a fixed value for the position property. Test it out! Try scrolling the page up and down and watch as the header stays at the top of the page.</p>
`;

let instructions1 = `
<h2>Sticky</h2>
<p>A sticky element is positioned relative to the blue container until it reaches a specified offset position on the viewable area of your screen. Once it reaches this specified offset, it then behaves as an element with position fixed.</p>
<p>In the example to the right, the image of the bit by bot is sticky, and the top of the container has been specified as the offset position. Intially, the image will behave with position relative, and scroll along with the rest of the content until it reaches the top. Then, it will remain position fixed at the top as you continue scrolling.</p>
`;

let demo1 = `
<div class="scroll">
<h3>Bit By Bit - A Tongue Twister</h3>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<img class="bit-by-bot-sticky" src="../assets/bit-by-bot-images/computer-open-bot.svg" alt="Bit by Bot Using a Computer"/>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<p> Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog. Bit by bit, the bit-by-bot builds its blog.</p>
</div>
`;

let instructions2 = `
<h2>Static & Relative</h2>
<p>As mentioned previously, all elements are positioned static by
default. This means that they will respect the normal flow of the page and, unlike the other postion values, are not affected by the top, right, bottom, and left properties.</p>
<p>However, using relative positioning, you can have an element that not only respects the normal flow of the page, but is also affected by the top, bottom, left, and right properties.</p>
<p>Currently, the orange div to the right is positioned static. Change it's position to relative in order to enable the use of the top and left properties. Then using those same properties, watch how the orange div moves relative to it's previously static position as indicated by the gray, dotted div. *Note: You enter numbers from -30 to 30.</p>
<form class="form-style">
<div class="inner-form-style">
<div>
<label for="select1">Position:</label>
<select id="select1" name="example1" onchange="setDisplay(this)">
<option value="static">static</option>
<option value="relative">relative</option>
</select>
</div>
<div>
<label for="top1">Top:</label>
<input id="top1" name="top" type="number" min="-30" max="30" disabled/>
</div>
<div>
<label for="left1">Left:</label>
<input id="left1" name="left" type="number" min="-30" max="30" disabled/>
</div>
</div>
</form>
`;

let demo2 = `
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<div class="relative example1">Position me!<div class="static example1"></div></div>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
`;

let instructions3 = `
<h2>Relative & Absolute</h2>
<p>As mentioned previously, elements positioned relative respect the normal flow of the page and are affected by the top, right, bottom, and left properties.</p>
<p>However, absolute positioning, while being affected by the top, right, bottom, and left properties, does not respect the normal flow of the page. When an element is positioned absolute, it is removed from the normal flow of the page and can overlap other elements. An absolute positioned element is also positioned relative to its closest a relative position ancestor.</p>
<p>Currently, the both the orange and blue divs to the right are positioned relative. Change the blue div's position to absolute, and making use of the top and left properties, watch how the blue div moves relative to it's relative positioned ancestor, the orange div and it's contents. *Note: You enter numbers from -30 to 30.</p>
<form class="form-style">
<div class="inner-form-style">
<div>
<label for="select2">Position:</label>
<select id="select2" name="example2" onchange="setDisplay2(this)">
<option value="relative">relative</option>
<option value="absolute">absolute</option>
</select>
</div>
<div>
<label for="top2">Top:</label>
<input id="top2" name="top" type="number" min="-30" max="30" disabled/>
</div>
<div>
<label for="left2">Left:</label>
<input id="left2" name="left" type="number" min="-30" max="30" disabled/>
</div>
</div>
</form>
`;

let demo3 = `
<div class="relative example2">
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<div class="absolute example2">Position me!</div>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
<p>Bit by bit, the bit-by-bot builds its blog.</p>
</div>
`;

let page = 0;

const instructionArray = [
  instructions0,
  instructions1,
  instructions2,
  instructions3,
];
const demoArray = [demo0, demo1, demo2, demo3];

const instruction = document.getElementById('instruction');
const demo = document.getElementById('demo');
const back = document.getElementById('back');
const next = document.getElementById('next');

instruction.innerHTML = instructionArray[page];
demo.innerHTML = demoArray[page];

back.addEventListener('click', function () {
  page < 1 ? (page = 3) : (page -= 1);
  instruction.innerHTML = instructionArray[page];
  demo.innerHTML = demoArray[page];
  page2(page === 2);
  page3(page === 3);
});

next.addEventListener('click', function () {
  page >= 3 ? (page = 0) : (page += 1);
  instruction.innerHTML = instructionArray[page];
  demo.innerHTML = demoArray[page];
  page2(page === 2);
  page3(page === 3);
});

let top1;
let left1;
let staticExample1;
let relativeExample1;

const setDisplay = (element) => {
  if (element.value === 'static') {
    relativeExample1.style.top = '0px';
    relativeExample1.style.left = '0px';
    staticExample1.style.top = '-3px';
    staticExample1.style.left = '-3px';
    top1.disabled = true;
    left1.disabled = true;
    top1.value = '';
    left1.value = '';
  } else if (element.value === 'relative') {
    top1.disabled = false;
    left1.disabled = false;
    top1.value = 0;
    left1.value = 0;
  } else {
    relativeExample1.style[element.name] = element.value + 'px';
    let staticValue = -3 + element.value * -1;
    staticExample1.style[element.name] = staticValue + 'px';
  }
};

let top2;
let left2;
let relativeExample2;
let absoluteExample2;

const setDisplay2 = (element) => {
  if (element.value === 'relative') {
    absoluteExample2.style.position = 'relative';
    absoluteExample2.style.top = '0px';
    absoluteExample2.style.left = '0px';
    top2.disabled = true;
    left2.disabled = true;
    top2.value = '';
    left2.value = '';
  } else if (element.value === 'absolute') {
    absoluteExample2.style.position = 'absolute';
    top2.disabled = false;
    left2.disabled = false;
    top2.value = 0;
    left2.value = 0;
  } else {
    absoluteExample2.style[element.name] = element.value + 'px';
  }
};

const page2 = (check) => {
  if (check) {
    top1 = document.getElementById('top1');
    left1 = document.getElementById('left1');
    staticExample1 = document.querySelectorAll('.static.example1')[0];
    relativeExample1 = document.querySelectorAll('.relative.example1')[0];

    document.getElementById('top1').addEventListener('change', function () {
      let v = parseInt(this.value);
      if (v < -30) this.value = -30;
      if (v > 30) this.value = 30;
      setDisplay(this);
    });
    document.getElementById('left1').addEventListener('change', function () {
      let v = parseInt(this.value);
      if (v < -30) this.value = -30;
      if (v > 30) this.value = 30;
      setDisplay(this);
    });
  }
};

const page3 = (check) => {
  if (check) {
    top2 = document.getElementById('top2');
    left2 = document.getElementById('left2');
    relativeExample2 = document.querySelectorAll('.relative.example2')[0];
    absoluteExample2 = document.querySelectorAll('.absolute.example2')[0];

    document.getElementById('top2').addEventListener('change', function () {
      let v = parseInt(this.value);
      if (v < -30) this.value = -30;
      if (v > 30) this.value = 30;
      setDisplay2(this);
    });

    document.getElementById('left2').addEventListener('change', function () {
      let v = parseInt(this.value);
      if (v < -30) this.value = -30;
      if (v > 30) this.value = 30;
      setDisplay2(this);
    });
  }
};
