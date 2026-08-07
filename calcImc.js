const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Preencha os campos corretamente!';
        return;
    }

    const valorIMC = calcularIMC(peso, altura);
    const classificacao = classificarIMC(valorIMC);

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
}

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(1);
}

function classificarIMC(valorIMC) {
    if (valorIMC < 18.5) return 'abaixo do peso.';
    if (valorIMC < 25) return 'com peso ideal. Parabéns!!!';
    if (valorIMC < 30) return 'levemente acima do peso.';
    if (valorIMC < 35) return 'com obesidade grau I.';
    if (valorIMC < 40) return 'com obesidade grau II.';
    return 'com obesidade grau III. Cuidado!!';
}

calcular.addEventListener('click', imc);
