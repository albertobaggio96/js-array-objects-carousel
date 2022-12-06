// Milestone 0:
// Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
// dal js (dentro al nostro 'carousel-item', per capirci).
// Milestone 1:
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
// Milestone 2:
// Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.
// Bonus 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso l'alto,
// l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso il basso.
// Bonus 2:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// Bonus 3:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
// dovrà cambiare alla successiva.
// Buon lavoro e buon divertimento!

const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

// get element form DOM
const carouselImgElement= document.querySelector("div.carousel-image");
const previousButton= document.querySelector(".previous");
const nextButton= document.querySelector(".next");
const carouselThumbnails= document.querySelector(".carousel-thumbnails");


images.forEach((image) => {
   
   // jumbotron
   const divElement= getNewElement("div");
   divElement.classList.add("my_carousel-item")
   
   const absoluteContainer = getNewElement("div");
   absoluteContainer.classList.add("position-absolute", "top-50", "start-50", "translate-middle", "text-white", "bg-dark", "bg-opacity-50");
   
   
   const titleElement= getNewElement("h2");
   titleElement.append(image.title);
   
   const pElement= getNewElement("p");
   pElement.append(image.text);
   
   const imgElement= getNewElement("img");
   imgElement.src= `${image.image}`;
   
   carouselImgElement.appendChild(divElement);
   divElement.appendChild(imgElement);
   divElement.appendChild(absoluteContainer);
   absoluteContainer.appendChild(titleElement);
   absoluteContainer.appendChild(pElement);
   
   // carousel-thumbnails
   
   const thumbnailsImg= getNewElement("img");
   thumbnailsImg.src= `${image.image}`;
   thumbnailsImg.classList.add("thumbnail-img-list");
   
   carouselThumbnails.append(thumbnailsImg);
})

console.log(images.length);

const thumbnailsImgList= document.querySelectorAll(".thumbnail-img-list");
const carouselsItemList = document.querySelectorAll(".my_carousel-item");

thumbnailsImgList.forEach((img, index) => {
   img.addEventListener("click", function(){
      carouselsItemList.forEach((carouselItem) => {
         carouselItem.classList.remove("active")
      })
      carouselsItemList[index].classList.add("active");
   })
})



let index = 0;

carouselsItemList[index].classList.add("active");


nextButton.addEventListener("click", function (){
   carouselsItemList.forEach((carouselItem) => {
      carouselItem.classList.remove("active")
   })
   index ++;
   if(index > images.length-1){
      index = 0;
   }
   carouselsItemList[index].classList.add("active");
})

previousButton.addEventListener("click", function(){
   carouselsItemList.forEach((carouselItem) => {
      carouselItem.classList.remove("active")
   })
   index --;
   if(index < 0){
      index = images.length-1;
   }
   carouselsItemList[index].classList.add("active");
})

// ************** function *******************

function getNewElement(element){
   return document.createElement(element);
}

// function getCarousel(operation, condition, variable){
//    [index].classList.toggle("active");
//    operation;
//    if(index < condition){
//       index = variable;
//    }
//  [index].classList.toggle("active");
// }