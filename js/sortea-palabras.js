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

function iniciarJuego() {
  let indice = parseInt(Math.random() * palabrasGuardadas.length);
  palabraSecreta = palabrasGuardadas[indice].toUpperCase();
  errores = 0;
  palabraCorrecta = "";
  letrasEquivocadas = [];
  escuchaTeclado = true;
}

function contarLetrasUnicas(palabra) {
  palabra = palabra.toUpperCase();
  let max = 0;
  for (let i = 0; i < palabra.length; i++) {
    let aux = palabra.indexOf(palabra[i]) + 1;
    if (aux > max) {
      max = aux;
    }
  }
  return max;
}
