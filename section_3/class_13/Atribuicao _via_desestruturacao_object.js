const people = {
  name: "Luiz",
  lastName: "Miranda",
  age: 30,
  address: {
    street: "Avenida Brasil",
    number: 320,
  },
};

//Atribuição via desestruturação
const { name } = people;
const { name: teste } = people; //posso pegar o nome da variavel original e renomeala para teste ou qualquer outro nome
const { address } = people;
const {
  address: { street, number },
} = people;

console.log(street, number);
