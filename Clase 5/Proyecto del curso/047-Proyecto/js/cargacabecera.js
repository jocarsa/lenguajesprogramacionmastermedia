fetch("includes/cabecera.html").then(function(e){
    return e.text();
}).then(function(data){
    //console.log(data)
    document.getElementById("header").innerHTML = data
});