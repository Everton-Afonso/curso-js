const students = ["Luiz", "Maria", "João"];

students.push("Luiza")  //push adiciona um elemento no final do array
students.unshift("Fábio")  //unshift adiciona um elemento no começo do array
students.pop()  //pop remove um elemento no final do array

console.log(students.slice(0, 3)); //slice fatia o array de uma posição ate a outra 

console.log(typeof students); //typeof mostra o tipo do elemento
console.log(students instanceof Array); // instanceof verifica o tipo das instancia 
console.log(students instanceof Number);