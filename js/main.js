"use script";

const { createApp } = Vue;

createApp({
  data() {
    return {
      mainTitle: "Carosello news",
      images: {
        title: [
          "Uomo sul Lago",
          "Paesino sul Lago",
          "Londra",
          "Città",
          "Caraibi",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        src: [
          "img/01.jpg",
          "img/02.jpg",
          "img/03.jpg",
          "img/04.jpg",
          "img/05.jpg",
        ],
      },
      currentImage: 1,
    };
  },
}).mount("#app");
