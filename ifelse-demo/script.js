

let op = document.getElementById("op");
createOption(op, {
  '<':'<', 
  '>':'>', 
  '=':'='
});


function calculate(){
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;


  if(op.value == '&lt;'){
    if(num1 < num2){
      alert("True!");
    }else{
      //Add explanation as to why it's wrong in the real demo box.
      alert("False!");
    }
  }

  if(op.value == '='){
    if(num1 == num2){
      alert("True!");
    }else{
      alert("False!");
    }
  }

  if(op.value == '&gt;'){
    if(num1 > num2){
      alert("True");
    }else{
      alert("False");
    }
  }
}
 
