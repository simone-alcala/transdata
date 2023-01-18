const entrada = 55; // digitar o valor para testar

const notasDisponiveis = [20, 10, 5, 1];

function valorValido(valor) {
  if (valor <= 0 || !Number.isInteger(valor)) {
    return false;
  }
  return true;
}

function calculaQuantidade(valorSaque) {
  if (!valorValido(valorSaque)) {
    return null;
  }
  const notas = {};
  for (let i = 0; i < notasDisponiveis.length; i++) {
    const nota = notasDisponiveis[i];
    const quantidade = Number.parseInt(valorSaque / nota);
    valorSaque = Number.parseInt(valorSaque % nota);
    if (quantidade > 0) {
      notas[nota] = quantidade;
    }
  }
  return notas;
}

function exibeQuantidades(entrada) {
  const retorno = calculaQuantidade(entrada); 
  console.log("VALOR: " + entrada);
  if (!retorno) {
    console.log("Valor inválido!");
    return;
  }
  qtdNotas = Object.entries(retorno).reverse();   
  for (let qtd of qtdNotas) {
    console.log("NOTA: " + qtd[0] + " QUANTIDADE: " + qtd[1] );
  }  
}

exibeQuantidades(entrada);