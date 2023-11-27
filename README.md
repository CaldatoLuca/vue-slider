# Vue Carousel

_HTMl+css+js(vue js)_

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

## Soluzione

**Soluzione al refresh della pagina**

```js
<div id="app" v-cloak></div>
```

```css
[v-cloak] {
  display: none !important;
}
```

Usando `v-cloak` non visualizzo i contenuti che vado a interpolare dal file js ({{ title }}) quando ricarico la pagina

**Creo il blocco con l' immagine principale**

```html
<!-- ?blocco con immagine principale -->
<div class="items">
  <!-- blocco con immagine e descrizione -->
  <div class="item active">
    <img :src="images.src[currentImage]" :alt="images.title[currentImage]" />
    <div class="img-text">
      <h3>{{ images.title[currentImage] }}</h3>
      <p>{{ images.description }}</p>
    </div>
  </div>
</div>
```

```js
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
}).mount("#app");
```

Tramite la variabile currentImage cambierò la visualizzazione a schermo

Richiamo il contenuto corretto tramite normale interpolazione e `v-bind`(:)

**Creo le thumbnails**

```html
<!-- ?blocco thumbnails -->
<div class="thumbnails">
  <!-- immagine thumbnail -->
  <div v-for="(image, index) in images.src" class="thumb">
    <img :src="image" :alt="`Immagine ${index + 1}`" />
  </div>
</div>
```

Uso `v-for` per ciclare le mie immagini (ha una sintassi simile al ciclo key degli oggetti, le parole chiave sono 'in' e l'array su cui ciclo)

Nel `:src` posso mettere direttamente l' elemento dell' array (image) senza indice

**Inizzializzo il carosello al caricamento della pagina**

```js
  event: null,

  mounted() {
    this.event = setInterval(this.next, 2000);
  },
```

Mounted è una proprietà di vue che avviene quando la mia applicazione viene 'montata'. Appena dopo il caricamento della pagina

**Eventi prev e next sulle frecce**

```html
<!-- frecce con eventi -->
<div class="prev" @click="prev">
  <i class="fa-solid fa-circle-left"></i>
</div>
<div class="next" v-on:click="next">
  <i class="fa-solid fa-circle-right"></i>
</div>
```

```js
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
```

Creo gli eventi in methods e li richiamo nell' html con `v-on` (@), specificando il tipo di evento.

**Eventi selezione sulla thumbnail**

```html
<div
  v-for="(image, index) in images.src"
  class="thumb"
  :class="index === currentImage ? 'thumbnail-active ' : '' "
  @click="changeThumb(index)"
>
  <img :src="image" :alt="`Immagine ${index + 1}`" />
</div>
```

```js
  methods: {
    changeThumb(index) {
      this.currentImage = index;
    },
  },
```

Al click sulla thumbanail currentImage diventa uguale all indice della thumbnail stessa.

Se l' indice è uguale a currentImage aggiungo la classe active

`:class="index === currentImage ? 'thumbnail-active ' : '' "` metodo inline per scrivere un if/else

**Evento hover sull' immagine**

```html
<div class="items" @mouseover="stop" @mouseout="start"></div>
```

```js
  methods: {
    stop() {
      clearInterval(this.event);
    },
    start() {
      this.event = setInterval(this.next, 2000);
    },
  },
```

NB

L' evento hover si applica anche sulle frecce perchè contenute in 'items'
