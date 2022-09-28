const $btnAgregar = document.querySelector(".btn-pantalla-agregar");
const divPantallaAgregar = document.querySelector(".pantalla-principal__div");
const $textoDeEntrada = document.getElementById("agregar-palabra__txt");
const $btnAceptar = document.querySelector(".agrega-palabra");
const $btnCancelar = document.querySelector(".cancela-palabra");
let textoEsValido = false;
function mostrarUOcultarPantalla() {
  divPantallaAgregar.classList.toggle("invisible");
}
function validaTexto(mensaje) {
  let exp = new RegExp("^([A-Z])*$");
  if (exp.test(mensaje)) {
    textoEsValido = true;
  } else {
    textoEsValido = false;
  }
}
$btnAgregar.addEventListener("click", mostrarUOcultarPantalla);
$btnAceptar.addEventListener("click", () => {
  validaTexto($textoDeEntrada.value);
  if (textoEsValido) {
    palabrasGuardadas.push($textoDeEntrada.value);
    $textoDeEntrada.value = "";
    document.querySelector(".agregar__span").innerHTML="PALABRA AGREGADA";
    document.querySelector(".agregar__span").classList.remove("invisible");
    setTimeout(() => {
      document.querySelector(".agregar__span").classList.add("invisible");
    }, 1000);
  } else {
    document.querySelector(".agregar__span").classList.remove("invisible");
  }
});
$btnCancelar.addEventListener("click", () => {
  mostrarUOcultarPantalla();
  $textoDeEntrada.value = "";
});