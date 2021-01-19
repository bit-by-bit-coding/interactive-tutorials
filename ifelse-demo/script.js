let resultBox = document.getElementById("result");

let op = document.getElementById("op");
createOption(op, {
  '<':'<', 
  '>':'>', 
  '===':'===',
  '<=':'<=',
  '>=':'>='
});


function calculate(){
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;


  if(op.value == '<'){
    if(num1 < num2){
      resultBox.style.backgroundColor = "green";
      resultBox.innerText = "True!";
    }else{
      resultBox.style.backgroundColor = "red";
      if(num1 > num2){
        resultBox.innerText = `This is false because number 1:${num1} is greater than number 2:${num2}.`;
      }else if(num1 == num2){
        resultBox.innerText = `This is false because number 1:${num1} is equal to number 2:${num2}, and not smaller than it.`;
      }
    }
  }

  if(op.value == '==='){
    if(num1 == num2){     
      resultBox.style.backgroundColor = "green";
      resultBox.innerText = "True!";
    }else{
      resultBox.style.backgroundColor = "red";
      resultBox.innerText = `This is false because number 1: ${num1} is not equal to number 2: ${num2}.`;
    }
  }

  if(op.value == '>'){
    if(num1 > num2){
      resultBox.style.backgroundColor = "green";
      resultBox.innerText = "True!";
    }else{
      resultBox.style.backgroundColor = "red";
      if(num1 < num2){
        resultBox.innerText = `This is false because number 1: ${num1} is smaller than number 2: ${num2}.`;
      }else if(num1 == num2){
        resultBox.innerText = `This is false because number 1: ${num1} is equal to number 2: ${num2}, and not strictly greater than it.`;
      }
    }
  }

  if(op.value == '<='){
    if(num1 <= num2){     
      resultBox.style.backgroundColor = "green";
      resultBox.innerText = "True!";
    }else{
      resultBox.style.backgroundColor = "red";
      resultBox.innerText = `This is false because number 1: ${num1} is greater than number 2: ${num2}.`;
    }
  }

  if(op.value == '>='){
    if(num1 >= num2){     
      resultBox.style.backgroundColor = "green";
      resultBox.innerText = "True!";
    }else{
      resultBox.style.backgroundColor = "red";
      resultBox.innerText = `This is false because number 1: ${num1} is smaller than number 2: ${num2}.`;
    }
  }
}
 
