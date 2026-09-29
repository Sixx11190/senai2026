const lampada = document.getElementById('lampada');
const interruptor = document.getElementById('interruptor');

interruptor.addEventListener('click', () => {
    lampada.classList.toggle('ligada');

    if (lampada.classList.contains('ligada')) {
        interruptor.textContent = 'Desligar';
    } else {
        interruptor.textContent = 'Ligar';
    }

    
});