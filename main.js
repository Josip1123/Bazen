
const container = document.querySelector('.img-slider_section');

document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})


// before and after picture slider

let i = 0;
const beforePictures = ["/Styles/before.png", "/Styles/before2.png"];
const afterPictures = ["/Styles/after.png", "/Styles/after2.png"];


let sliderPictureBefore = document.getElementById("before_image");
let sliderPictureAfter = document.getElementById("after_image");
sliderPictureBefore.src = beforePictures[i];
sliderPictureAfter.src = afterPictures[i];

const leftBtn=document.getElementById("left-slider-btn");
const rightBtn=document.getElementById("right-slider-btn");

// leftBtn.addEventListener("click", changePicture);
// rightBtn.addEventListener("click", changePicture);

[leftBtn, rightBtn].forEach(function(btn){
    btn.addEventListener("click", changePicture)
})

// function changePicture () {

//     if (i < beforePictures.length - 1 && i < afterPictures.length -1) {
//         i++
//     } else {
//         i=0;
//     }

//     sliderPictureLeft.src = beforePictures[i];
//     sliderPictureRight.src = afterPictures[i];
// }

function changePicture () {

    i++;
    sliderPictureBefore.src = beforePictures[i % beforePictures.length];
    sliderPictureAfter.src = afterPictures[i % afterPictures.length];
    
}