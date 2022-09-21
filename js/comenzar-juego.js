const btnComenzar=document.querySelector(".btn-comenzar");
const maqueta=document.querySelector(".maquetado")
const btnHorca=document.querySelector(".horca__btn")
const btnJengibre=document.querySelector(".jengibre__btn")
const btnJuego=document.querySelector(".botonera-juego")
function mostrarTablero(){
 btnComenzar.parentElement.classList.toggle("invisible")
 setTimeout(() => {
    maqueta.classList.toggle("invisible")   
 }, 300);
 
}
function mostrarCanvas(){
    const $canvas=document.querySelector(".canvas");
    btnHorca.parentElement.classList.toggle("invisible");
    $canvas.parentElement.classList.toggle("invisible");
    btnJuego.classList.toggle("invisible")
}
function mostrarJengibre(){
    const $jengibre=document.querySelector(".jengibre");
    btnJengibre.parentElement.classList.toggle("invisible");
    $jengibre.parentElement.classList.toggle("invisible");
    btnJuego.classList.toggle("invisible")

}

btnComenzar.addEventListener("click",mostrarTablero)
btnHorca.addEventListener("click",mostrarCanvas)
btnJengibre.addEventListener("click",mostrarJengibre)
