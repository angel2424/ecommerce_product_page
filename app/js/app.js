
//////////////////////////////////////// VARIABLES ////////////////////////////////////////////////
const html = document.querySelector('html');

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

//cart
const cartStyles = document.querySelector('.cart_styles');
const cartIcon = document.querySelector('.cart_styles__icon');
const cart = document.querySelector('.cart');
const cartContainer = document.querySelector('.cart__container');
const cartEmpty = document.querySelector('.cart_empty');
const item = document.querySelector('.item');


// Add to cart and quantities
const cartTag = document.querySelector('.cart_styles__tag');
const addQ = document.querySelector('.add_quantity');
const subtractQ = document.querySelector('.subtract_quantity');
const quantity = document.getElementById('quantity');
const addToCart = document.querySelector('.add_to_cart');


//////////////////////////////////////// EVENTS ////////////////////////////////////////////////

// Menu /////////////////////////////////////////////////////////////////////////////////////////////

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


// Cart /////////////////////////

cartStyles.addEventListener('click', (e) => {
    e.preventDefault(); 
    cart.classList.toggle('summoned');
    cart.classList.add('on');
})



if(cartContainer.children.length == 2) {
    cartEmpty.style.display = 'flex';
}


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
if (window.innerWidth > 1023) {
    sliderImage.addEventListener('click', () => {
        lightbox.classList.add('on')
        bg.style.display = 'block';
        lightImg.src = sliderImage.src;

        lightThumb[s].classList.add('active');

    })
}

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
    if(e.target.parentElement.classList.contains('on')) {
        lightbox.classList.remove('on');

        lightThumb.forEach(function(thumbnail) { 
            thumbnail.classList.remove('active');
        });
    }
    thumbnails.forEach(function(thumbnail) { 
        thumbnail.classList.remove('active');
    });
    sliderImage.src = images[s];
    thumbnails[s].classList.add('active');
})

// Quantity and Add to cart ///////////////////////////
let qValue = parseInt(quantity.value);


let quantityValue = (operation) => {
    operation;
    
    quantity.value = qValue;
}
addQ.addEventListener('click', () => {
    quantityValue(qValue++);
})
subtractQ.addEventListener('click', () => {
    quantityValue(qValue--);
})

quantity.addEventListener('change', () => {
    qValue = quantity.value;
})


addToCart.addEventListener('click', () => {

    // Cart tag
    cartTag.classList.add('filled');
    cartTag.innerText = qValue;

    //Cart container
    if(qValue > 0 && cartContainer.children.length < 4) {
        cartEmpty.style.display = 'none';
        cart.classList.add('items_added');
        let cartItem = document.createElement('div');
        cartItem.classList.add('item', 'flex');
        console.log(cartItem)
        cartItem.innerHTML = `
            <img class="item_img" src="images/image-product-1-thumbnail.jpg" alt="Item Image">
            <div class="item_description">
                <p>Autumn Limited Edition...</p>
                <div class="price_total flex flex__ai_c">
                    <p>$125.00 x ${qValue}</p>
                    <p class="total">$${125 * qValue}</p>
                </div>
            </div>
            <img class="delete_btn" src="images/icon-delete.svg" alt="Delete Button">
        `;

        
        cartContainer.insertAdjacentElement('beforeend', cartItem)

        cartContainer.insertAdjacentHTML('beforeend', '<button class="checkout" type="button">Checkout</button>')
    }
})

// delete btn 
cartContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete_btn')) {
        let item = document.querySelector('.item');
        item.remove();

        let checkout = document.querySelector('.checkout');
        checkout.remove();

        cartEmpty.style.display = 'flex';
        cartTag.classList.remove('filled');
    }
})
