const hamburger = document.querySelector('.hamburger_menu');
const closeMenu = document.querySelector('.close_menu');
const overlay = document.querySelector('header');
const blurred = document.querySelector('.blur');

//Slider 
const sliderImage = document.querySelector('.image');
const previousBtn = document.querySelector('.slider_btns__previous');
const nextBtn = document.querySelector('.slider_btns__next');
const images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]

counter = 0;
let src = () => {
    sliderImage.src = images[counter];
}
src();

//thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');

// lightbox
const lightbox = document.querySelector('.lightbox');
const sliderContainer = document.querySelector('.slider_container');
const lightImg = document.querySelector('.slider_imgs');
const lightThumb = document.querySelectorAll('.light_thumb');
const bg = document.querySelector('.bg');
const lightPreviousBtn = document.querySelector('.light_btns__previous');
const lightNextBtn = document.querySelector('.light_btns__next');

// Menu /////////////////

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('open');
})
closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('open');
})
blurred.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('open')) {
        overlay.classList.remove('open');
    }
})

// Mobile slider ///////////////
if (window.innerWidth < 1024) {
    previousBtn.addEventListener('click', () => {
        if(counter < 1) {
            counter = 3;
            src();
        } else {
            counter--;
            src();
        }
    })
    nextBtn.addEventListener('click', () => {
        if(counter < images.length - 1) {
            counter++;
            src();
        } else {
            counter = 0;
            src();
        }
    })
}

// Desktop Slider ///////////


//  Thumbnails

function showPanel(panelIndex) {
    sliderImage.src = images[panelIndex];
    thumbnails.forEach(function(thumbnail) { 
        thumbnail.classList.remove('active');
    });
    thumbnails[panelIndex].classList.add('active');
    s = panelIndex;
}

//Light box Images

sliderImage.addEventListener('click', () => {
    lightbox.classList.add('on')
    bg.style.display = 'block';
    lightImg.src = sliderImage.src;

    lightThumb[s].classList.add('active');

})

// Lightbox slider Controls
let s = 0;

let lightSrc = () => {
    lightImg.src = images[s];
    lightThumb.forEach(function(thumbnail) { 
        thumbnail.classList.remove('active');
    });
    lightThumb[s].classList.add('active');
}

if (window.innerWidth > 1023) {
    lightPreviousBtn.addEventListener('click', () => {
        if(s < 1) {
            s = 3;
            lightSrc();
        } else {
            s--;
            lightSrc();
        }

    })
    lightNextBtn.addEventListener('click', () => {
        if(s < images.length - 1) {
            s++;
            lightSrc();
        } else {
            s = 0;
            lightSrc();
        }
    })
}


// Lightbox Thumbnails

function showImg(panelIndex) {
    lightImg.src = images[panelIndex];
    lightThumb.forEach(function(thumbnail) { 
        thumbnail.classList.remove('active');
    });
    lightThumb[panelIndex].classList.add('active');
    s = panelIndex;
}

//Exit Lightbox

bg.addEventListener('click', (e) => {
    console.log(e.target.parentElement.classList)
    if(e.target.parentElement.classList.contains('on')) {
        lightbox.classList.remove('on');

        lightThumb.forEach(function(thumbnail) { 
            thumbnail.classList.remove('active');
        });
    }
})

