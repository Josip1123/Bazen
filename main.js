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


if (!!navigator.platform.match(/iPhone|iPad|iPod/)) {
    mySlider.addEventListener(
        "touchend",
        (touchEvent: TouchEvent) => {
            var element = touchEvent.srcElement as HTMLInputElement;
            if (element.min && element.max && touchEvent.changedTouches && touchEvent.changedTouches.length > 0) {
                const max = Number(element.max);
                const min = Number(element.min);
                let step = 1;
                if (element.step) {
                    step = Number(element.step);
                }
                //Calculate the complete range of the slider.
                const range = max - min;
    
                const boundingClientRect = element.getBoundingClientRect();
                const touch = touchEvent.changedTouches[0];
    
                //Calculate the slider value
                const sliderValue = (touch.pageX - boundingClientRect.left) / (boundingClientRect.right - boundingClientRect.left) * range + min;
    
                //Find the closest valid slider value in respect of the step size
                for (let i = min; i < max; i += step) {
                    if (i >= sliderValue) {
                        const previousValue = i - step;
                        const previousDifference = sliderValue - previousValue;
                        const currentDifference = i - sliderValue;
                        if (previousDifference > currentDifference) {
                            //The sliderValue is closer to the previous value than the current value.
                            element.value = previousValue.toString();
                        } else {
                            element.value = i.toString();
                        }
    
                        //Trigger the change event.
                        element.dispatchEvent(new Event("change"));
                        break;
                    }
                }
            }
        },
        {
            passive: true
        }
    );
}