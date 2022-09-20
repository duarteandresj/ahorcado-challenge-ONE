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
  "Libro","Murcielago","Notebook","Oracle","Puerta","Queso","Ropero","Sarten","Telefono","Urna","Ventisca","Walkman","Xilofono","YoYo","Zapato"
];
let index = parseInt(Math.random() * palabrasGuardadas.length);
let letrasEquivocadas=[];
let palabraSecreta = palabrasGuardadas[index].toUpperCase();
let palabra=[];
for(i=0;i<palabraSecreta.length;i++){palabra.push('-')}
// console.log(palabrasGuardadas);
// ayuda();

const pantallaJugar=document.querySelector(".maquetado");
pantallaJugar.addEventListener(
  "keydown",
  (event) => {
    var keyValue = event.key.toUpperCase();
    let exp = new RegExp("^[A-Z]$");
   
    if (exp.test(keyValue)) {
    
      letraEncontrada = palabraSecreta.includes(keyValue);

      if (!letraEncontrada && !letrasEquivocadas.includes(keyValue)) {
        console.log(`Letra ${keyValue} no incluida`);
        letrasEquivocadas.push(keyValue);
        console.log(letrasEquivocadas);
        let fin=letrasEquivocadas.length>=7;
        if(fin){console.log("findeljuego()")}
      } else if(letrasEquivocadas.includes(keyValue)){
        console.log("Letra repetida")
      }
      else {
        console.log(
          `la letra ${keyValue} se repite ${contarOcurrencias(
            keyValue,
            palabraSecreta
          )} veces`
        )
        console.log(`Su posicion es: ${muestraPosicionOcurrencia(keyValue, palabraSecreta)}`);
        
      }
    }
  },
  false
);



function contarOcurrencias(x, miCadena) {
  let cuenta = 0;
  posicion = miCadena.indexOf(x);
  while (posicion != -1) {
    cuenta++;
    posicion = miCadena.indexOf(x, posicion + 1);
  }
  return cuenta;
}
function muestraPosicionOcurrencia(letra, Palabra) {
  let posiciones = [];
  posa=0;
  pos=0;
  while (pos!=-1) {
    pos=Palabra.indexOf(letra, posa);   
    posa=pos+1;
    if(pos!=-1) {posiciones.push(pos+1);
    ponerLetra(pos,letra)}
  }
  return posiciones;
}
function ayuda(){
console.log(palabra)
}

function ponerLetra(pos,key){
    palabra[pos]=key;
    console.log(palabra)
  
}