function append(value){
  document.getElementById("result").value += value;
}

function clearAll(){
  document.getElementById("result").value = "";
}

function del(){
  let a = document.getElementById("result").value;
  document.getElementById("result").value = a.slice(0, -1);
}

function calculate(){
  try{
    let output = eval(document.getElementById("result").value);
    document.getElementById("result").value = output;
  } catch{
    document.getElementById("result").value = "Error";
  }
}
