const images = [...document.querySelectorAll('.image')];
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.close-btn');
const leftArrow = document.querySelector('.arrow__left');
const rightArrow = document.querySelector('.arrow__right');
const indexValue = document.querySelector('.index');
const popImage = document.querySelector('.large__popup__img');
const imageName = document.querySelector('.image__name');

let index = 0; // will track image index

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    popup.classList.add('active');
    updateImage(i);
  });
});

const updateImage = (i) => {
  let path = `img/img${i + 1}.jpg`;
  popImage.src = path;
  imageName.innerHTML = `img${i + 1}.jpg`;
  indexValue.innerHTML = `0${i + 1}`;
  index = i;
};

closebtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

leftArrow.addEventListener('click', () => {
  if (index > 0) {
    updateImage(index - 1);
  }
});

rightArrow.addEventListener('click', () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});
