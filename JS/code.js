//criando uma variavel de ESTADO para armaznr o estado do jogo (quais elementos q estao mostrando)
// c: cabelo, b: blusa, s: short, t:sapatos

var estado = {
    c : 0,
    b : 0,
    s : 0,
    t : 0
}

// FUNCAO para mudar o CABELO

function proximoCabelo(){
    console.log("dentro da funçao proximoCabelo")
    console.log(estado.c);
    var cabelo=document.getElementById("cabelo");

    if(estado.c===0){
        cabelo.setAttribute("class", "cabelo1");
        estado.c++;
        console.log(estado.i);
    }
    else
        if(estado.c===1) {
            cabelo.setAttribute("class", "cabelo2");
            estado.c=0;
            console.log(estado.c);
    }
}
    
function proximaBlusa() {
    console.log("dentro da funçao proximaBlusa");
    console.log(estado.b);
    var blusa=document.getElementById("blusa");
    
    if(estado.b===0){
        blusa.setAttribute("class", "blusa1")
        estado.b++;
        console.log(estado.b);
    } 
    else if(estado.b===1) {
        blusa.setAttribute("class", "blusa2");
        estado.b++;
        console.log(estado.b);
    }
    else if(estado.b===2) {
        blusa.setAttribute("class", "blusa3");
        estado.b++;
        console.log(estado.b);
    }
    else if(estado.b===3) {
        blusa.setAttribute("class", "blusa4");
        estado.b++;
        console.log(estado.b);
    }
    else if(estado.b===4) {
        blusa.setAttribute("class", "blusa5");
        estado.b=0;
        console.log(estado.b);
    }
}

function proximoShort(){
    console.log("dentro da funcao proximoShort");
    console.log(estado.s);
    var shorts=document.getElementById("shorts");

    if(estado.s===0){
        shorts.setAttribute("class", "shorts1");
        estado.s++;
        console.log(estado.s);
    }
    else if(estado.s===1){
        shorts.setAttribute("class", "shorts2");
        estado.s=0;
        console.log(estado.s);

    }

}

function proximoSapato(){
    console.log("dentro da funcao proximoSapato");
    console.log(estado.t);
    var sapato=document.getElementById("sapato");

    if(estado.t===0){
        sapato.setAttribute("class", "sapato1");
        estado.t++;
        console.log(estado.t);
    }
    else if(estado.t===1){
        sapato.setAttribute("class", "sapato2");
        estado.t++;
        console.log(estado.t);
    }
    else if(estado.t===2){
        sapato.setAttribute("class", "sapato3");
        estado.t=0;
        console.log(estado.t);
    }

}
    


window.onload=init;

function init(){
    console.log("JANELA CARREGOU");
    estado.c=0;
    estado.b=0;
    estado.s=0;
    estado.t=0;
}