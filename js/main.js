var text = document.getElementById("text").addEventListener("input", select);
var sel = "";
var num = 0;
function select(event) {
  var x = event.target.value;
  sel = x;

  if (sel == "Audi") num = 3;
  else if (sel == "BMW") num = 1;
  else if (sel == "Mersedes") num = 2;
  else sel = "";
  console.log(sel);
  console.log(num);
  console.log("New text");
}
