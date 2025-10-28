// ===================================
// ANIMACIONES TYPEWRITER
// ===================================

// Variables globales
let indiceH1 = 0;
let indiceP1 = 0;
let indiceP2 = 0;
let indiceHabilidades = 0;

// Textos a escribir
const textoH1 = "Mildrei Rivera";
const textoP1 = "Soy Mildrei Rivera, estudiante de Desarrollo de Software apasionado por crear soluciones web innovadoras. Me especializo en .NET, HTML, CSS. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.";
const textoP2 = "En este portafolio podrás encontrar algunos de mis proyectos más destacados y conocer más sobre mis habilidades técnicas.";
const textoHabilidades = "Habilidades Técnicas";

// Elementos del DOM
const elementoH1 = document.getElementById("typewriter");
const elementoP1 = document.getElementById("typewriter-p1");
const elementoP2 = document.getElementById("typewriter-p2");
const elementoHabilidades = document.getElementById("typewriter-habilidades");

// ===================================
// FUNCIONES DE ESCRITURA
// ===================================

// Escribir H1 del header
function escribirH1() {
    if (indiceH1 < textoH1.length) {
        elementoH1.textContent += textoH1.charAt(indiceH1);
        indiceH1++;
        setTimeout(escribirH1, 150);
    } else {
        // Cuando termina H1, muestra el subtítulo
        document.querySelector('.fade-in-text').style.opacity = '1';
    }
}

// Escribir primer párrafo de Sobre Mí
function escribirP1() {
    if (indiceP1 < textoP1.length) {
        elementoP1.textContent += textoP1.charAt(indiceP1);
        indiceP1++;
        setTimeout(escribirP1, 10);
    } else {
        // Cuando termina P1, muestra P2 y empieza a escribirlo
        elementoP2.style.opacity = '1';
        setTimeout(escribirP2, 500);
    }
}

// Escribir segundo párrafo de Sobre Mí
function escribirP2() {
    if (indiceP2 < textoP2.length) {
        elementoP2.textContent += textoP2.charAt(indiceP2);
        indiceP2++;
        setTimeout(escribirP2, 30);
    }
}

// Escribir título de Habilidades
function escribirHabilidades() {
    if (indiceHabilidades < textoHabilidades.length) {
        elementoHabilidades.textContent += textoHabilidades.charAt(indiceHabilidades);
        indiceHabilidades++;
        setTimeout(escribirHabilidades, 100);
    }
}

// ===================================
// OBSERVADORES (INTERSECTION OBSERVER)
// ===================================

// Observer para Sobre Mí
const observerSobreMi = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && indiceP1 === 0) {
            escribirP1();
        }
    });
});

// Observer para Habilidades
const observerHabilidades = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && indiceHabilidades === 0) {
            escribirHabilidades();
        }
    });
});

// ===================================
// INICIALIZACIÓN
// ===================================

window.addEventListener('load', function() {
    // Iniciar animación del H1 después de 500ms
    setTimeout(escribirH1, 500);
    
    // Observar la sección Sobre Mí
    const seccionSobreMi = document.getElementById('sobre-mi');
    if (seccionSobreMi) {
        observerSobreMi.observe(seccionSobreMi);
    }
    
    // Observar la sección Habilidades
    const seccionHabilidades = document.getElementById('habilidades');
    if (seccionHabilidades) {
        observerHabilidades.observe(seccionHabilidades);
    }
});

// ===================================
// FUNCIONES ADICIONALES (OPCIONAL)
// ===================================

// Smooth scroll para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ANIMACIÓN FLIP CARD (CARTA GIRANDO)
// ===================================

// Girar la carta al hacer click
const flipCard = document.getElementById('flipCard');

if (flipCard) {
    flipCard.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    
    // Auto-girar la carta después de 3 segundos (opcional)
    setTimeout(() => {
        flipCard.classList.add('flipped');
        
        // Volver a girar después de 3 segundos
        setTimeout(() => {
            flipCard.classList.remove('flipped');
        }, 3000);
    }, 3000);
}
