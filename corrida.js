// /*
// console.log("O valor da variável é " + km);
// console.log(typeof km);
// */


const tarifaBase = 5;
const precoPorMinuto = 0.5;
const precoPorKm = 2;
let km = 8;
let minutos = 20;


let total = tarifaBase 
            + km * precoPorKm
            + minutos * precoPorMinuto;



console.log("R$" , total.toFixed(2));





// O total FOI DE R$45.00, DIFERENTE DE R$31,00 (O ESPERADO)
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;
// let km = 15;                            //Alteração
// let minutos = 20;


// let total = tarifaBase 
//             + km * precoPorKm
//             + minutos * precoPorMinuto;



// console.log("R$" , total.toFixed(2));




// "TypeError: Assignment to constant variable." AVISA QUE O TEXTO TENTOU ALTERAR O VALOR DE UMA CONSTANTE
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;
// let km = 8;
// let minutos = 20;


// let total = tarifaBase 
//             + km * precoPorKm
//             + minutos * precoPorMinuto;



// console.log("R$" , total.toFixed(2));


// tarifaBase = 6;



// OS RESULTADOS DE AMBOS (corrida.md E corrida.js) FORAM OS MESMOS
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;
// let km = 3;
// let minutos = 45;


// let total = tarifaBase 
//             + km * precoPorKm
//             + minutos * precoPorMinuto;



// console.log("R$" , total.toFixed(2));




/* [
  { valor: 5, tipo: 'number' },
  { valor: 0.5, tipo: 'number' },
  { valor: 2, tipo: 'number' },
  { valor: 3, tipo: 'number' },
  { valor: 45, tipo: 'number' }
] */
// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;
// let km = 3;
// let minutos = 45;


// let total = tarifaBase 
//             + km * precoPorKm
//             + minutos * precoPorMinuto;



// console.log("R$" , total.toFixed(2));

// const variaveis = [tarifaBase, precoPorMinuto, precoPorKm, km, minutos].map((variavel) => {
//     return {
//         valor: variavel,
//         tipo: typeof variavel

//     };

// } );


// console.log(variaveis)



// // (v => typeof v)


//ELE CONSIDEROU O km INSERIDO NO TERMINAL COMO UMA STRING (TEMOS QUE TRANSFORMÁ-LO COM "Number()" ou "parseInt()")
// const prompt = require("prompt-sync")();

// let km = parseInt(prompt("Quantos km? "));   // digite 8
// console.log(km * 2);               // ?
// console.log(km + 5);               // ?

// console.log(typeof km);            // ?