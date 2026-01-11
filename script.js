
// Elementos de la pantalla de inicio
const btnEmpezar = document.getElementById("btnEmpezar");
const pantallaInicio = document.getElementById("pantalla-inicio");
const contenidoPrincipal = document.getElementById("contenido-principal");
const musica = document.getElementById("musicaFondo");

// Elementos de la propuesta
const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const gif = document.getElementById("gif");
const contenedorTexto = document.getElementById("contenido");

// 1. FUNCIÓN PARA EMPEZAR (MÚSICA + MOSTRAR CARTA)
btnEmpezar.onclick = function() {
    musica.play();
    pantallaInicio.style.display = "none";
    contenidoPrincipal.style.display = "block";
};

// 2. FUNCIÓN PARA MOVER EL BOTÓN NO
function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;
    
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

// Eventos del botón NO
btnNo.addEventListener("mouseover", moverBoton);
btnNo.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moverBoton();
});

// 3. FUNCIÓN BOTÓN SÍ
btnSi.onclick = function() {
    contenedorTexto.innerHTML = "<h1>¡SÍ! Me haces el más feliz del mundo, Ivania. 👫💖</h1>";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
    btnSi.style.display = "none";
};
