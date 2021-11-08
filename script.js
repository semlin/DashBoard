var a = 3;
console.log(a);


function changeColor() {
  console.log(document.getElementById('di1').classList);
  console.log(document.getElementById('di1').classList.item(1));
  var b = document.getElementById('di1').classList.item(1)
  console.log("Je log b");
  console.log(b);

  document.getElementById("di1").classList.replace(b, "bg-warning")
  console.log(document.getElementById('di1').classList);
}
changeColor()
