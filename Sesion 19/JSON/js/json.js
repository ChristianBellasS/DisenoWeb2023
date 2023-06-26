window.onload = function(){
    var objJason = {
        "personas" : [
            {"Nombre": "Jorge", "edad" : 23},
            {"Nombre": "Maria", "edad" : 46},
            {"Nombre": "Tomas", "edad" : 29},
            {"Nombre": "Damian", "edad" : 20},
            {"Nombre": "Mateo", "edad" : 32},
        ]
    };

for (let i = 0; i < 5; i++) {
    texto = objJason.personas[i].Nombre + "" +  objJason.personas[i].edad + "<br>";
    
    document.getElementById("contenido").innerHTML += texto
}
}