//function that display value
function showNumber(val) {
  document.getElementById("result").value += val;
}

//We use DOM to select id and add functions in it
function compute() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
