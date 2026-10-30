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

console.log(heroi.vida);
heroi.vida = 15;
heroi = 15; //erro de constante sendo mudada (Assignment to constant variable)
console.log(heroi.vida);
