var pagina = 0
var articulosporpagina = 8

function muestrablog(pagina){
    document.getElementById("numeropagina").innerHTML = pagina
    fetch("json/articulosblog.json").then(function(e){
        return e.json();
    }).then(function(data){
        for(let i = pagina*articulosporpagina;i<pagina*articulosporpagina+articulosporpagina;i++){
            titulo = data.articulos[i].titulo
            contenido = data.articulos[i].contenido
            imagen = data.articulos[i].imagen
            fecha = data.articulos[i].fecha
            document.getElementById("blog").innerHTML += "<article><img src='photo/"+imagen+"'><h4>"+titulo+"</h4><time>"+fecha+"</time><p>"+contenido+"</p></article>"
        }
    });
}

document.getElementById("anteriores").addEventListener("click", function(){
    document.getElementById("blog").innerHTML = ""
    pagina--
    muestrablog(pagina)
});
  

document.getElementById("siguientes").addEventListener("click", function(){
    document.getElementById("blog").innerHTML = ""
    pagina++
    muestrablog(pagina)
});

muestrablog(pagina);