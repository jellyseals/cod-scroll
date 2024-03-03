JAVASCRIPT(script.js)

document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var quoteElement = document.getElementById('quote');
    var quote = so you do like me? i like you alive.
    if (scrollTop > 100) { // Adjust this value as per your requirement
        quoteElement.innerHTML = quote;
        quoteElement.style.display = 'block';
    } else {
        quoteElement.style.display = 'none';
    }
});

