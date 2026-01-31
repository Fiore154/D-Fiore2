/* D'FIORE ELITE LOGIC V5.3 */

// Navegación SPA
function showSection(id) {
    document.querySelectorAll('.spa-section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    const target = document.getElementById(id);
    if(target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

// Cursor Personalizado
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .price-card, .design-card, .info-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Lógica Formulario a WhatsApp
document.getElementById('mainContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('clientName').value;
    const zone = document.getElementById('clientZone').value;
    const service = document.getElementById('serviceType').value;
    
    const msg = `Hola D'Fiore, deseo agendar una cita a domicilio:%0A%0A` +
                `👤 Cliente: ${name}%0A` +
                `📍 Sector/Ubicación: ${zone}%0A` +
                `💅 Servicio Deseado: ${service}%0A%0A` +
                `Quedo a espera de confirmación y cotización final.`;
    
    window.open(`https://wa.me/593995178775?text=${msg}`, '_blank');
});

// Efecto Tilt
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x*8}deg) rotateX(${y*-8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

window.onload = () => showSection('home');