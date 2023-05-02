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

const counterCustomers = document.getElementById("customers_counter");
const counterYears = document.getElementById("years_counter");
const counterReview = document.getElementById("review_counter");

const NUMBER_OF_CUSTOMERS = 120;
const NUMBER_OF_YEARS = 5;
const NUMBER_OF_REVIEW = 95;
const COUNTER_TIME = 3000;
const COUNTER_INCREMENT = 1;

const timeIncrementForCustomers =
    COUNTER_INCREMENT / (NUMBER_OF_CUSTOMERS / COUNTER_TIME);
const timeIncrementForYears =
    COUNTER_INCREMENT / (NUMBER_OF_YEARS / COUNTER_TIME);
const timeIncrementForReview =
    COUNTER_INCREMENT / (NUMBER_OF_REVIEW / COUNTER_TIME);

let customer = 0;
let years = 0;
let review = 0;

const Counters = document.querySelector(".showcase");

const options = {
    rootMargin: "-50px", 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            function customerCounting() {
                customer = customer + COUNTER_INCREMENT;
                counterCustomers.innerHTML = `${customer} +`;

                if (customer >= NUMBER_OF_CUSTOMERS) {
                    clearInterval(customerInterval);
                }
            }

            const customerInterval = setInterval(
                customerCounting,
                timeIncrementForCustomers
            );

            function yearsCounting() {
                years = years + COUNTER_INCREMENT;
                counterYears.innerHTML = `${years} +`;

                if (years >= NUMBER_OF_YEARS) {
                    clearInterval(yearsInterval);
                }
            }

            const yearsInterval = setInterval(
                yearsCounting,
                timeIncrementForYears
            );

            function reviewCounting() {
                review = review + COUNTER_INCREMENT;
                counterReview.innerHTML = `${review} %`;

                if (review >= NUMBER_OF_REVIEW) {
                    clearInterval(reviewInterval);
                }
            }

            const reviewInterval = setInterval(
                reviewCounting,
                timeIncrementForReview
            );

            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(Counters);
