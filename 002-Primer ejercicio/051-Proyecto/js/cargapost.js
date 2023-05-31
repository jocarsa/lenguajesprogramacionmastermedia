// En primer lugar cargo el json de los articulos del blog
fetch("json/articulosblog.json").then(function(e){
    // Lo devuelvo en formato json
    return e.json();
    // Ahora, una vez que lo tengo, lo voy a procesar
}).then(function(data){
    console.log(data)
    // Para cada uno de los articulos que hay en el json
    for(let i = 0;i< data.articulos.length;i++){
        // Primero miro la URL
        const url = window.location.search;
        // Una vez que tengo la URL, de la misma, saco los parametros
        const parametros = new URLSearchParams(url);
        // De esos parámetros, saco uno que se llama id
        const identificador = parametros.get('id')
        // Solo te quedas con aquel articulo cuyo id coincida con el de la URL
        if(i == identificador){
            // Solo en el caso de que sea cierto, me quedo con ese articulo
            // Me quedo con el titulo
            titulo = data.articulos[i].titulo
            // Me quedo con el contenido
            contenido = data.articulos[i].contenido
            // Me quedo con la imagen
            imagen = data.articulos[i].imagen
            // Me quedo con la fecha
            fecha = data.articulos[i].fecha
            texto = data.articulos[i].texto
            // Y lo pongo en pantalla
            document.getElementById("post").innerHTML += "<article><img src='photo/"+imagen+"'><h4>"+titulo+"</h4><time>"+fecha+"</time><p>"+contenido+"</p><p>"+texto+"</p></article>"
        }
    }
});
