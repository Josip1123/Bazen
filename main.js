// img slider

const container = document.querySelector(".img-slider_section");

document.querySelector(".slider").addEventListener("input", (e) => {
    container.style.setProperty("--position", `${e.target.value}%`);
});

// before and after pictures changer

const beforePictures = ["./Styles/img/before.png", "./Styles/img/before2.png"];
const afterPictures = ["./Styles/img/after.png", "./Styles/img/after2.png"];

const sliderPictureBefore = document.getElementById("before_image");
const sliderPictureAfter = document.getElementById("after_image");
let i = 0;

const leftBtn = document.getElementById("left-slider-btn");
const rightBtn = document.getElementById("right-slider-btn");

[leftBtn, rightBtn].forEach((btn) => {
    btn.addEventListener("click", changePicture);
});

function changePicture() {
    i++;
    sliderPictureBefore.src = beforePictures[i % beforePictures.length];
    sliderPictureAfter.src = afterPictures[i % afterPictures.length];
}
