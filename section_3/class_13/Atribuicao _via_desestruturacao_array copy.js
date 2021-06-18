// let a = "A";
// let b = "B";
// let c = "C";

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log([a, b, c]);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, , tres, , cinco, ,sete] = numeros;

// console.log(um, tres, cinco, sete);

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [, [, , seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
console.log(seis);
console.log(numeros[1][2]);
console.log(lista3[2]);