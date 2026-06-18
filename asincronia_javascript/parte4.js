function simularDescarga (nombreArchivo, callback){
    console.log("Inicio la descarga")

    setTimeout(function(){
        console.log("tarea finalizada");
        callback();
    }, 4000);
}

simularDescarga("manual.pdf", () => {
    console.log("Archivo listo para abrir.");
});