// carosello Bootstrap senza autoplay e con swipe abilitato su mobile
document.addEventListener('DOMContentLoaded', function () {
    const myCarouselElement = document.getElementById('carouselExampleIndicators');
    
    // Inizializzazione manuale senza specificare l'intervallo (quindi l'autoplay è disattivo di default)
    const myCarousel = new bootstrap.Carousel(myCarouselElement, {
        interval: false, // Per essere super-sicuri che l'autoplay sia disattivo
        touch: true      // Per abilitare esplicitamente lo swipe su mobile
    });
});


const carousel = document.querySelector('#tuoCarouselID');
let startX = 0;

if (carousel) {
    carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
    });

    carousel.addEventListener('mouseup', (e) => {
        if (e.clientX < startX - 50) {
            bootstrap.Carousel.getInstance(carousel).next();
        }
        if (e.clientX > startX + 50) {
            bootstrap.Carousel.getInstance(carousel).prev();
        }
    });
}

// copyright auotmatic year update
// 1. Trova l'elemento <span> usando il suo ID
        const yearSpan = document.getElementById('currentYear');

        // Verifica se l'elemento esiste
        if (yearSpan) {
            // 2. Ottieni l'anno corrente
            const currentYear = new Date().getFullYear();

            // 3. Inserisci l'anno nell'elemento <span>
            yearSpan.textContent = currentYear;
        }


// form validation from Bootstrap
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        })()


        // Link attivati automaticamente della navbar
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleziona tutti i link della navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    console.log('Link trovati:', navLinks.length);
    console.log('Sezioni trovate:', sections.length);
    
    // Opzioni per l'Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    // Callback quando una sezione entra/esce dalla vista
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            console.log('Sezione:', entry.target.id, 'Visibile:', entry.isIntersecting);
            
            if (entry.isIntersecting) {
                // Rimuovi active da tutti i link
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Aggiungi active al link corrispondente
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                
                if (activeLink) {
                    activeLink.classList.add('active');
                    console.log('Active aggiunto a:', entry.target.id);
                }
            }
        });
    };
    
    // Crea l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Osserva tutte le sezioni
    sections.forEach(section => observer.observe(section));
    
}); // Fine DOMContentLoaded