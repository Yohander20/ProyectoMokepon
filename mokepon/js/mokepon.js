
let ataqueJugador
let ataqueEnemigo2
let vidasJugador=3
let vidasEnemigo=3
    



function iniciarJuego(){
    let ocultarBotonReiniciar=document.getElementById('reiniciar')
    ocultarBotonReiniciar.style.display='none'
      
    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='none'

    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador,seleccionarMascotaEnemigo)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonAgua=document.getElementById('boton-agua') 
    botonAgua.addEventListener('click',ataqueAgua)
   
    let botonReiniciar=document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function ataqueEnemigo(){
    let ataqueAleatorioEne=aleatorio(1,3)
    //let spanAtaqueEnemigo1=document.getElementById('ataque-enemigo')
    
    if(ataqueAleatorioEne==1){
        //spanAtaqueEnemigo1.innerHTML='FUEGO'
        ataqueEnemigo2='FUEGO'
    } else if(ataqueAleatorioEne==2){
        //spanAtaqueEnemigo1.innerHTML='AGUA'
        ataqueEnemigo2='AGUA'
    }else if(ataqueAleatorioEne==3){
        //spanAtaqueEnemigo1.innerHTML='TIERRA'
        ataqueEnemigo2='TIERRA'
    }
    combate()
}

function crearMensaje(resultado){
    let sectionMensajes=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    parrafo.innerHTML='La mascota ataco con ' +ataqueJugador +',la mascota del enemigo ataco con '+ataqueEnemigo2+ "-" +resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    
    let ocultarBotonReiniciar=document.getElementById('reiniciar')
    ocultarBotonReiniciar.style.display='block'
    
    let sectionMensajes=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    parrafo.innerHTML=resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.disabled=true
    
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.disabled=true

    let botonAgua=document.getElementById('boton-agua') 
    botonAgua.disabled=true
}

function combate(){
  
    let spanVidasJugador=document.getElementById('vidasJugador')
    let spanVidasEnemigos=document.getElementById('vidasEnemigo')
    

                   
                            if(ataqueEnemigo2==ataqueJugador){
                            crearMensaje('EMPATE')
                            } else if(ataqueJugador=='FUEGO' && ataqueEnemigo2=='TIERRA'){
                            crearMensaje('GANASTE')
                            vidasEnemigo--
                            spanVidasEnemigos.innerHTML=vidasEnemigo
                            }else if(ataqueJugador=='AGUA' && ataqueEnemigo2=='FUEGO'){
                            crearMensaje('GANASTE')
                            vidasEnemigo--
                            spanVidasEnemigos.innerHTML=vidasEnemigo
                                }else if(ataqueJugador=='TIERRA' && ataqueEnemigo2=='AGUA'){
                            crearMensaje('GANASTE')
                            vidasEnemigo--
                            spanVidasEnemigos.innerHTML=vidasEnemigo
                            }else{
                            crearMensaje('PERDISTE')
                            vidasJugador--
                            spanVidasJugador.innerHTML=vidasJugador
                            } 
       revisarVidas()
                    }
                    
function revisarVidas(){
    if(vidasEnemigo==0){
       crearMensajeFinal("Felicidades Ganaste 🎉🎉")
    }else if(vidasJugador==0){
        crearMensajeFinal("Has perdido 😢")
    }

    
}
              

function ataqueFuego(){
 
    ataqueJugador='FUEGO'
    ataqueEnemigo()
    alert(ataqueJugador)
}
function ataqueAgua(){
   
    ataqueJugador='AGUA'
    ataqueEnemigo()
    alert(ataqueJugador)
}
function ataqueTierra(){
    
    ataqueJugador='TIERRA'
    ataqueEnemigo()
    alert(ataqueJugador)
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'

    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='flex'

    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let SpanMascotaJugador=document.getElementById('mascota-jugador')
    

    if (inputHipodoge.checked){
        SpanMascotaJugador.innerHTML='Hipodoge'
        alert("Has seleccionado hipodoge")
    }else if(inputCapipepo.checked){
        alert("Has seleccionado capipepo")
        SpanMascotaJugador.innerHTML='Capipepo'
    }else if(inputRatigueya.checked){
        SpanMascotaJugador.innerHTML='Ratigueya'
        alert("Has seleccionado Ratigueya") 
    }else{
        alert("Debes seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio=aleatorio(1,3)
    let spanMacotaEnemigo=document.getElementById('mascota-enemigo')
    if(mascotaAleatorio==1){
        spanMacotaEnemigo.innerHTML='Hipodoge'
    }else if(mascotaAleatorio==2){
        spanMacotaEnemigo.innerHTML='Capipepo'
    }else{
        spanMacotaEnemigo.innerHTML='Ratigueya'
    }

}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load',iniciarJuego)

