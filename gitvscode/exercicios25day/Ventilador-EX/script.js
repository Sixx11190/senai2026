const button = document.getElementById('button');
const ventilador = document.getElementById('ventilador');
const statusE = document.getElementById('status');

const velocidade1 = document.getElementById("velocidade1");
const velocidade2 = document.getElementById("velocidade2");
const velocidade3 = document.getElementById("velocidade3");

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

    velocidade1.addEventListener("click", function() {
        ventilador.style.animationDuration = "2s"
        ventilador.querySelector(".helices").style.animationDuration = "2s"
    })

    velocidade2.addEventListener("click", function() {
        ventilador.style.animationDuration = "1s"
        ventilador.querySelector(".helices").style.animationDuration = "1s"
    })

    velocidade3.addEventListener("click", function() {
        ventilador.style.animationDuration = "0.3s"
        ventilador.querySelector(".helices").style.animationDuration = "0.3s"
    })