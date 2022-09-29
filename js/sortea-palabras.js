let palabrasGuardadas = [
  "Arbol",
  "Banco",
  "Casa",
  "Diente",
  "Escalera",
  "Fosforo",
  "Garra",
  "Hilo",
  "Iman",
  "Judias",
  "Kiosco",
  "Libro",
  "Murcielago",
  "Notebook",
  "Oracle",
  "Puerta",
  "Queso",
  "Ropero",
  "Sarten",
  "Telefono",
  "Urna",
  "Ventisca",
  "Walkman",
  "Xilofono",
  "YoYo",
  "Zapato",
];
let letrasEquivocadas = [];
let palabraCorrecta = "";
let palabraSecreta;
let errores = 0;
let escuchaTeclado = false;
let finDeJuego = false;
let palabra=[];

function iniciarJuego() {
  let indice = parseInt(Math.random() * palabrasGuardadas.length);
  palabraSecreta = palabrasGuardadas[indice].toUpperCase();
  errores = 0;
  palabraCorrecta = "";
  letrasEquivocadas = [];
  escuchaTeclado = true;
  palabra=[];
  rellenarPalabra();
  $textArea.innerText=palabra;
  $textAreaIncorrectas.innerText="";
  cambiarImagenJS(errores);
}

function contarLetrasUnicas(algunString) {
  algunString = algunString.toUpperCase();
  let aux=[];
  for(let i=0;i<algunString.length;i++){
    if(!aux.includes(algunString[i]))
      aux.push(algunString[i]);
  }
  return aux.length;
}

function rellenarPalabra(){
  if(jengibreSeleccionado){
    for(let i=0;i<palabraSecreta.length;i++){
      palabra[i]=" _ "
    }
  }
}