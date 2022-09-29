let $canvas = document.querySelector(".canvas");
let pincel = $canvas.getContext("2d");
let width = $canvas.width;

function dibujarMuñeco(key) {
  switch (key) {
    case 1 /*HORCA*/:
      pincel.strokeStyle = "brown";
      pincel.beginPath();
      pincel.moveTo(width / 2, 50);
      pincel.lineTo(width / 2, 20);
      pincel.lineTo(width / 2 - 175, 20);
      pincel.lineTo(width / 2 - 175, 380);
      pincel.moveTo(width / 2 - 250, 380);
      pincel.lineTo(width / 2 - 100, 380);
      pincel.stroke();
      break;
    case 2 /*Cabeza */:
      pincel.strokeStyle = "black";
      pincel.beginPath();
      pincel.arc(width / 2, 80, 30, 0, 2 * Math.PI);
      pincel.stroke();
      break;
    case 3 /*Cuerpo 125*/:
      pincel.beginPath();
      pincel.moveTo(width / 2, 110);
      pincel.lineTo(width / 2, 235);
      pincel.stroke();
      break;
    case 4 /* brazo*/:
      pincel.beginPath();
      pincel.moveTo(width / 2, 110);
      pincel.lineTo(width / 2 + 50, 110 + 50);
      pincel.stroke();
      break;
    case 5 /*brazo */:
      pincel.beginPath();
      pincel.moveTo(width / 2, 110);
      pincel.lineTo(width / 2 - 50, 110 + 50);
      pincel.stroke();
      break;
    case 6 /*Pierna */:
      pincel.beginPath();
      pincel.moveTo(width / 2, 235);
      pincel.lineTo(width / 2 + 50, 235 + 50);
      pincel.stroke();
      break;
    case 7 /*Pierna */:
      pincel.beginPath();
      pincel.moveTo(width / 2, 235);
      pincel.lineTo(width / 2 - 50, 235 + 50);
      pincel.stroke();
      break;

    default:
      break;
  }
}
function dibujarLineas() {
  pincel.strokeStyle = "blue";
  pincel.beginPath();
  let ancho = width / 2 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    pincel.moveTo(width / 2 - 250 + ancho * i, 440);
    pincel.lineTo(width / 2 - 300 + ancho * i, 440);
    pincel.stroke();
  }
}

function escribirLetraCorrecta(index) {
  pincel.font = "bold 26px Inter";
  pincel.fillStyle = "blue";
  let ancho = width / 2 / palabraSecreta.length;
  pincel.fillText(palabraSecreta[index], width / 2 - 285 + ancho * index, 430);
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  pincel.font = "bold 20px Inter";
  pincel.fillStyle = "red";
  let ancho = width / 2 / palabraSecreta.length;
  pincel.fillText(letra, width / 2 - 280 + 30 * errorsLeft, 470, ancho);
}

function adicionarLetraCorrecta(i) {
  if(!palabraCorrecta.includes(palabraSecreta[i])){
   palabraCorrecta += palabraSecreta[i].toUpperCase();}
}
function escribirPantalla1(mensaje,color) {
  $canvas.width=$canvas.width//limpia la pantalla del canvas
  pincel.font = "bold 50px Inter";
  pincel.fillStyle = color;
  pincel.fillText(mensaje, width /4 , 240);
}

function escribirPantalla2(mensaje) {
  pincel.font = "bold 38px Inter";
  pincel.fillStyle = "black";
  pincel.fillText(mensaje, width /6 , 300);
}
