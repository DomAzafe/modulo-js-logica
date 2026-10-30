const heroi = {
    nome: "Exodia",
    vida: 10,
    dano: 3,
    veneno: 0,
    critico: 0.2,
    danoCritico: 2,
    inventario: []
}

const aranha = {
    nome: "pesonhenta",
    vida: 10,
    dano: 2,
    chanceVeneno: 0.4,
    veneno: 3

}

tomarDano("Exodia", 3);

function tomarDano(heroi, dano){
    heroi.vida = heroi.vida - dano;

    if (heroi.vida <= 0){
        console.log(`O Herói ${heroi} foi Vashcado!`)
    }  
    


}

// console.log(heroi.vida);
// heroi.vida = 15;
// heroi = 15; //erro de constante sendo mudada (Assignment to constant variable)
// console.log(heroi.vida);

console.log(heroi.inventario);
heroi.inventario.push("moeda furada");
console.log(`O Heroi ${heroi.nome} recebeu o item ${heroi.inventario} !`);