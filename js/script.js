if(window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        pauseOnHover: false, // pausa a transição automática
    });

    new SimpleSlide({
        slide: 'portifolio', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        pauseOnHover: false, // pausa a transição automática
        nav: true
    });
}