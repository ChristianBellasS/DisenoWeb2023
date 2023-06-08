function mostrarDescripcion() {
    var combo = document.getElementById("productoSelect");

    var imagen = document.getElementById("productoImagen");
    var descripcionProd = document.getElementById("productoDescripcion");


    var producto = combo.value;
    var descripcion = "";
    var imgSrc = "";

    switch (producto) {
        case "laptop":
            descripcion = "La laptop es un dispositivo portatil para realizar tareas en diferentes aplicaciones";
            imgSrc = "img/laptop01.jpg"
            break;

        case "telefono":
            descripcion = "Es un dispositivo con el cual podemos comunicarnos , realizar llamadas y enviar mensajes";
            imgSrc = "img/telefono.jpg"
            break;

        case "tablet":
            descripcion = " es un dispositivo híbrido entre una laptop y un telefono celular";
            imgSrc = "img/tablet.jpeg"
            break;

        default:
            descripcion = "";
            imgSrc = ""
    }

    imagen.src = imgSrc;
    descripcionProd.textContent = descripcion;


}