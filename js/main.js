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
    if (i !== 0){
        document.getElementsByClassName(`item`)[i].classList.add(`d_none`);
    }
    // Inserire l?immagine nel div con classe item
    let jsImg = document.createElement(`img`);
    jsImg.src = immagini[i];
    document.getElementsByClassName(`item`)[i].appendChild(jsImg);
}

// let courrentIndex = 0;
// const button_top = getElementById(`buttonTop`);
// const button_but = getElementById(`buttonBut`);

// function firstFunction(){    
// }
// document.getElementsByClassName(`item`)[i].classList.add(`d_none`);
// document.getElementsByClassName(`item`)[i].classList.add(`d_block`);






// const immaggini = [
//     `img/img/01.jpg`,
//     `img/img/02.jpg`,
//     `img/img/03.jpg`,
//     `img/img/04.jpg`,
//     `img/img/05.jpg`,
// ];
// console.log(immaggini);