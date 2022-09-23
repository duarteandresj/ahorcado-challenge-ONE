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
let palabra = [];
let palabraSecreta;

function sortearPalabra() {
  let indice = parseInt(Math.random() * palabrasGuardadas.length);
  palabraSecreta = palabrasGuardadas[indice].toUpperCase();
}

function muestraPosicionOcurrencia(letra, palabra) {
  let posiciones = [];
  posa = 0;
  pos = 0;
  while (pos != -1) {
    pos = palabra.indexOf(letra, posa);
    posa = pos + 1;
    if (pos != -1) {
      posiciones.push(pos + 1);
      ponerLetra(pos, letra);
    }
  }
  return posiciones;
}
function ponerLetra(pos, key) {
  palabra[pos] = key;
  palabra.toString();
  console.log(palabra);
}

/*
document.addEventListener(
  "keydown",
  (event) => {
    let keyValue = event.key.toUpperCase();
    let exp = new RegExp("^[A-Z]$");
    //!palabraSecreta.trim.length == 0
    if (exp.test(keyValue) ) {
      let letraIncluida = palabraSecreta.includes(keyValue);
      if(!letrasEquivocadas.includes(keyValue)){
        console.log("letra repetida")
      }
      if (!letraIncluida) {
        letrasEquivocadas.push(keyValue);
        console.log(letrasEquivocadas)
      } else {
        console.log(
          `Su posicion es: ${muestraPosicionOcurrencia(
            keyValue,
            palabraSecreta
          )}`
        );
      }
    }
  },
  false
);
*/