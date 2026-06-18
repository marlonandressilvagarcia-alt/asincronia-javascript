function solicitarJSON(callback) {
    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 3000);
}

function reproducirAudio(callback) {
    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 1000);
}

function leerSensor(callback) {
    setTimeout(function() {
        console.log("Tarea completada.");
        callback();
    }, 500);
}

console.log("--- Iniciando procesos asíncronos ---");

solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));