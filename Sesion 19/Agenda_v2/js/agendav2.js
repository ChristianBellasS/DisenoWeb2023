function guardarDatos(){
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    localStorage.setItem(nombre,movil);
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    actualizarDatos();
} 

function buscarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);

}

function eliminarDatos(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodos(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro ="";
    if (localStorage.length === 0) {
        registro += '<li> vacío </li>';
    }else{
        for (let i = 0; i <= localStorage.length -1; i++) {
            var key = localStorage.key(i);
            registro += '<li>' + '<span class = "nom">' + key + '</span>' + 
            '<span class = "nom" >' + localStorage.getItem(key) + '</span> </li> <br>' ;
        }
    }
    document.getElementById("contactos").innerHTML = registro;
}