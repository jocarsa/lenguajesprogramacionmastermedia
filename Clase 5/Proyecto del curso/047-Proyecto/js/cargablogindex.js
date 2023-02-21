fetch("json/articulosblog.json").then(function(e){
    return e.json();
}).then(function(data){
    for(let i = 0;i<4;i++){
        titulo = data.articulos[i].titulo
        contenido = data.articulos[i].contenido
        document.getElementById("blog").innerHTML += "<article><img src='photo/imagenblog.png'><h4>"+titulo+"</h4><p>"+contenido+"</p></article>"
    }
});