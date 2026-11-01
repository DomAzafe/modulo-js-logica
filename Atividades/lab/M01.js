const prompt = require("prompt-sync")();
const reset    = `\x1b[0m`;
const amarelo  = `\x1b[33m`;
const verde    = `\x1b[32m`;

function verificarAnoBisexto(){

const anoMinimo = 1;
const anoMaximo = 9999;
let ano = 0;

while (ano < anoMinimo || ano > anoMaximo || !Number.isInteger(ano)){
    ano = 0;
    ano = Number(prompt(`${amarelo}Digite o Ano:${verde}  `));
}

console.log();

if (Number.isInteger(ano / 4)){
    if (Number.isInteger(ano / 100)){
        if (Number.isInteger(ano / 400)){
            console.log(`${amarelo}Ano Bisexto${reset}`);
        } else (console.log(`${amarelo}Ano não Bisexto${reset}`))
    }

    if (!Number.isInteger(ano / 100)){
        console.log(`${amarelo}Ano Bisexto${reset}`);
    }

} else (console.log(`${amarelo}Ano não Bisexto${reset}`))

}


verificarAnoBisexto();

