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
let indice = parseInt(Math.random() * palabrasGuardadas.length);
palabraSecreta = palabrasGuardadas[indice].toUpperCase();


document.addEventListener(
  "keydown",
  (event) => {
    let keyValue = event.key.toUpperCase();
    let exp = new RegExp("^[A-Z]$");
    if (exp.test(keyValue) && !palabraSecreta.trim.length == 0) {
      let letraIncluida = palabraSecreta.includes(keyValue);
      if (!letraIncluida && !letrasEquivocadas.includes(keyValue)) {
        letrasEquivocadas.push(keyValue);
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

function muestraPosicionOcurrencia(letra, Palabra) {
  let posiciones = [];
  posa = 0;
  pos = 0;
  while (pos != -1) {
    pos = Palabra.indexOf(letra, posa);
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
