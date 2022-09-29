document.getElementById("img").addEventListener("click",cambiarImagenJS())
let contador=1;
// function cambiarImagenJS(){
//     if(contador<7){contador++}else{contador=1};
// let ruta="./assets/img/ahorcado"
// let ext=".png"
// let rutaEntera=ruta.concat(contador).concat(ext);
//   document.getElementById("img").src=rutaEntera;
// }
function cambiarImagenJS(errorN){
  if(errorN>0&&errorN<=7){errorN}else{errorN=1};
let ruta="./assets/img/ahorcado"
let ext=".png"
let rutaEntera=ruta.concat(errorN).concat(ext);
document.getElementById("img").src=rutaEntera;
}
