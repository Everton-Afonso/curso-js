const titleNumber = document.getElementById("titleNumber");
const text = document.getElementById("text");

const number = Number(prompt("Digite um número: "));

titleNumber.innerHTML = number;
text.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)}.</p>`;
text.innerHTML += `<p>${number} é interiro: ${Number.isInteger(number)}.</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(number)}.</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}.</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}.</p>`;
text.innerHTML += `<p>A Com duas casa decimais: ${number.toFixed(2)}.</p>`;

