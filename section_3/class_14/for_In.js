const frutas = ["maça", "pêra", "uva"];

for (let fruta in frutas){
    console.log(frutas[fruta]);
}

const pessoas = {
    nome: "Luiz",
    sobrenome: "Otavio",
    idade: 30
}

for (let keys in pessoas){
    console.log(keys, pessoas[keys]);
}