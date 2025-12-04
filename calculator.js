function append(v){
  document.getElementById('result').value += v;
}

function clearAll(){
  document.getElementById('result').value = '';
}

function delChar(){
  let t = document.getElementById('result').value;
  document.getElementById('result').value = t.slice(0, -1);
}

function calculate(){
  try{
    let ans = eval(document.getElementById('result').value);
    document.getElementById('result').value = ans;
  }catch{
    document.getElementById('result').value = 'Error';
  }
}
