fetch("includes/cabeza.html").then(function(e){
    return e.text();
}).then(function(data){
    //console.log(data)
    document.getElementById("cabeza").innerHTML = data
});