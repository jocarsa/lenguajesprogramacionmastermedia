var elementos = document.getElementsByTagName("div")
for(var i = 0;i<elementos.length;i++){
    elementos[i].addEventListener("click",function(){
        console.log("hola")
    })
}
