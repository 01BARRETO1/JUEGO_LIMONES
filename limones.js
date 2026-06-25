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
//constantes de limon 
const ANCHO_LIMON=20;
const ALTO_LIMON=20;


function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
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
    detectarColision();
}
//moverDerecha
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    detectarColision();
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
    detectarColision();
}

function detectarColision(){
    if(limonX+ANCHO_LIMON>personajeX && limonX< personajeX+ANCHURA_PERSONAJE
        && limonY+ALTO_LIMON>personajeY && limonY< personajeY+ALTURA_PERSONAJE){
        alert("POKEMON ATRAPADO");

    }
}