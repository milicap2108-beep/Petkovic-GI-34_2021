// Ucitaj elemente //
const menuBtn = document.getElementById('meni-dugme');
const menuOverlay = document.querySelector('.meni-overlay');
const closeBtn = document.querySelector('.close-dugme');
const hamburger = document.querySelector('.hamburger'); 
const hamburgerZ = document.querySelector('.hamburger-z')

// Otvori meni - desktop dugme //
if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Otvori meni - hamburger žuti //
if (hamburger) {
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Otvori meni - hamburger zeleni //
if (hamburgerZ) {
    hamburgerZ.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Zatvori meni - X dugme //
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}