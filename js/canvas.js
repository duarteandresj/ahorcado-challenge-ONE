import{palabra} from "/js/sortea-palabras.js"
let pantalla = document.querySelector(".canvas");
let pincel = pantalla.getContext("2d");
let width = pantalla.width;
/*HORCA*/
pincel.strokeStyle = "brown";
pincel.beginPath();
pincel.moveTo(width / 2, 50);
pincel.lineTo(width / 2, 20);
pincel.lineTo(width / 2 - 175, 20);
pincel.lineTo(width / 2 - 175, 380);
pincel.moveTo(width / 2 - 250, 380);
pincel.lineTo(width / 2 - 100, 380);
pincel.stroke();

/*Cabeza */
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.arc(width / 2, 80, 30, 0, 2 * Math.PI);
pincel.stroke();
/*Cuerpo 125*/
pincel.beginPath();
pincel.moveTo(width / 2, 110);
pincel.lineTo(width / 2, 235);
pincel.stroke();
/* brazo*/
pincel.beginPath();
pincel.moveTo(width / 2, 110);
pincel.lineTo(width / 2 + 50, 110 + 50);
pincel.stroke();
/*brazo */
pincel.beginPath();
pincel.moveTo(width / 2, 110);
pincel.lineTo(width / 2 - 50, 110 + 50);
pincel.stroke();
/*Pierna */
pincel.beginPath();
pincel.moveTo(width / 2, 235);
pincel.lineTo(width / 2 + 50, 235 + 50);
pincel.stroke();
/*Pierna */
pincel.beginPath();
pincel.moveTo(width / 2, 235);
pincel.lineTo(width / 2 - 50, 235 + 50);
pincel.stroke();

escribirTexto(width/2-250,420,
palabra.toString())

function escribirTexto(x, y, texto) {
  pincel.font = "26px Georgia";
  pincel.fillStyle = "blue";
  pincel.fillText(texto, x, y);
}
