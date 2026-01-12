// Función para actualizar la fecha y hora
function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const dateTimeString = now.toLocaleDateString('es-ES', options);
    const dateTimeElement = document.getElementById('datetime');

    if (dateTimeElement) {
        dateTimeElement.textContent = dateTimeString;
    }
}

// Actualizar la fecha y hora inmediatamente al cargar la página
updateDateTime();

// Actualizar la fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Agregar efecto de partículas al hacer clic en el título
const title = document.querySelector('.title');

if (title) {
    title.addEventListener('click', function(e) {
        // Crear un efecto de "explosión" de emojis
        const emojis = ['✨', '🎉', '🎊', '⭐', '💫', '🌟'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        const particle = document.createElement('span');
        particle.textContent = emoji;
        particle.style.position = 'fixed';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.fontSize = '2rem';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.transition = 'all 1s ease-out';

        document.body.appendChild(particle);

        // Animar la partícula
        setTimeout(() => {
            particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * -200 - 50}px)`;
            particle.style.opacity = '0';
        }, 10);

        // Eliminar la partícula después de la animación
        setTimeout(() => {
            particle.remove();
        }, 1000);
    });

    // Agregar cursor pointer al título
    title.style.cursor = 'pointer';
    title.title = '¡Haz clic para ver magia! ✨';
}

// Mensaje de bienvenida en la consola
console.log('%c¡Hola Mundo desde GitHub! 👋', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cSitio web desplegado en Cloudflare Pages', 'font-size: 14px; color: #764ba2;');
