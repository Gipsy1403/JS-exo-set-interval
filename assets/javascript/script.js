// exo 1****************************
// setTimeout(() => {
//   const welcome = document.getElementById('welcome');
//   welcome.textContent = "Bienvenue dans le monde du JavaScript !";
// }, 2000);

// exo 2 ********************************
// let seconds = 5; 
// const countdown = document.getElementById('countdown');

// const interval = setInterval(() => {
//     if (seconds > 0) {
//         countdown.textContent = seconds + " secondes restantes";
//         seconds--; 
//     } else {
//         countdown.textContent = "Go !";
//         clearInterval(interval); 
//     }
// }, 1000); 

// exo 3 *************************************
// const blink=document.getElementById("blink");

// setInterval(() => {
//  blink.style.visibility = (blink.style.visibility == "hidden" ? "" : "hidden");
// },500);

// exo4 ****************************************
let clock=document.getElementById("clock");
let h= new Date ();

setInterval(() => {
  h.getHours() + ":" + h.getMinutes() + ":" + h.getSeconds();
}, 1000);