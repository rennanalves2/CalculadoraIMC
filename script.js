function CalcularIMC(event) {
    event.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    var resultado;
    if(imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/><h1> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso</h1>";
    }
    else if(imc > 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/><h1> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está abaixo do peso</h1>";
    }
    else if(imc > 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/><h1> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal</h1>";
    }
    else if(imc > 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/><h1> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está acima do peso</h1>";
    }
    else if(imc >= 30) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/><h1> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está na obesidade</h1>";
    }
}