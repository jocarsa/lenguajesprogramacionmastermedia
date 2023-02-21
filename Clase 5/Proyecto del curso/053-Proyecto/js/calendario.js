console.log("hola")
// Creo una variable contador que vale 1
var casillas = 1;
//////////////////////PRIMERO CREO DIAS VACIOS//////////////////////
// Creo un objeto fecha
var fecha2 = new Date();
// Saco el día de la semana en el que empieza ese mes
var primerdia = new Date(fecha2.getFullYear(), fecha2.getMonth(), 1);
// Para cada uno de los días que hay antes de ese día
for(diaprevio = 0;diaprevio <= primerdia.getDate()+1;diaprevio++){
    // Creo un dia vacío
    document.getElementById("calendario").innerHTML += "<div class='dia'></div>"
    //document.writeln("<div class='dia'></div>");
    // Y sumo una casilla
    casillas++;
}
//////////////////////LUEGO CREO LOS DÍAS DEL MES//////////////////////
// Voy a hacer algo para cada uno de los días del mes
for(let dia = 1;dia<=31;dia++){
    // Creo un nuevo objeto fecha (Date en Javascript)
    var fecha = new Date();
    // La clase por defecto es "ninguna" ("")
    var clase = ""
    // En el caso de que el dia del calendario coincida con el día de hoy
    if(dia == fecha.getDate()){
        // Solo en ese caso, la clase equivale a "seleccionado"
        clase = "seleccionado"
    }
    // Creo un elemento en el documento con la clase y el dia correspondiete
    document.getElementById("calendario").innerHTML += "<div class='dia "+clase+"'>"+dia+"</div>"
    //document.writeln("<div class='dia "+clase+"'>"+dia+"</div>");
    // En el caso de que el casilla sea 7,14,21,28 (resto entero es cero) 
    if(casillas % 7 == 0){
        // Deja de flotar
        document.getElementById("calendario").innerHTML += "<div style='clear:both'></div>"
       //document.writeln("<div style='clear:both'></div>"); 
    }
    // Cada vez que añado un día, sumo una casilla
    casillas++;
}