// Esperar a que toda la página cargue
window.onload = function() {
    const btnEmpezar = document.getElementById("btnEmpezar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const contenidoPrincipal = document.getElementById("contenido-principal");
    const musica = document.getElementById("musicaFondo");

    const btnNo = document.getElementById("btnNo");
    const btnSi = document.getElementById("btnSi");
    const gif = document.getElementById("gif");
    const contenedorTexto = document.getElementById("contenido");

    // Función para iniciar todo
    btnEmpezar.onclick = function() {
        musica.play().catch(function(error) {
            console.log("Error de audio:", error);
        });
        pantallaInicio.style.display = "none";
        contenidoPrincipal.style.display = "block";
    };

    // Función para mover el botón No
    function moverBoton() {
        const width = window.innerWidth - btnNo.offsetWidth;
        const height = window.innerHeight - btnNo.offsetHeight;
        const x = Math.random() * (width - 20);
        const y = Math.random() * (height - 20);

        btnNo.style.position = "fixed";
        btnNo.style.left = x + "px";
        btnNo.style.top = y + "px";
    }

    btnNo.onmouseover = moverBoton;
    btnNo.ontouchstart = function(e) {
        e.preventDefault();
        moverBoton();
    };

    // Función botón Sí
    btnSi.onclick = function() {
        contenedorTexto.innerHTML = "<h1 style='color: #d63384;'>¡SÍ! Me haces el más feliz del mundo, Ivania. 👫💖</h1>";
        gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
        btnNo.style.display = "none";
        btnSi.style.display = "none";
    };
};
