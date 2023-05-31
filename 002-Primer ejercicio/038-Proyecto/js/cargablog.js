fetch("json/articulosblog.json").then(function(e){
    return e.json();
}).then(function(data){
    for(let i = 0;i<data.articulos.length;i++){
        titulo = data.articulos[i].titulo
        contenido = data.articulos[i].contenido
        imagen = data.articulos[i].imagen
        fecha = data.articulos[i].fecha
        document.getElementById("blog").innerHTML += "<article><img src='photo/"+imagen+"'><h4>"+titulo+"</h4><time>"+fecha+"</time><p>"+contenido+"</p></article>"
    }
});