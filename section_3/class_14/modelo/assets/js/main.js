const container = document.querySelector(".container");
const div = document.createElement("div");

const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 1" },
  { tag: "h1", texto: "Frase 1" },
  { tag: "section", texto: "Frase 1" },
];

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);

  tagCriada.innerHTML = texto;

  div.appendChild(tagCriada);
}

container.appendChild(div);
