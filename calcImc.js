const calcular = document.getElementById('calcular');

function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(1);
}

function classificarIMC(valorIMC) {
  if (valorIMC < 18.5) return { texto: 'abaixo do peso.', classe: 'baixo-peso' };
  if (valorIMC < 25) return { texto: 'com peso ideal. Parabéns!!!', classe: 'peso-ideal' };
  if (valorIMC < 30) return { texto: 'levemente acima do peso.', classe: 'sobrepeso' };
  if (valorIMC < 35) return { texto: 'com obesidade grau I.', classe: 'obesidade' };
  if (valorIMC < 40) return { texto: 'com obesidade grau II.', classe: 'obesidade' };
  return { texto: 'com obesidade grau III. Cuidado!!', classe: 'obesidade' };
}

function imc() {
  const nome = document.getElementById('nome').value.trim();
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const resultado = document.getElementById('resultado');

  resultado.className = 'result'; // limpa classes anteriores

  if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.textContent = 'Preencha os campos corretamente!';
    return;
  }

  const valorIMC = calcularIMC(peso, altura);
  const classificacao = classificarIMC(valorIMC);

  resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao.texto}`;
  resultado.classList.add(classificacao.classe);
}

calcular.addEventListener('click', imc);
