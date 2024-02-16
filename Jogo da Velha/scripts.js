const matriz = [[null , null, null], [null , null,null ], [ null,null , null]];
let posicoes = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
let c = 1
let jogador = false;
const marcador = "O";
let lista = []
let listaJogadas = []
const tag1 = document.querySelector('.p1');
const tag2 = document.querySelector('.p2');
const tag3 = document.querySelector('.p3');
const tag4 = document.querySelector('.p4');
const tag5 = document.querySelector('.p5');
const tag6 = document.querySelector('.p6');
const tag7 = document.querySelector('.p7');
const tag8 = document.querySelector('.p8');
const tag9 = document.querySelector('.p9');

// Vai ser executada uma vez depois de 1 segundo 
setTimeout(function(){
   const decisor = Math.floor(Math.random() * 4)
    if(decisor === 0){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X' 
        listaJogadas.push([0,0])
    } 
    if(decisor === 1){
        const tag1 = document.querySelector('.p3');
        tag1.innerHTML = 'X';
        matriz[0][2] = 'X' 
        listaJogadas.push([0,2])
    } 
    if(decisor === 2){
        const tag1 = document.querySelector('.p7');
        tag1.innerHTML = 'X';
        matriz[2][0] = 'X' 
        listaJogadas.push([2,0])
    } 
    if(decisor === 3){
        const tag1 = document.querySelector('.p9');
        tag1.innerHTML = 'X';
        matriz[2][2] = 'X' 
        listaJogadas.push([2,2])
    } 
}, 1000)


document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("p1")) {
        console.log("espaço 1")
        listaJogadas.push([0,0])
        jogoDaVelha(el);
        
    }
    if (el.classList.contains("p2")) {
        console.log("espaço 2")
        listaJogadas.push([0,1])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p3")) {
        console.log("espaço 3")
        listaJogadas.push([0,2])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p4")) {
        console.log("espaço 4")
        listaJogadas.push([1,0])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p5")) {
        console.log("espaço 5")
        listaJogadas.push([1,1])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p6")) {
        console.log("espaço 6")
        listaJogadas.push([1,2])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p7")) {
        console.log("espaço 7")
        listaJogadas.push([2,0])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p8")) {
        console.log("espaço 8")
        listaJogadas.push([2,1])
        jogoDaVelha(el);
    }
    if (el.classList.contains("p9")) {
        console.log("espaço 9")
        listaJogadas.push([2,2])
        jogoDaVelha(el);
    }
   
    console.log(el)
})


function jogoDaVelha(el) {
    if (el.classList.contains('p1')) {
        el.innerHTML = marcador;
        matriz[0][0] = marcador
    }
    if (el.classList.contains('p2')) {
        el.innerHTML = marcador;
        matriz[0][1] = marcador
    }
    if (el.classList.contains('p3')) {
        el.innerHTML = marcador;
        matriz[0][2] = marcador
    }
    if (el.classList.contains('p4')) {
        el.innerHTML = marcador;
        matriz[1][0] = marcador;
    }
    if (el.classList.contains('p5')) {
        el.innerHTML = marcador;
        matriz[1][1] = marcador;
    }
    if (el.classList.contains('p6')) {
        el.innerHTML = marcador;
        matriz[1][2] = marcador;
    }
    if (el.classList.contains('p7')) {
        el.innerHTML = marcador;
        matriz[2][0] = marcador;
    }
    if (el.classList.contains('p8')) {
        el.innerHTML = marcador;
        matriz[2][1] = marcador;
    }
    if (el.classList.contains('p9')) {
        el.innerHTML = marcador;
        matriz[2][2] = marcador;
    }

    jogaComputador();
    jogador = jogador ? false : true;


}



function matrizPosicao(indice, coluna){
    if(indice === 0  && coluna === 0){
        return tag1;
    } else if(indice === 0  && coluna === 1){
        return tag2;
    } else if(indice === 0  && coluna === 2){
        return tag3;
    } else if(indice === 1  && coluna === 0){
        return tag4;
    } else if(indice === 1  && coluna === 1){
        return tag5;
    } else if(indice === 1  && coluna === 2){
        return tag6;
    } else if(indice === 2  && coluna === 0){
        return tag7;
    } else if(indice === 2  && coluna === 1){
        return tag8;
    } else if(indice === 2  && coluna === 2){
        return tag9;
    } 
}


// Comecei fazendo manual, mas não deu muito resultado
function jogaComputador(){
    // let [linha,coluna] = listaJogadas[listaJogadas.length-1]
    if(c === 1){
        if((matriz[0][0] === null)) {tag1.innerHTML = 'X'; matriz[0][0] = 'X'}
        else if((matriz[0][2] === null)){ tag3.innerHTML = 'X'; matriz[0][2] = 'X'}
        else if((matriz[2][0] === null)){ tag7.innerHTML = 'X';matriz[2][0] = 'X'}
        else if((matriz[2][2] === null)){ tag9.innerHTML = 'X';matriz[2][2] = 'X'}
        c++;
    } else if(c === 2){
        if(previsorDefender()){
            console.log('previsor Defender')
            comparar7();
        }
        else if(previsorAtacar()){
            console.log('Previsor Atacar')
            comparar3();
        }
        else{
                console.log('verificando espaço em branco')
                let [indice, coluna] = verificaEspacoEmBranco();
                matriz[indice][coluna] = 'X';
                let posi = matrizPosicao(indice,coluna);
                posi.innerHTML = 'X'
        }
        

        if(verificaGanhador()){
            let h2 = document.querySelector('h2')
            h2.innerHTML = 'Voce perdeu';
            c++;    
        }
    }
    
    
}

function verificaEspacoEmBranco(){
    let a;
    for (let i = 0; i < matriz.length; i++) {
        for(let j = 0; j<matriz.length; j++){
            if(matriz[i][j] === null) return [i,j]; // retorna a posição livre
        }
    }
}




let marcador6 = 'X'
function comparar3(){
    if(matriz[1][0] === marcador6 && matriz[1][1] === marcador6 && matriz[1][2] === null){
        tag6.innerHTML = 'X';
        matriz[1][2] = 'X'
   
    }else if(matriz[0][0] === marcador6 && matriz[0][1] === marcador6 && matriz[0][2]=== null){
        tag3.innerHTML = 'X';
        matriz[0][2] = 'X'
   
    }else if(matriz[2][0] === marcador6 && matriz[2][1] === marcador6 && matriz[2][2]=== null){
        tag9.innerHTML = 'X';
        matriz[2][2] = 'X'
   
    } 

    else if(matriz[0][2] === marcador6 && matriz[0][1] === marcador6 && matriz[0][0]=== null){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X'
   
    }else if(matriz[1][2] === marcador6 && matriz[1][1] === marcador6 && matriz[1][0]=== null){
        tag4.innerHTML = 'X';
        matriz[1][0] = 'X'

    }else if(matriz[2][2] === marcador6 && matriz[2][1] === marcador6 && matriz[2][0]=== null){
        tag7.innerHTML = 'X';
        matriz[2][0] = 'X'

    } 

    else if(matriz[0][0] === marcador6 && matriz[1][0] === marcador6 && matriz[2][0]=== null){
        tag7.innerHTML = 'X';
        matriz[2][0] = 'X'

    }else if(matriz[0][1] === marcador6 && matriz[1][1] === marcador6 && matriz[2][1]=== null){
        tag8.innerHTML = 'X';
        matriz[2][1] = 'X'

    }else if(matriz[0][2] === marcador6 && matriz[1][2] === marcador6 && matriz[2][2]=== null){
        tag9.innerHTML = 'X';
        matriz[2][2] = 'X'
 
    }

    else if(matriz[2][0] === marcador6 && matriz[1][0] === marcador6 && matriz[0][0]=== null){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X'
        
    }else if(matriz[2][1] === marcador6 && matriz[1][1] === marcador6 && matriz[0][1]=== null){
        tag2.innerHTML = 'X';
        matriz[0][1] = 'X'
    
    }else if(matriz[1][2] === marcador6 && matriz[2][2] === marcador6 && matriz[0][2]=== null){
        tag3.innerHTML = 'X';
        matriz[0][2] = 'X'
   
    }
// Novo
    else if(matriz[0][0] === marcador6 && matriz[2][0] === marcador6 && matriz[1][0]=== null){
        tag4.innerHTML = 'X';
        matriz[1][0] = 'X'
   
    }
    else if(matriz[0][1] === marcador6 && matriz[2][1] === marcador6 && matriz[1][1]=== null){
        tag4.innerHTML = 'X';
        matriz[1][1] = 'X'
   
    }
    else if(matriz[0][2] === marcador6 && matriz[2][2] === marcador6 && matriz[1][2]=== null){
        tag6.innerHTML = 'X';
        matriz[1][2] = 'X'
   
    }

    else if(matriz[0][0] === marcador6 && matriz[2][2] === marcador6 && matriz[1][1]=== null){
        tag5.innerHTML = 'X';
        matriz[1][1] = 'X'
    }else if(matriz[0][2] === marcador6 && matriz[2][0] === marcador6 && matriz[1][1]=== null){
        tag5.innerHTML = 'X';
        matriz[1][1] = 'X'
    
    }
}

function previsorAtacar(){
    if(matriz[1][0] === marcador6 && matriz[1][1] === marcador6 && matriz[1][2]=== null){
        return true;
   
    }else if(matriz[0][0] === marcador6 && matriz[0][1] === marcador6 && matriz[0][2]=== null){
        return true;
    }else if(matriz[2][0] === marcador6 && matriz[2][1] === marcador6 && matriz[2][2]=== null){
        
        return true;
    } 

    else if(matriz[0][2] === marcador6 && matriz[0][1] === marcador6 && matriz[0][0]=== null){
        return true;
   
    }else if(matriz[1][2] === marcador6 && matriz[1][1] === marcador6 && matriz[1][0]=== null){
        return true;

    }else if(matriz[2][2] === marcador6 && matriz[2][1] === marcador6 && matriz[2][0]=== null){
        
        return true;
    } 

    else if(matriz[0][0] === marcador6 && matriz[1][0] === marcador6 && matriz[2][0]=== null){
        
        return true;
    }else if(matriz[0][1] === marcador6 && matriz[1][1] === marcador6 && matriz[2][1]=== null){
       
        return true;
    }else if(matriz[0][2] === marcador6 && matriz[1][2] === marcador6 && matriz[2][2]=== null){
        
        return true;
    }
    else if(matriz[2][0] === marcador6 && matriz[1][0] === marcador6 && matriz[0][0]=== null){
        return true;
    }else if(matriz[2][1] === marcador6 && matriz[1][1] === marcador6 && matriz[0][1]=== null){
        return true;
    }else if(matriz[1][2] === marcador6 && matriz[2][2] === marcador6 && matriz[0][2]=== null){
        return true;
    }

    else if(matriz[0][0] === marcador6 && matriz[2][0] === marcador6 && matriz[1][0]=== null){
        return true;
   
    }
    else if(matriz[0][1] === marcador6 && matriz[2][1] === marcador6 && matriz[1][1]=== null){
        return true;
   
    }
    else if(matriz[0][2] === marcador6 && matriz[2][2] === marcador6 && matriz[1][2]=== null){
        return true;
   
    }

    else if(matriz[0][0] === marcador6 && matriz[2][2] === marcador6 && matriz[1][1]=== null){
        return true;
    }else if(matriz[0][2] === marcador6 && matriz[2][0] === marcador6 && matriz[1][1]=== null){
        return true;
    
    }
}

function previsorDefender(){
    if(matriz[1][0] === marcador7 && matriz[1][1] === marcador7 && matriz[1][2]=== null){
        return true;
   
    }else if(matriz[0][0] === marcador7 && matriz[0][1] === marcador7 && matriz[0][2]=== null){
        return true;
    }else if(matriz[2][0] === marcador7 && matriz[2][1] === marcador7 && matriz[2][2]=== null){
        
        return true;
    } 

    else if(matriz[0][2] === marcador7 && matriz[0][1] === marcador7 && matriz[0][0]=== null){
        return true;
   
    }else if(matriz[1][2] === marcador7 && matriz[1][1] === marcador7 && matriz[1][0]=== null){
        return true;

    }else if(matriz[2][2] === marcador7 && matriz[2][1] === marcador7 && matriz[2][0]=== null){
        
        return true;
    } 

    else if(matriz[0][0] === marcador7 && matriz[1][0] === marcador7 && matriz[2][0]=== null){
        
        return true;
    }else if(matriz[0][1] === marcador7 && matriz[1][1] === marcador7 && matriz[2][1]=== null){
       
        return true;
    }else if(matriz[0][2] === marcador7 && matriz[1][2] === marcador7 && matriz[2][2]=== null){
        
        return true;
    }
    else if(matriz[2][0] === marcador7 && matriz[1][0] === marcador7 && matriz[0][0]=== null){
        return true;
    }else if(matriz[2][1] === marcador7 && matriz[1][1] === marcador7 && matriz[0][1]=== null){
        return true;
    }else if(matriz[1][2] === marcador7 && matriz[2][2] === marcador7 && matriz[0][2]=== null){
        return true;
    }

    else if(matriz[0][0] === marcador7 && matriz[2][0] === marcador7 && matriz[1][0]=== null){
        return true;
   
    }
    else if(matriz[0][1] === marcador7 && matriz[2][1] === marcador7 && matriz[1][1]=== null){
        return true;
   
    }
    else if(matriz[0][2] === marcador7 && matriz[2][2] === marcador7 && matriz[1][2]=== null){
        return true;
   
    }

    else if(matriz[0][0] === marcador7 && matriz[2][2] === marcador7 && matriz[1][1]=== null){
        return true;
    }else if(matriz[0][2] === marcador7 && matriz[2][0] === marcador7 && matriz[1][1]=== null){
        return true;
    
    }





    else if(matriz[0][0] === marcador7 && matriz[1][1] === marcador7 && matriz[2][2]=== null){
        return true;
    
    }
    else if(matriz[1][1] === marcador7 && matriz[2][2] === marcador7 && matriz[0][0]=== null){
        return true;
    
    }
    else if(matriz[0][2] === marcador7 && matriz[1][1] === marcador7 && matriz[2][0]=== null){
        return true;
    
    }

    else if(matriz[2][0] === marcador7 && matriz[1][1] === marcador7 && matriz[0][2]=== null){
        return true;
    
    }



}


function verificaGanhador(){
    if(matriz[1][0] === marcador6 && matriz[1][1] === marcador6 && matriz[1][2]=== marcador6){
        return true;
   
    }else if(matriz[0][0] === marcador6 && matriz[0][1] === marcador6 && matriz[0][2]=== marcador6){
        return true;
    }else if(matriz[2][0] === marcador6 && matriz[2][1] === marcador6 && matriz[2][2]=== marcador6){
        
        return true;
    } 

    else if(matriz[0][2] === marcador6 && matriz[0][1] === marcador6 && matriz[0][0]=== marcador6){
        return true;
   
    }else if(matriz[1][2] === marcador6 && matriz[1][1] === marcador6 && matriz[1][0]=== marcador6){
        return true;

    }else if(matriz[2][2] === marcador6 && matriz[2][1] === marcador6 && matriz[2][0]=== marcador6){
        
        return true;
    } 

    else if(matriz[0][0] === marcador6 && matriz[1][0] === marcador6 && matriz[2][0]=== marcador6){
        
        return true;
    }else if(matriz[0][1] === marcador6 && matriz[1][1] === marcador6 && matriz[2][1]=== marcador6){
       
        return true;
    }else if(matriz[0][2] === marcador6 && matriz[1][2] === marcador6 && matriz[2][2]=== marcador6){
        
        return true;
    }

    else if(matriz[2][0] === marcador6 && matriz[1][0] === marcador6 && matriz[0][0]=== marcador6){
        return true;
        
    }else if(matriz[2][1] === marcador6 && matriz[1][1] === marcador6 && matriz[0][1]=== marcador6){
        
        return true;
    }else if(matriz[1][2] === marcador6 && matriz[2][2] === marcador6 && matriz[0][2]=== marcador6){
       
        return true;
    }

    else if(matriz[0][0] === marcador6 && matriz[2][0] === marcador6 && matriz[1][0]=== marcador6){
        return true;
   
    }
    else if(matriz[0][1] === marcador6 && matriz[2][1] === marcador6 && matriz[1][1]=== marcador6){
        return true;
   
    }
    else if(matriz[0][2] === marcador6 && matriz[2][2] === marcador6 && matriz[1][2]=== marcador6){
        return true;
   
    }




    else if(matriz[0][0] === marcador6 && matriz[2][2] === marcador6 && matriz[1][1]=== marcador6){
        return true;
    }else if(matriz[0][2] === marcador6 && matriz[2][0] === marcador6 && matriz[1][1]=== marcador6){
        return true;
    
    }
}




let marcador7 = 'O'
function comparar7(){
    if(matriz[1][0] === marcador7 && matriz[1][1] === marcador7 && matriz[1][2] === null){
        tag6.innerHTML = 'X';
        matriz[1][2] = 'X'
   
    }else if(matriz[0][0] === marcador7 && matriz[0][1] === marcador7 && matriz[0][2]=== null){
        tag3.innerHTML = 'X';
        matriz[0][2] = 'X'
   
    }else if(matriz[2][0] === marcador7 && matriz[2][1] === marcador7 && matriz[2][2]=== null){
        tag9.innerHTML = 'X';
        matriz[2][2] = 'X'
   
    } 

    else if(matriz[0][2] === marcador7 && matriz[0][1] === marcador7 && matriz[0][0]=== null){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X'
   
    }else if(matriz[1][2] === marcador7 && matriz[1][1] === marcador7 && matriz[1][0]=== null){
        tag4.innerHTML = 'X';
        matriz[1][0] = 'X'

    }else if(matriz[2][2] === marcador7 && matriz[2][1] === marcador7 && matriz[2][0]=== null){
        tag7.innerHTML = 'X';
        matriz[2][0] = 'X'

    } 

    else if(matriz[0][0] === marcador7 && matriz[1][0] === marcador7 && matriz[2][0]=== null){
        tag7.innerHTML = 'X';
        matriz[2][0] = 'X'

    }else if(matriz[0][1] === marcador7 && matriz[1][1] === marcador7 && matriz[2][1]=== null){
        tag8.innerHTML = 'X';
        matriz[2][1] = 'X'

    }else if(matriz[0][2] === marcador7 && matriz[1][2] === marcador7 && matriz[2][2]=== null){
        tag9.innerHTML = 'X';
        matriz[2][2] = 'X'
 
    }

    else if(matriz[2][0] === marcador7 && matriz[1][0] === marcador7 && matriz[0][0]=== null){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X'
        
    }else if(matriz[2][1] === marcador7 && matriz[1][1] === marcador7 && matriz[0][1]=== null){
        tag2.innerHTML = 'X';
        matriz[0][1] = 'X'
    
    }else if(matriz[1][2] === marcador7 && matriz[2][2] === marcador7 && matriz[0][2]=== null){
        tag3.innerHTML = 'X';
        matriz[0][2] = 'X'
   
    }
// Novo
    else if(matriz[0][0] === marcador7 && matriz[2][0] === marcador7 && matriz[1][0]=== null){
        tag4.innerHTML = 'X';
        matriz[1][0] = 'X'
   
    }
    else if(matriz[0][1] === marcador7 && matriz[2][1] === marcador7 && matriz[1][1]=== null){
        tag5.innerHTML = 'X';
        matriz[1][1] = 'X'
   
    }
    else if(matriz[0][2] === marcador7 && matriz[2][2] === marcador7 && matriz[1][2]=== null){
        tag6.innerHTML = 'X';
        matriz[1][2] = 'X'
   
    }
    else if(matriz[0][0] === marcador7 && matriz[2][2] === marcador7 && matriz[1][1]=== null){
        tag5.innerHTML = 'X';
        matriz[1][1] = 'X'
    }
    else if(matriz[0][2] === marcador7 && matriz[2][0] === marcador7 && matriz[1][1]=== null){
        tag5.innerHTML = 'X';
        matriz[1][1] = 'X'
    
    }




    else if(matriz[0][0] === marcador7 && matriz[1][1] === marcador7 && matriz[2][2]=== null){
        tag9.innerHTML = 'X';
        matriz[2][2] = 'X'
    
    }
    else if(matriz[1][1] === marcador7 && matriz[2][2] === marcador7 && matriz[0][0]=== null){
        tag1.innerHTML = 'X';
        matriz[0][0] = 'X'
    
    }
    else if(matriz[0][2] === marcador7 && matriz[1][1] === marcador7 && matriz[2][0]=== null){
        tag7.innerHTML = 'X';
        matriz[2][0] = 'X'
    
    }

    else if(matriz[2][0] === marcador7 && matriz[1][1] === marcador7 && matriz[0][2]=== null){
        tag3.innerHTML = 'X';
        matriz[0][2] = 'X'
    
    }

}