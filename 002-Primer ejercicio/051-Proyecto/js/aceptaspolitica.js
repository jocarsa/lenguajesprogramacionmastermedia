document.getElementById("aceptas").addEventListener("click",function(){
    console.log("Has hecho click")
    document.getElementById("enviar").removeAttribute("disabled")
    document.getElementById("enviar").style.background = "rgb(200,255,200)"
})