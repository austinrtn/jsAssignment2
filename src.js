var inputs = [];

function getValues(){
  let values = [];

  for(var input of inputs){
    let selectedInput = document.getElementById(input);
    let val = parseInt(selectedInput.value)
    if(isNaN(val) == false ) values.push(val);
  }

  if(values.length > 0)
    return values;
    
  else return null;
}

function getAverage(){
  let avg = (getValues().reduce((a, b) => a + b, 0) / getValues().length);
  let roundedAvg = avg.toFixed(2);
  document.getElementById("answer").value = roundedAvg;
}

function getMin(){
  let min = Math.min(...getValues());
  let roundedMin = min.toFixed(2);
  document.getElementById("answer").value = (roundedMin);
}

function getMax(){
  let min = Math.max(...getValues());
  let roundedMin = min.toFixed(2);
  document.getElementById("answer").value = (roundedMin);
}

function addInput(){
  let id = "x" + (inputs.length+1);
  document.getElementById("inputDiv").insertAdjacentHTML('beforeEnd', " <input type='number' id='"+id+"'> ");
  inputs.push(id);
}

function reset(){
  document.getElementById("answer").value = 0;
  document.getElementById("inputDiv").innerHTML = "";
  for(var i = 0; i < 2; i++) addInput();
}
