document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        // Evitamos el comportamiento predeterminado del enlace
        event.preventDefault();
        // Quitamos la clase 'selected' de todos los enlaces
        links.forEach(function(item) {
            item.classList.remove("selected");
        });
        // Agregamos la clase 'selected' solo al enlace clickeado
        link.classList.add("selected");
    });
});
});