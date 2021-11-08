
var a = 3;

//Nombre de case du dashboard a refresh
var divAupdt = 9;

//Compteur d'iteration
var i = 0;

//Random pour tests
var rdm = 3;

console.log(a);

//Fonction pour avoir des nombres randoms
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Fonction qui color la case en fction d'un random
function changeColor(z) {
  var b = document.getElementById(z).classList.item(1)
  rdm = getRandomInt(3);

  if ( rdm == 0){
    document.getElementById(z).classList.replace(b, "bg-success")
  }
  else if ( rdm == 1){
    document.getElementById(z).classList.replace(b, "bg-warning")
  }
  else if ( rdm == 2){
    document.getElementById(z).classList.replace(b, "bg-danger")
  }
}


function updateDiv(){
  while (i != divAupdt){
    i++
    let z = 'di' + i
      changeColor(z)
  }


}




updateDiv()
