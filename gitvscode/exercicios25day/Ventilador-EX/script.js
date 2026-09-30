const button = document.getElementById('button');
const ventilador = document.getElementById('ventilador');
const statusE = document.getElementById('status');

button.addEventListener('click', () => {
    ventilador.classList.toggle('ligado');

    if (ventilador.classList.contains('ligado')) {
        button.textContent = 'Desligar';
         statusE.textContent = 'Ligado';
    } else {
        button.textContent = 'Ligar';
         statusE.textContent = 'Desligado';
    }

});
