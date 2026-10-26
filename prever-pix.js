const prompt = require("prompt-sync")();

let saldo = Number(prompt("Qual é o saldo na conta?"));
let valor = Number(prompt("Qual é o valor do pix?"));
let hora = Number (prompt("Que horas são?"));
let limite = 5000;

if (hora >= 20 || hora < 6){
    limite = 1000;
}

if (saldo >= valor && valor <= limite && valor > 0){
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
} else {
    console.log("Pix bloqueado");
}