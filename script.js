const btnEmpezar = document.querySelector("#btnEmpezar");
const pantallaInicio = document.querySelector("#pantalla-inicio");
const contenedorPrincipal = document.querySelector("#principal");
const musica = document.getElementById("musicaFondo");

const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const contenedorTexto = document.querySelector("#contenido");
const gif = document.querySelector("#gif");

// Al tocar el botón de inicio, suena la música y aparece la carta
btnEmpezar.addEventListener("click", () => {
    musica.play().catch(e => console.log("Error al sonar:", e));
    pantallaInicio.style.display = "none";
    contenedorPrincipal.style.display = "block";
});

// Lógica del botón NO
function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);
    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("touchstart", (e) => { e.preventDefault(); moverBoton(); });
btnNo.addEventListener("mouseover", moverBoton);

// Lógica del botón SÍ
btnSi.addEventListener("click", () => {
    contenedorTexto.innerHTML = "<h1>¡SÍ! Me haces el más feliz, Ivania. 👫💖</h1>";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
