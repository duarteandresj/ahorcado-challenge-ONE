const btnAgregar = document.querySelector(".btn-agregar");
const divPantallaAgregar = document.querySelector(".pantalla-principal__div");
const $textoDeEntrada = document.getElementById("agregar-palabra__txt");
let textoEsValido = true;
function mostrarUOcultarPantalla() {divPantallaAgregar.classList.toggle("invisible");
}

btnAgregar.addEventListener("click", mostrarUOcultarPantalla);


$textoDeEntrada.addEventListener("input",function(){
    validaTexto($textoDeEntrada.value)
    if(!textoEsValido){
       console.log("ERROR")
    }else{
        console.log("Ok")
    }
})
function validaTexto(mensaje) {
    if (/^([A-Z])+$/.test(mensaje)) {
      textoEsValido = true;
    } else {
      return (textoEsValido = false);
    }
}  