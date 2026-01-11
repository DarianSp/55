const btnEmpezar = document.querySelector("#btnEmpezar");
const pantallaInicio = document.querySelector("#pantalla-inicio");
const contenidoPrincipal = document.querySelector("#contenido-principal");
const musica = document.getElementById("musicaFondo");

const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");

// LÓGICA PARA EMPEZAR
btnEmpezar.addEventListener("click", () => {
    musica.play(); // Aquí la música suena sí o sí
    pantallaInicio.style.display = "none";
    contenidoPrincipal.style.display = "block";
});

// LÓGICA BOTÓN "NO" (SALTARÍN)
function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;
    
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
});
btnNo.addEventListener("mouseover", moverBoton);

// LÓGICA BOTÓN "SÍ"
btnSi.addEventListener("click", () => {
    contenedorTexto.innerHTML = "<h1>¡SÍ! Me haces el más feliz del mundo, Ivania. 👫💖</h1>";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
