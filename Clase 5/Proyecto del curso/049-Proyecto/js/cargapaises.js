fetch("json/paises.json").then(function(e){
    return e.json();
}).then(function(data){
    for(let i = 0;i<data.countries.length;i++){
        pais = data.countries[i].name_es
        dial_code = data.countries[i].dial_code
        document.getElementById("pais").innerHTML += "<option>"+pais+" - "+dial_code+"</option>"
    }
});