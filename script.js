function funcaoResposta(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="reposta"]:checked');
    if (respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("retorno").textContent = "Ai sim!";
        }
        else{
            document.getElementById("retorno").textContent = "Baitola!";
        }
    }
    else{
        document.getElementById("retorno").textContent = "Responde viado!";
    }
}