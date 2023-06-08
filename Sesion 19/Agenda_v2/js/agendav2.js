function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.movil = document.getElementById("movil").value;

} 

function recuperarDatos(){
    if(localStorage.nombre != undefined && localStorage.movil != undefined){
        document.getElementById("datos").innerHTML = "Nombre: " + " Num Celular: <br>" + localStorage.nombre + localStorage.movil;
    } else {
        document.getElementById("datos").innerHTML = "No has ingresado tus datos en la agenda";
    }  
}

function eliminarDatos(){

}

function eliminarTodos(){
    
}
