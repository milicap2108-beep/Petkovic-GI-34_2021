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


// MODAL ZA KONTAKT FORMU //
const modal = document.getElementById('modal-uspeh');
const forma = document.querySelector('#kontakt-forma');

if (forma && modal) {
    const closeBtn = document.querySelector('.modal-close');
    
    forma.addEventListener('submit', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Blokira scroll
        forma.reset();
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Vraća scroll
    });
    
    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Vraća scroll
        }
    });
}