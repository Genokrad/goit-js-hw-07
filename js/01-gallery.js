import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallerySelector = document.querySelector(".gallery");

const galleryItemsArr = [];

let instance;
galleryItems.map((item) => {
  const galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
  galleryItemsArr.push(galleryItem);
});
gallerySelector.insertAdjacentHTML("beforeend", galleryItemsArr.join(""));

const pictureOpen = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  instance = basicLightbox.create(
    `
    <img width="800" height="600" src="${event.target.dataset.source}">
    `
  );
  instance.show();
  gallerySelector.addEventListener("keydown", instanceClose);
};

const instanceClose = (event) => {
  console.log(gallerySelector);
  if (event.code === "Escape") {
    instance.close();
    gallerySelector.removeEventListener("keydown", instanceClose);
  }
};

gallerySelector.addEventListener("click", pictureOpen);
