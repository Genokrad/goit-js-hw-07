import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallerySelector = document.querySelector(".gallery");

const galleryItemsArr = [];

console.log(galleryItems);
galleryItems.map((item) => {
  const galleryItem = `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  galleryItemsArr.push(galleryItem);
});

gallerySelector.insertAdjacentHTML("beforeend", galleryItemsArr.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
