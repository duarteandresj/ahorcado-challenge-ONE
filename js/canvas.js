let $canvas = document.querySelector(".canvas");
let pincel = $canvas.getContext("2d");
let width = $canvas.width;
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
  pincel.fillText(palabraSecreta[index], width / 2 - 300 + ancho * index, 430);
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  pincel.font = "bold 20px Inter";
  pincel.fillStyle = "red";
  let ancho = width / 2 / palabraSecreta.length;
  pincel.fillText(letra, width / 2 - 280 + 30 * errorsLeft, 470, ancho);
}

// function verificarLetraYaClicada(key) {
//   let salida=false;
//    if (letrasEquivocadas.includes(key)) {
//     salida=true;
//   }
//   return salida;
// }

function adicionarLetraCorrecta(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase();
}

document.addEventListener(
  "keydown",
  (event) => {
    let keyValue = event.key.toUpperCase();
    let exp = new RegExp("^[A-Z]$");
    if (exp.test(keyValue)&&errores<9) {
      if (
        palabraSecreta.includes(keyValue) &&
        !letrasEquivocadas.includes(keyValue)
      ) {
        console.log(keyValue);
        adicionarLetraCorrecta(palabraSecreta.indexOf(keyValue));
        for (let i = 0; i < palabraSecreta.length; i++) {
          if (palabraSecreta[i] === keyValue) {
            escribirLetraCorrecta(i);
          }
        }
      }
      else if(!letrasEquivocadas.includes(keyValue)){
        letrasEquivocadas.push(keyValue);
        escribirLetraIncorrecta(keyValue, errores);
        errores++;
      }
    }else if(errores=9){
      alert("fin de juego");
    } 
  },
  false
);
