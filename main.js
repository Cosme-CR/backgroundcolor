

"use strict"


const BotaoTrocaCor = document.getElementById("troca-cor")

function trocarCor(){
    let cor = document.getElementById("colorido").value 

    if (cor == "preto") {
        cor = "black"
    } else {
        if (cor == "azul") {
            cor = "blue"   
        }if(cor== "vermelho"){
            cor = "red"
        }if(cor == "verde"){
            cor = "gren"
        }
        
    }
    

    document.documentElement.style.setProperty("--cor-bg",cor)
    console.log(cor)
}

BotaoTrocaCor.addEventListener("click", trocarCor)

