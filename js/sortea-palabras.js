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
let palabraCorrecta="";
let palabraSecreta;
let errores=0;

function sortearPalabra() {
  let indice = parseInt(Math.random() * palabrasGuardadas.length);
  palabraSecreta = palabrasGuardadas[indice].toUpperCase();
  errores=0;
}