fetch("json/proximoseventos.json").then(function(e){
    return e.json();
}).then(function(data){
    for(let i = 0;i<data.eventos.length;i++){
        fechadeinicio = data.eventos[i].fechadeinicio
        duracion = data.eventos[i].duracion
        nombre = data.eventos[i].nombre
        lugar = data.eventos[i].lugar
        document.getElementById("eventos").innerHTML += "<tr><td>"+fechadeinicio+"</td><td>"+duracion+"</td><td>"+nombre+"</td><td>"+lugar+"</td></tr>"
    }
});