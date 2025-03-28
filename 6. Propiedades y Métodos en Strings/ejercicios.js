// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.
let frase = "JavaScript es genial"
console.log(`--- método length --- La longitud de la variable "frase" es ${frase.length}`) 

// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
console.log(`--- método indexOF --- posición de la palabra "genial" --> ${frase.indexOf("genial")}`)

// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
console.log(`--- método slice --- extraer la palabra "JavaScript" --> ${frase.slice(0, 11)}`)

// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
let nombreCompleto = "   Juan Pérez   "
console.log(`--- método trim --- eliminar espacios en blanco de "${nombreCompleto}"; resultado --> "${nombreCompleto.trim()}"`)

// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.
const cancion = "Twinkle, twinkle, little star"
console.log(`--- método split --- dividir la variable "cancion" (${cancion}), resultado --> ${cancion.split(' ')}`)