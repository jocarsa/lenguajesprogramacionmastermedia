// Quiero un contador que va sumando numeros
var contador = 1

// Dentro de un segundo ejecuta repite
var temporepite = setTimeout("repite()",1000)
// Repite es una función que se ejecuta ella misma cada segundo
function repite(){
    // Cada vez que se repite aumenta una unidad al contador
    contador++
    // En el momento en el que el contador llegue a diez
    if(contador > 10){
        // Muestrame el modal
        document.getElementById("modalfondo").style.display = "block"
    }
    // Borra el temporizador
    clearTimeout(temporepite)
    // Y lo vuelve a ejecutar dentro de X segundo
    temporepite = setTimeout("repite()",1000)
}
// Añado un comportamiento de mousemove a la web para que el siguiente código se ejecute cuando mueva el raton
document.addEventListener('mousemove', function(event){
    console.log(event)
    // Cada vez que muevo el raton, el contador vuelve a 1
    contador = 1
});

/*
setTimeout(function(){
    console.log("ok te lo muestro")
    document.getElementById("modalfondo").style.display = "block"
},5000)
*/