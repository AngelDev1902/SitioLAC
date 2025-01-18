
    document.addEventListener("DOMContentLoaded", () => {
        const barras = document.querySelectorAll(".barra span");

        const observarSeccion = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    barras.forEach((barra) => {
                        barra.style.width = "100%"; // Ajusta el porcentaje según lo necesario
                    });
                    observarSeccion.disconnect(); // Deja de observar después de activar
                }
            });
        });

        const seccionEstadisticas = document.querySelector(".estadisticas");
        observarSeccion.observe(seccionEstadisticas);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".carrucelTrack");
        const images = document.querySelectorAll(".carrucelImg");
        const totalImages = images.length;
        const visibleImages = 3;
        let currentIndex = 0;

        const moveCarousel = () => {
            currentIndex = (currentIndex + 1) % totalImages;
            const offset = -(currentIndex * (100 / visibleImages)); // Calcula el desplazamiento
            track.style.transform = `translateX(${offset}%)`;
        };

        setInterval(moveCarousel, 3000); // Cambia cada 3 segundos
    });