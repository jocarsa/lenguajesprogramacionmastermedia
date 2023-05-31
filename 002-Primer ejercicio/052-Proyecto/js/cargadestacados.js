fetch("json/destacados.json").then(function(e){
    return e.json();
}).then(function(data){
    for(let i = 0;i<3;i++){
        titulo = data.destacados[i].titulo
        contenido = data.destacados[i].contenido
        imagen = data.destacados[i].imagen
        document.getElementById("destacados").innerHTML += "<article><img src='photo/"+imagen+"'><h3>"+titulo+"</h3><p>"+contenido+"</p></article>"
    }
});