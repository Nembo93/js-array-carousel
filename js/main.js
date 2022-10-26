`use strict`
// DICHIARARE UN ARRAY CON ALL'INTERNO L'INDIRIZZO DELL'IMMAGINE
// const immagini = document.querySelectorAll("img");
// console.log(immagini);
const immaggini = [
    `img/img/01.jpg`,
    `img/img/02.jpg`,
    `img/img/03.jpg`,
    `img/img/04.jpg`,
    `img/img/05.jpg`,
];
console.log(immaggini);


// PER OGNI ELEMENTO DELLA LISTA CREARE UN DIV E INSERIRCI L'IMMAGINE
for (i = 0; i < immaggini.length; i++){
    let item = document.createElement(`div`);
    item.classList.add(`item`);
    document.getElementById(`main_box`).appendChild(item);
}









// const immaggini = [
//     `img/img/01.jpg`,
//     `img/img/02.jpg`,
//     `img/img/03.jpg`,
//     `img/img/04.jpg`,
//     `img/img/05.jpg`,
// ];
// console.log(immaggini);