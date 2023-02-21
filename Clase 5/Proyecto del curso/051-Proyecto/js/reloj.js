function bucle(){
                
    var fecha = new Date()
    var hora = fecha.getHours()
    var minuto = fecha.getMinutes()
    var segundo = fecha.getSeconds()
    console.log("son las "+hora+":"+minuto+":"+segundo)

    var unahora = Math.PI*2/12
    var unminuto = Math.PI*2/60
    var unsegundo = Math.PI*2/60

    correccion = -Math.PI/2

    var longitudmanecillahoras = 50
    var longitudmanecillaminutos = 70
    var longitudmanecillasegundos = 80
    var contexto = document.getElementById("reloj").getContext("2d")
    contexto.clearRect(0,0,200,200)
    contexto.lineWidth = 5
    contexto.beginPath()
    contexto.arc(100,100,80,0,Math.PI*2,true)
    contexto.stroke()
    // horas
    contexto.lineWidth = 15
    contexto.beginPath()
    contexto.moveTo(100,100)
    contexto.lineTo(
        100+Math.cos(hora*unahora+correccion)*longitudmanecillahoras,
        100+Math.sin(hora*unahora+correccion)*longitudmanecillahoras
    )
    contexto.stroke()
    // minutos
    contexto.lineWidth = 5
    contexto.beginPath()
    contexto.moveTo(100,100)
    contexto.lineTo(
        100+Math.cos(minuto*unminuto+correccion)*longitudmanecillaminutos,
        100+Math.sin(minuto*unminuto+correccion)*longitudmanecillaminutos
    )
    contexto.stroke()
    // segundos
    contexto.lineWidth = 2
    contexto.beginPath()
    contexto.moveTo(100,100)
    contexto.lineTo(
        100+Math.cos(segundo*unsegundo+correccion)*longitudmanecillasegundos,
        100+Math.sin(segundo*unsegundo+correccion)*longitudmanecillasegundos
    )
    contexto.stroke()
    // circulin
    contexto.beginPath()
    contexto.arc(100,100,10,0,Math.PI*2,true)
    contexto.fill()
    clearTimeout(temporizador)
    temporizador = setTimeout("bucle()",1000)
}

var temporizador = setTimeout("bucle()",1000)