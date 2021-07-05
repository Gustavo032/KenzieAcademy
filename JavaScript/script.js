let btnCalcular = document.getElementById("btnCalc")

function calcIMC() {
    let inputAltura = document.getElementById('altura').value/100;
    let inputPeso = document.getElementById('peso').value;
    let divResultado = document.getElementById('divResultado')
    
    let imc = (inputPeso / (inputAltura * inputAltura)).toFixed(2) 

    if (inputAltura == "" || inputPeso == "") {
        alert('é necessário preencher todas as informações antes de calcular :D')
        
    } else {
        situation = ""
        
        if (imc <18.5) {
            situation = "ABAIXO DO PESO"
        } else if (imc <25) {
            situation = "no PESO IDEAL"
        } else if (imc <30) {
            situation = "com LEVE OBESIDADE"
        } else if (imc <35) {
            situation = "com OBESIDADE DE GRAU I"
        } else if (imc <40) {
            situation = "com OBESIDADE DE GRAU II"
        } else {
            situation = "com OBESIDADE DE GRAU III"
        }

        divResultado.textContent = `Seu IMC é ${imc}. Você está ${situation}`    
    }
    

}

btnCalcular.addEventListener("click", calcIMC)