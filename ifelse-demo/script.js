let num1 = document.getElementById("num1");
createOption(num1, {
  0:0, 
  1:1, 
  2:2, 
  3:3, 
  4:4, 
  5:5, 
  6:6, 
  7:7,
  8:8, 
  9:9
});

let num2 = document.getElementById("num2");
createOption(num2, {
  0:0, 
  1:1, 
  2:2, 
  3:3, 
  4:4, 
  5:5, 
  6:6, 
  7:7,
  8:8, 
  9:9
});

let op = document.getElementById("op");
createOption(op, {
  "<":0,
  ">":1, 
  "=":2
});

document.getElementById("run").onclick = calculate;
function calculate(){
  console.log("Hey I'm running");
  switch(op){
    case 0:
      if(num1 < num2) alert("True");
      else alert("False")
      break;
  }
}