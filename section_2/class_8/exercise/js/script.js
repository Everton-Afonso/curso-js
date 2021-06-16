function registerForm() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const information = [];

  function receiveEventForm(e) {
    e.preventDefault(); //previne o carregamento da pagina 
    const name = form.querySelector(".name");
    const surname = form.querySelector(".surname");
    const weight = form.querySelector(".weight");
    const height = form.querySelector(".height");

    const info = {
      name: name.value,
      surname: surname.value,
      weight: weight.value,
      height: height.value,
    };

    console.log(information);

    information.push(info);

    result.innerHTML += `<p>${name.value} ${surname.value} ${weight.value} ${height.value}</p>`;

    form.querySelector(".name").value = '';
    form.querySelector(".surname").value = '';
    form.querySelector(".weight").value = '';
    form.querySelector(".height").value = '';
  }

  form.addEventListener("submit", receiveEventForm);
}

registerForm();
//fazer um tudo apartir desse exemplo
