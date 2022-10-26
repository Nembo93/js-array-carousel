`use strict`
// DICHIARARE UN ARRAY CON ALL'INTERNO L'INDIRIZZO DELL'IMMAGINE
// const immagini = document.querySelectorAll("img");
// console.log(immagini);
const immagini = [
    `img/img/01.jpg`,
    `img/img/02.jpg`,
    `img/img/03.jpg`,
    `img/img/04.jpg`,
    `img/img/05.jpg`,
];
console.log(immagini);


// PER OGNI ELEMENTO DELLA LISTA CREARE UN DIV ALL'INTERNO DI MAIN_BOX A CUI AGGIUNGERE UNA CLASSE E INSERIRCI L'IMMAGINE
for (i = 0; i < immagini.length; i++){
    let item = document.createElement(`div`);
    item.classList.add(`item`);
    document.getElementById(`main_box`).appendChild(item);

    // Inserire l?immagine nel div con classe item
    let jsImg = document.createElement(`img`);
    jsImg.src = immagini[i];
    document.getElementsByClassName(`item`).appendChild(jsImg);
    // document.getElementsByClassName(`item`).innerHTML(immagini[i]);
}









// const immaggini = [
//     `img/img/01.jpg`,
//     `img/img/02.jpg`,
//     `img/img/03.jpg`,
//     `img/img/04.jpg`,
//     `img/img/05.jpg`,
// ];
// console.log(immaggini);