const obras = [
    { "id": "0", "imagem": "img/avinha.jpg", "titulo": "A Vinha Encarnada", "descricao": " A Vinha Encarnada é um quadro do pintor holandês Vincent Van Gogh, concluído no início de novembro de 1888.<br>&nbsp; Esta foi a única peça vendida pelo artista em vida. O quadro foi adquirido em Bruxelas por 400 Francos, por Anna Boch." },
    { "id": "1", "imagem": "img/giracois.jpg", "titulo": "Girassóis", "descricao": "Van Gogh pintou uma série de 11 quadros de girassóis (quatro em Paris e sete em Arles), que se tornaram algumas das suas obras mais icónicas, simbolizando para ele felicidade, gratidão, força e resistência." },
    { "id": "2", "imagem": "img/noiteestrelada.jpg", "titulo": "Noite Estrelada", "descricao": "  A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista.<br>&nbsp; A tela faz parte da coleção permanente do Museu de Arte Moderna de Nova Iorque desde 1941." },
    { "id": "3", "imagem": "img/autoretrato.jpg", "titulo": "Autorretrato", "descricao": " O Autorretrato com Chapéu de Feltro é um óleo sobre tela, pintado por Vincent van Gogh em 1888.<br>&nbsp; Van Gogh pintou esta tela no inverno europeu de 1887-1888, quando viveu em Paris por dois anos." },
    { "id": "4", "imagem": "img/vaso.jpg", "titulo": "Vaso com Iríses", "descricao": " Vaso com íris contra um fundo amarelo é uma pintura a óleo sobre tela feita em 1889 pelo pintor Vincent Van Gogh. Está preservado no Museu Van Gogh em Amsterdã.<br> &nbsp; É um dos trabalhos realizados enquanto ele estava internado na clínica psiquiátrica de Saint-Rémy, cidade próxima a Arles." },
    { "id": "5", "imagem": "img/oscomedores.jpg", "titulo": "Os Comedores de Batatas", "descricao": " Os comedores de batata é um quadro do pintor Vincent van Gogh, terminado em abril de 1885.<br>&nbsp;o retrato de uma época, da classe trabalhadora e sua base alimentar." }

]


function criarCards() {
    const container = document.getElementById("tela");
    container.innerHTML = "";

    for (let i = 0; i < obras.length; i++) {
        var obra = obras[i];

            
        container.innerHTML += `<article class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  text-center border border-light   " >
    <img src="${obra.imagem}" alt="${obra.titulo}" class="img-fluid">
    <h2>${obra.titulo}</h2>
    <p>${obra.descricao}</p>&nbsp;
    <button class="btn " ">Ver mais</button>
    </article>`;
    }
}

 document.addEventListener("DOMContentLoaded", function () {
     criarCards();
 });
