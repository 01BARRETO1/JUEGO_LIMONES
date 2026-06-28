let canvas= document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHURA_PERSONAJE=30;

let personajeX=canvas.width/2
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);

//variables para limon
let limonX=canvas.width/2;
let limonY=0;
//Variable puntaje
let puntaje=0;
//variable vidas
let vidas=3;
//variable velocidadCaida
let velocidadCaida=200;
//constantes de limon 
const ANCHO_LIMON=20;
const ALTO_LIMON=20;


function iniciar(){
    setInterval(bajarMelon,velocidadCaida);//primer parametro: funcion, segundo parametro: tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    //dibujarLimon();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="#40114A";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="#0729be";
    ctx.fillRect(personajeX,personajeY,ANCHURA_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    detectarAtrapado();
}
//moverDerecha
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    detectarAtrapado();
}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function dibujarLimon(){
    ctx.fillStyle="#0fc017";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);

}

function bajarMelon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    //velocidad del limon
    
    //
    if(limonX+ANCHO_LIMON>personajeX && limonX< personajeX+ANCHURA_PERSONAJE
        && limonY+ALTO_LIMON>personajeY && limonY< personajeY+ALTURA_PERSONAJE){
        //alert("POKEMON ATRAPADO");
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpam("txtPuntaje",puntaje);
        if(puntaje==3){
            velocidadCaida=150;
            setInterval(bajarMelon,velocidadCaida);

        }else if(puntaje==6){
            velocidadCaida=100;
            setInterval(bajarMelon,velocidadCaida);
        }else if(puntaje==10){
            alert("YOU ARE WINNER!!!");
        }

    }
}

function detectarPiso(){
    if(limonY+ALTO_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1
        mostrarEnSpam("txtVidas",vidas);
        if(vidas==0){
            alert("Perdiste!");

        }
    }
}

/* function probarAleatorio(){
    let aleatorio=generarAleatorio(10,80);
    console.log(aleatorio);
} */

function aparecerLimon(){
    limonX= generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY= 0;
    actualizarPantalla();
}