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


// intersection osberver counters section

const counterCustomers = document.querySelector("customers_counter");
const counterYears = document.querySelector("years_counter");
const counterReview = document.querySelector("review_counter");


const NUMBER_OF_CUSTOMERS = 120;
const NUMBER_OF_YEARS = 3;
const NUMBER_OF_REVIEW = 95;
const COUNTER_TIME = 3000; 
const COUNTER_INCREMENT = 1;

const timeIncrementForCustomers = COUNTER_INCREMENT/(NUMBER_OF_CUSTOMERS/COUNTER_TIME);
const timeIncrementForYears = COUNTER_INCREMENT/(NUMBER_OF_YEARS/COUNTER_TIME);
const timeIncrementForReview = COUNTER_INCREMENT/(NUMBER_OF_REVIEW/COUNTER_TIME);

