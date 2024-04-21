document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".contenedorheader a");
    links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        // Quitamos la clase 'selected' de todos los enlaces
        links.forEach(function(item) {
            item.classList.remove("selected");
        });
        // Agregamos la clase 'selected' solo al enlace clickeado
        link.classList.add("selected");
    });
});
});