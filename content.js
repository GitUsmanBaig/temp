document.addEventListener('DOMContentLoaded', function() {
    const priceElements = document.querySelectorAll('.pdp-price');

    // Retrieve the color setting from local storage or default to red if not set
    const chosenColor = localStorage.getItem('priceColor') || 'red';

    priceElements.forEach(function(price) {
        price.style.color = chosenColor;
    });
});
