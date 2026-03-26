const cria = document.getElementById("mainImage");
const btn = document.getElementById("btnImage");
const btnFerline = document.getElementById("btnFerline");

const imagens = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = imagens.puto;
            }

            if(contador == 60){
                cria.src = imagens.morto;
            }
        }, 1000);
}

function alimentar() {

    cria.src = imagens.comendo;
    contador = 0;

    console.log("comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = imagens.alimentado;

        time_out = setTimeout(() => {
            cria.src = imagens.normal;
        }, 2000);

    }, 1000);
}

controlador();