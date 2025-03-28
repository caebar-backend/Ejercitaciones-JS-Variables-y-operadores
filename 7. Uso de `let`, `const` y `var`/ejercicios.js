// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
try{

{
let x = 10;
}

console.log(x); // Error: x no está definida

} catch (error) {
    console.log(`---- ERROR: x no está definida! ---> ` + error.message);
}

// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
const PI = 3.14159
try{
    PI = 2.71
    } catch (error) 
    {
        console.log(`---- ERROR: No se puede reasignar el valor de PI! ---> ` + error.message);
 }

// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.
try {
    var mensaje = "Hola Mundo"
    console.log(`---! Valor de la variable "mensaje" antes de la función --> ${mensaje}`)

    function mostrarMensaje() {
      mensaje = "Hola desde la función"
      console.log(`---! Valor de la variable "mensaje" dentro de la función --> ${mensaje}`)
    }

    console.log(`---! Valor de la Variable "mensaje" después de la función --> ${mensaje}`)

    mostrarMensaje()

    console.log(`---! Valor de la Variable "mensaje" después de llamar a la función --> ${mensaje}`)

} catch (error) {
    console.log(`---- ERROR: No se puede mostrar el mensaje! ---> ` + error.message);
} 

