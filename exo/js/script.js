
// https://developer.mozilla.org/fr/docs/Web/Events

/* ------------------------------------------------- */

// Gestion du temps
// Fonction qui permet de déclencher une action après une certaine durée
// setTimeout(<nom de la fonction ou une fonction anonyme>, <délai en ms>)
setTimeout(()=> {
  console.log('il vient de se passer 10s');
}, 10000);


// Fonction qui permet de définir des intervalles pour une réexcution d'une fonction <=> Tous les .... faire
// setInterval(<nom de la fonction ou anonyme>, <delais en ms>)
var iterateur = 120;
var intervalleTest = setInterval(()=> {
  console.log(iterateur);
  iterateur--;
}, 1000);

// Nettoyer ou eteindre mon interval
setTimeout(()=> {
  // pour arrêter l'interval
  clearInterval(intervalleTest);
}, 120000);


/* ------------------------------------------------- */
var container = document.querySelector('#container');
var movingSquare = document.querySelector('#square');
var speed = 70;
movingSquare.style.top = '0px';
movingSquare.style.left = '0px';


document.addEventListener('keydown', (event) => {
  var top = parseInt(movingSquare.style.top);
  var left = parseInt(movingSquare.style.left);

  if (event.key == 'ArrowRight') {
    if(left < 570) {
      left += speed; //left = left + speed
    }
  }
  if (event.key == 'ArrowLeft') {
    if(left > 0) {
      left -= speed; 
    }
  }
  if (event.key == 'ArrowDown') {
    if(top < 570) {
      top += speed; 
    }
  }
  if (event.key == 'ArrowUp') {
    if (top > 0) {
      top -= speed;
    }
  }

  

  movingSquare.style.left = left + 'px';
  movingSquare.style.top = top + 'px';
});


                      ///////////////////////////compteur//////////////////////////////////////////



//  var count=0
//  document.getElementById("square").onclick=function(){
// count=count+1;
//   this.innerHTML=count}

var dd=document.querySelector('#square');
var chasseur=document.querySelector('#hunt');
var cannard=document.querySelector('#duck');
var temps=document.querySelector('#time');

  var scorechasseur=0;

dd.addEventListener('click',compteurChasseur);
temps.addEventListener(compteurTemps);

function compteurChasseur(){
  scorechasseur ++;
  chasseur.innerText = scorechasseur;

}
function compteurTemps(){
  scoretemps --;
  temps.innerText = scoretemps;

}
