// Ucitaj elemente //
const menuBtn = document.getElementById('meni-dugme');
const menuOverlay = document.querySelector('.meni-overlay');
const closeBtn = document.querySelector('.close-dugme');

// Otvori meni //
menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Zatvori meni //
closeBtn.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});