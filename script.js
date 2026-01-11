const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");
const musica = document.getElementById("musicaFondo");

// --- LÓGICA DE MÚSICA ---
// Función para activar el sonido
function activarMusica() {
    musica.play().catch(error => {
        console.log("Esperando interacción...");
    });
}

// Escuchar toques en cualquier parte de la pantalla para "despertar" el audio
document.addEventListener("click", activarMusica, { once: true });
document.addEventListener("touchstart", activarMusica, { once: true });


// --- LÓGICA DEL BOTÓN "NO" (EL QUE ESCAPA) ---
function moverBoton() {
    // Intentar sonar la música también cuando intenten darle al "No"
    activarMusica();

    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;

    // Generar posición aleatoria
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

// Eventos para móviles y PC
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que el celular haga click real
    moverBoton();
});
btnNo.addEventListener("mouseover", moverBoton);


// --- LÓGICA DEL BOTÓN "SÍ" ---
btnSi.addEventListener("click", () => {
    // Asegurar que la música suene al aceptar
    activarMusica();

    contenedorTexto.innerHTML = "<h1 style='color: #d63384; font-size: 1.8rem;'>¡SÍ! Me haces el hombre más feliz del mundo, Ivania. 👫💖</h1>";
    
    // Cambiar el gif
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    
    // Ocultar botones
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
