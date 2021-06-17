const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputWeight = e.target.querySelector("#Weight");
  const inputHeight = e.target.querySelector("#Height");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  const imc = getImc(weight, height);
  const levelImc = getLevelImc(imc);
  const msg = `Seu IMC é ${imc} (${levelImc}).`;

  if (!weight) {
    setResult("Peso inválido", false);
    return;
  }
  if (!height) {
    setResult("Altura inválido", false);
    return;
  }

  setResult(msg, true);
});

function getLevelImc(imc) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return level[5];
  }
  if (imc >= 34.9) {
    return level[4];
  }
  if (imc >= 29.9) {
    return level[3];
  }
  if (imc >= 24.9) {
    return level[2];
  }
  if (imc >= 18.5) {
    return level[1];
  }
  if (imc < 18.5) {
    return level[0];
  }
}

function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createdParagraph() {
  const paragraph = document.createElement("p");

  return paragraph;
}

function setResult(msg, isValid) {
  const result = document.querySelector(".result");
  const paragraph = createdParagraph();

  if (isValid) {
    paragraph.classList.add("resultParagraph");
  } else {
    paragraph.classList.add("bad");
  }
  result.innerHTML = "";
  paragraph.innerHTML = msg;
  result.appendChild(paragraph);
}
