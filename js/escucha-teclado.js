let keyValue = "";
const exp = new RegExp("^[A-Z]$");
document.addEventListener("keydown", (event) => {
  if (escuchaTeclado) {
    keyValue = event.key.toUpperCase();
    let letraValida = exp.test(keyValue);
    if (letraValida && errores < 7 && !finDeJuego) {
      if (
        palabraSecreta.includes(keyValue) &&
        !letrasEquivocadas.includes(keyValue)
      ) {
        adicionarLetraCorrecta(palabraSecreta.indexOf(keyValue));
        for (let i = 0; i < palabraSecreta.length; i++) {
          if (palabraSecreta[i] === keyValue) {
            escribirLetraCorrecta(i);
          }
        }
      } else if (!letrasEquivocadas.includes(keyValue)) {
        letrasEquivocadas.push(keyValue);
        escribirLetraIncorrecta(keyValue, errores);
        errores++;
        dibujarMuñeco(errores);
      }
    }
  }
});

document.addEventListener("keyup", () => {
  if (escuchaTeclado) {
    finDeJuego =
      contarLetrasUnicas(palabraCorrecta) == contarLetrasUnicas(palabraSecreta);
    if (errores === 7) {
      setTimeout(() => {
        escribirPantalla1("Perdiste, T.T", "red");
        escribirPantalla2(`La palabra era: ${palabraSecreta}`);
      }, 100);
    } else if (finDeJuego) {
      setTimeout(() => {
        escribirPantalla1("Ganaste, felicitaciones", "green");
        escribirPantalla2(`La palabra era: ${palabraSecreta}`);
      }, 100);
    }
  }
});

/*Jengibre */
document.addEventListener("keydown", (event) => {
  if (escuchaTeclado&&jengibreSeleccionado) {
    keyValue = event.key.toUpperCase();
    let letraValida = exp.test(keyValue);
    if (letraValida && errores < 7 && !finDeJuego) {
      if (
        palabraSecreta.includes(keyValue) &&
        !letrasEquivocadas.includes(keyValue)
      ) {
        adicionarLetraCorrecta(palabraSecreta.indexOf(keyValue));
        for (let i = 0; i < palabraSecreta.length; i++) {
          if (palabraSecreta[i] === keyValue) {
            palabra[i]=keyValue;
          }
          $textArea.innerText=palabra;
        }
      } else if (!letrasEquivocadas.includes(keyValue)) {
        letrasEquivocadas.push(keyValue);
        errores++;
      
       
      }
      
      }cambiarImagenJS(errores)
      $textAreaIncorrectas.innerText=letrasEquivocadas;
  }
});

document.addEventListener("keyup", () => {
  if (escuchaTeclado&&jengibreSeleccionado) {
    finDeJuego =
      contarLetrasUnicas(palabraCorrecta) == contarLetrasUnicas(palabraSecreta);
    if (errores === 7) {
      setTimeout(() => {
        $textArea.innerText=`Perdiste, palabra: \n ${palabraSecreta}`; 
      }, 100);
    } else if (finDeJuego) {
      setTimeout(() => {
        $textArea.innerText="Ganaste, Felicitaciones";
      }, 100);
    }
  }
});
