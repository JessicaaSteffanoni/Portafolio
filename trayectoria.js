document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.education-box, .experience-box');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < windowHeight - 100) {
                box.classList.add('visible'); // Agrega la clase que dispara la animación
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const workItems = document.querySelectorAll('.work-item');

    // Crear una instancia del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Agregar clase cuando es visible
                observer.unobserve(entry.target); // Dejar de observar el elemento
            }
        });
    }, {
        threshold: 0.1 // Ajustar según sea necesario
    });

    // Observar todos los elementos work-item
    workItems.forEach(item => {
        observer.observe(item);
    });
});

