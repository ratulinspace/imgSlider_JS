const images = [
    "images/pic01.jpg",
    "images/pic02.jpg",
    "images/pic03.jpg",
    "images/pic04.jpg",
    "images/pic05.jpg",
    "images/pic06.jpg"
];
let imgIndex = 0;

const imgElements = document.getElementById('slider-img');

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElements.setAttribute('src', imgUrl)
    imgIndex++;
}, 2000);