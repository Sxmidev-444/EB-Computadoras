window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;

    // Obtener todas las secciones y divs con atributos id
    var elements = document.querySelectorAll('div[id], section[id], footer[id]');
    var headerLinks = document.querySelectorAll('.links a');

    // Iterar sobre los elementos
    elements.forEach(function(element) {
        var elementTop = element.offsetTop;
        var elementBottom = elementTop + element.offsetHeight;

        // Verificar si la parte superior o inferior del elemento está dentro de la ventana
        if ((elementTop >= scrollPosition && elementTop <= scrollPosition + windowHeight) ||
            (elementBottom >= scrollPosition && elementBottom <= scrollPosition + windowHeight)) {
            // Obtener el id del elemento visible
            var id = element.id;
            
            // Remover la clase 'active' de todos los enlaces del header
            headerLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace del header correspondiente al elemento visible
            var activeLink = document.querySelector('.links a[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});






