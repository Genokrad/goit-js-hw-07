import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallerySelector = document.querySelector(".gallery");

console.log(galleryItems);

const galleryItemsArr = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    // return galleryItem;
    // galleryItemsArr.push(galleryItem);
  )
  .join("");

gallerySelector.insertAdjacentHTML("beforeend", galleryItemsArr);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItemsArr);
