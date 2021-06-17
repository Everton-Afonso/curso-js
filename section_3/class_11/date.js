// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000; //um dia em milissegundos
// const data = new Date('2019-04-20 20:20:59');
// const data = new Date();
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(data.getFullYear());
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear()

    return `${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);