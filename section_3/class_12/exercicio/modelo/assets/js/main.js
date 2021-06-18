// const h1 = document.querySelector(".container h1");
// const date = new Date();

// function getDayWeek(day) {
//   let nameDay;
//   switch (day) {
//     case 0:
//       return (nameDay = "Domingo");
//     case 1:
//       return (nameDay = "Segunda Feira ");
//     case 2:
//       return (nameDay = "Terça Feira");
//     case 3:
//       return (nameDay = "Quarta Feira");
//     case 4:
//       return (nameDay = "Quinta Feira");
//     case 5:
//       return (nameDay = "Sexta Feira");
//     case 6:
//       return (nameDay = "Sábado");

//     default:
//       return (nameDay = "Error");
//   }
// }

// function getMonth(month) {
//   let nameMonth;
//   switch (month) {
//     case 0:
//       return (nameMonth = "Janeiro");
//     case 1:
//       return (nameMonth = "Fevereiro");
//     case 2:
//       return (nameMonth = "Março");
//     case 3:
//       return (nameMonth = "Maio");
//     case 4:
//       return (nameMonth = "Abrir");
//     case 5:
//       return (nameMonth = "Junho");
//     case 6:
//       return (nameMonth = "Julhio");
//     case 7:
//       return (nameMonth = "Agosto");
//     case 8:
//       return (nameMonth = "Setembro");
//     case 9:
//       return (nameMonth = "Outobro");
//     case 10:
//       return (nameMonth = "Novembro");
//     case 11:
//       return (nameMonth = "Dezembro");

//     default:
//       return (nameMonth = "Error");
//   }
// }

// function zeroLeft(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createdDate(date) {
//   const dayWeek = date.getDay();
//   const numberMonth = date.getMonth();

//   const nameDay = getDayWeek(dayWeek);
//   const nameMonth = getMonth(numberMonth);

//   return (
//       `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()}`+
//       ` ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
//     );
// }

// h1.innerHTML = createdDate(date);

const h1 = document.querySelector(".container h1");
const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

h1.innerHTML = date.toLocaleDateString("pt-BR", options);
