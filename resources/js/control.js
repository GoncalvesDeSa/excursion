window.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById("myVideo");
    video.autoplay = true; // Define o autoplay para verdadeiro
    video.loop = true; // Define o loop para verdadeiro
    video.play(); // Inicia a reprodução do vídeo
});