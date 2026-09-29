const interruptor = document.getElementById('interruptor');
const ventilador = document.getElementById('ventilador');
const statusE = document.getElementById('status');

interruptor.addEventListener('click', () => {
    ventilador.classList.toggle('ligado');

    if (ventilador.classList.contains('ligado')) {
        interruptor.textContent = 'Desligar';
         statusE.textContent = 'Ligado';
    } else {
        interruptor.textContent = 'Ligar';
         statusE.textContent = 'Desligado';
    }

});
