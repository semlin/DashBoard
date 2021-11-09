
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

//Fonction qui concatène une variable compteur pour ensuite sortir l'id d'une case
function updateDiv(){
  while (i != divAupdt){
    i++
    let z = 'di' + i
      changeColor(z)
  }
}

//Fonction qui va reload la page pour refresh les cellules
//Call en async car il doit être non bloquant et en dehors de la boucle principal
//L'echelle temps est en ms
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 60000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: resolved car la fct reslve after le renvois
  // Passer ensuite le rechargement de page
  location.reload();
}





updateDiv()
asyncCall();
