function comparar(){
    var a = 2;
    var b = 3;
    if (a == b)
        alert("A y B son iguales");
    else
        alert("A y B son diferentes");
}

function resta(x,y){
    var rest = x - y;
    document.write("<h2> La resta es: " + rest + "</h2>")
}

function suma(x,y){
    var sum = x + y;
    document.getElementById("sumar").innerHTML = "La suma es:" + sum;
}

function escribir(){
    valor = document.getElementById("Entrada").value;
    document.getElementById("contenido").innerHTML = " >" + valor;
}

