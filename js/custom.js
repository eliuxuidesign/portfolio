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