

"use strict"


const BotaoTrocaCor = document.getElementById("troca-cor")

function trocarCor(){
   


    console.log("testando click")
    const cor = document.getElementById("colorido").value 








    document.documentElement.style.setProperty("--cor-bg",cor)
    console.log(cor)
}

BotaoTrocaCor.addEventListener("click", trocarCor)

