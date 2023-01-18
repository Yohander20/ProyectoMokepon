let triunfos=0 
let perdidas=0

while(triunfos<3 && perdidas<3){
    pc=aleatorio(1,3)
        jugador=prompt("elije 1 para piedra, 2 para papel y 3 para tijera")
    //alert("elegiste "+jugador)
    alert("PC Elige " +eleccion(pc))
    alert("jugador elige "+eleccion(jugador))

    //combate
    if(pc==jugador){
    alert("Empate");
    } else if(jugador==1 && pc==3){
    alert("Ganaste")
    triunfos=triunfos+1
    }else if(jugador==2 && pc==1){
    alert("GANASTE")
    triunfos=triunfos+1
        }else if(jugador==3 && pc==2){
    alert("GANASTE")
    triunfos=triunfos+1
    }else{
    alert("PERDISTE")
    perdidas=perdidas+1
    } 

}
 
alert("ganaste "+triunfos +" veces. Perdiste "+perdidas+" veces.")

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function eleccion(jugada){
    let resultado=""
    if(jugada == 1){
    resultado="Piedra 🥌🥌";
    } else if(jugada == 2){
    resultado="Papel 🧻🧻";
    } else if(jugador == 3){
    resultado="Tijera ✂✂";
    }else{
    resultado="MAL ELEGIDO"
    } 
    return resultado;                   
}
