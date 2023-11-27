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
        src: "img/01.jpg",
      },
    };
  },
}).mount("#app");
