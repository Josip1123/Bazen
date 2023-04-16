// image slider

const container = document.querySelector(".img-slider_section");

document.querySelector(".slider").addEventListener("input", (e) => {
    container.style.setProperty("--position", `${e.target.value}%`);
});

// before and after picture slider

const beforePictures = ["./Styles/img/before.png", "./Styles/img/before2.png"];
const afterPictures = ["./Styles/img/after.png", "./Styles/img/after2.png"];

let sliderPictureBefore = document.getElementById("before_image");
let sliderPictureAfter = document.getElementById("after_image");
let i = 0;
sliderPictureBefore.src = beforePictures[i];
sliderPictureAfter.src = afterPictures[i];

const leftBtn = document.getElementById("left-slider-btn");
const rightBtn = document.getElementById("right-slider-btn");

// [leftBtn, rightBtn].forEach(function (btn) {
//     btn.addEventListener("click", changePicture);
// });

[leftBtn, rightBtn].forEach((btn) => {
    btn.addEventListener("click", changePicture);
});

function changePicture() {
    i++;
    sliderPictureBefore.src = beforePictures[i % beforePictures.length];
    sliderPictureAfter.src = afterPictures[i % afterPictures.length];
}
