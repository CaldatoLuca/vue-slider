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
      currentImage: 0,
    };
  },
  methods: {
    next() {
      this.currentImage++;
      if (this.currentImage > this.images.src.length - 1) this.currentImage = 0;
    },
    prev() {
      this.currentImage--;
      if (this.currentImage < 0) this.currentImage = this.images.src.length - 1;
    },
  },
}).mount("#app");
