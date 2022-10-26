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
    document.getElementsByClassName(`item`)[i].classList.add(`d_none`);
    // Inserire l?immagine nel div con classe item
    let jsImg = document.createElement(`img`);
    jsImg.src = immagini[i];
    document.getElementsByClassName(`item`)[i].appendChild(jsImg);
}

// CREARE FUNZIONE PER DARE AI BOTTONI POSSIBILITà DI rimuovere AD UN ELEMENTO DELLA LISTA PER VOLTA D_none
const button_top = document.getElementById(`buttonTop`);
const button_but = document.getElementById(`buttonBut`);

i = 0;
let courrent = i;
document.getElementsByClassName(`item`)[courrent].classList.remove(`d_none`);

button_but.addEventListener("click", firstFunction);
function firstFunction(){
    courrent = courrent + 1;
    document.getElementsByClassName(`item`)[courrent].classList.remove(`d_none`);
    let prev = courrent - 1;
    document.getElementsByClassName(`item`)[prev].classList.add(`d_none`);
}




// function firstFunction(){
//     if (courrentIndex == 0){
//         document.getElementsByClassName(`item`)[i].classList.add(`d_block`);
//     }
//     courrentIndex = i+1;
// }

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