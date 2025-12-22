function openLightbox(element) {
    document.getElementById("lightbox-img").src = element.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

window.addEventListener('DOMContentLoaded', () => {
    // On récupère tous les éléments avec la classe fade-in
    const elements = document.querySelectorAll('.fade-in');
    
    // On ajoute la classe "visible" avec un léger délai pour l'élégance
    setTimeout(() => {
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 200);
});
