fetch("includes/piedepagina.html").then(function(e){
    return e.text();
}).then(function(data){
    //console.log(data)
    document.getElementById("footer").innerHTML = data
});