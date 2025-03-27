document.addEventListener('DOMContentLoaded', function() {
    // Animació de desplaçament suau als enllaços interns
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animació d'aparició gradual de les seccions
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animació especial per als conceptes de sostenibilitat
                if (entry.target.id === 'principis-sostenibilitat') {
                    const concepts = entry.target.querySelectorAll('.concept');
                    concepts.forEach((concept, index) => {
                        setTimeout(() => {
                            concept.style.opacity = '1';
                            concept.style.transform = 'translateY(0)';
                        }, 200 * index); // Retard progressiu per a cada concepte
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Inicialitzar els conceptes de sostenibilitat amb estil ocult
    const concepts = document.querySelectorAll('.concept');
    concepts.forEach(concept => {
        concept.style.opacity = '0';
        concept.style.transform = 'translateY(20px)';
        concept.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });
});