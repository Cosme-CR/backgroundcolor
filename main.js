

"use strict"


const BotaoTrocaCor = document.getElementById("troca-cor")

function trocarCor(){
    let cor = document.getElementById("colorido").value 

    if (cor == "preto") {
        cor = "black"
    } else {
        if (cor == "azul") {
            cor = "blue"
            
        }
        
    }
    

    document.documentElement.style.setProperty("--cor-bg",cor)
    console.log(cor)
}

BotaoTrocaCor.addEventListener("click", trocarCor)

