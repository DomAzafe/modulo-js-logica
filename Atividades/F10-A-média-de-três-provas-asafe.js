const prompt = require("prompt-sync")();
const notas = [];
const quantidadeDeNotas = 3;
const notaMaxima = 10;

const reset    = `\x1b[0m`;
const amarelo  = `\x1b[33m`;


for (let i = 0; i < quantidadeDeNotas; i++){
while (notas[i] < 0 || notas[i] === undefined || notas[i] > notaMaxima){
    notas.push(Number(prompt(`${reset}Digite a Média-${i + 1} (0.0 - []10.0):  ${amarelo}`)));
    
    if (notas[i] < 0 || notas[i] > notaMaxima || Number.isNaN(notas[i]) ){
        notas.pop();
    }
}
}

const mediaFinal = notas.reduce((soma, valorAtual) => { return soma + valorAtual; }, 0);

console.log(`${amarelo}Sua Média foi: ${mediaFinal}${reset}`);












