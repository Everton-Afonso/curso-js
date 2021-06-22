// const name = ["Luiz", "Otavio", "Henrique"];

// for (let valor of name) {
//     if (valor === 'Luiz'){
//         console.log(valor);
//     }
// }

const pessoa = {
    name: "Luiz",
    sobrenome: "Otavio"
}

for (let key in pessoa){
    console.log(pessoa[key]);
}

// for (let key of pessoa){ não posso usar for in com objects
//     console.log(pessoa[key]);
// }