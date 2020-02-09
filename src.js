var inputs = [];

function getValues(){
  let values = [];

  for(var value of inputs){
    let val = parseInt(value.val());
    if(isNaN(val) == false ) values.push(val);
  }

  if(values.length > 0)
    return values;
  else return [0];
}

function getAverage(){
  let avg = (getValues().reduce((a, b) => a + b, 0) / getValues().length);
  let roundedAvg = avg.toFixed(2);
  $("#answer").val(roundedAvg);
}

function getMin(){
  let min = Math.min(...getValues());
  let roundedMin = min.toFixed(2);
  $("#answer").val(roundedMin);
}

function getMax(){
  let min = Math.max(...getValues());
  let roundedMin = min.toFixed(2);
  $("#answer").val(roundedMin);
}

function addInput(){
  let id = "x" + (inputs.length+1);
  $("#inputDiv").append(" <input type='number' id='"+id+"'> ");
  inputs.push($("#"+id));
}

function reset(){
  $("#answer").val(0);
  $("#inputDiv").html("");
  for(var i = 0; i < 5; i++) addInput();
}
