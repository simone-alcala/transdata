const entrada = "Araladjsfsi456DDFFara"; //Digitar o texto para testar

const regex = /[a-zA-Z]+/i;

function contaLetras(entrada) {
  entrada = entrada.toLowerCase();
  const retorno = {};   
  for (const letra of entrada) {
    if (letra.match(regex)) {
      !retorno[letra] ? retorno[letra] = 1 : retorno[letra]++;
    }
  }
  return retorno;
}

function calculaPorcentagem(letras) {
  const quantidadeLetras = Object.entries(letras).length;
  if (quantidadeLetras === 0) {
    return null;
  }
  let totalLetras = 0;

  for (const letra of Object.entries(letras)) {
    totalLetras += letra[1];
  }
  
  const retorno = {};
  for (const letra of Object.entries(letras)) {
    retorno[letra[0]] = letra[1] / totalLetras * 100;
  }
  return retorno;
}

function printResultado(entrada) {
  const retorno = calculaPorcentagem(contaLetras(entrada));
  if (!retorno) {
    console.log("Texto inválido");
    return;
  }
  for (const letra of Object.entries(retorno)) {
    console.log(letra[0] + " = " + letra[1].toFixed(2) + "%");
  }
}

printResultado(entrada);