// const people = {
//     'name': 'Felipe',
//     'surname': 'Rodrigues',
//     'age': 16,
// };

// console.log(people.name);

//******************************************************

// function createdPeople(name, surname, age) { // name, surname, age => parametros
//   return {
//     name: name,
//     surname: surname,
//     age: age,
//   };
// }

// const people_1 = createdPeople('Felipe', 'Rodrigues', 16); //'Felipe', 'Rodrigues', 16 => argumentos
// console.log(people_1);

//******************************************************
// resumida, muito mais facil de ser usada
// function createdPeople(name, surname, age) {
//   // name, surname, age => parametros
//   return {
//     name,
//     surname,
//     age,
//   };
// }

// const people_1 = createdPeople("Felipe", "Rodrigues", 16); //'Felipe', 'Rodrigues', 16 => argumentos
// console.log(people_1);

//******************************************************
//Object com metodo
const people = {
  name: "Felipe",
  surname: "Rodrigues",
  age: 16,

  speak() {
    console.log(`Olá ${this.name} e tenho ${this.age} de idade`);
  },
  incrementsAge() {
    this.age++;
  },
};

people.speak();
people.incrementsAge();
people.speak();
