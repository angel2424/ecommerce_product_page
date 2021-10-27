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


})