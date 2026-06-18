function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}


function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}


// TODO
function restar(a, b) {
    console.log("Resultado Resta:", a - b);
}


// TODO
function multiplicar(a, b) {
    console.log("Resultado Multiplicar:", a * b);
}


realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);


// TODO
// Implementar las tres operaciones.


function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");

    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}

console.log("Inicio del programa.");

tareaNoBloqueante(function() {
    console.log("Continuando después de la tarea.");
});

console.log("Fin del programa.");
