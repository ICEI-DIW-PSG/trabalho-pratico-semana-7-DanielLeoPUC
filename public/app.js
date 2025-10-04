// Cards 
const obras = [
    { "id": "0", "imagem": "img/avinha.jpg", "titulo": "A Vinha Encarnada", "descricao": " A Vinha Encarnada é um quadro do pintor holandês Vincent Van Gogh, concluído no início de novembro de 1888.<br>&nbsp; Esta foi a única peça vendida pelo artista em vida. O quadro foi adquirido em Bruxelas por 400 Francos, por Anna Boch." },
    { "id": "1", "imagem": "img/giracois.jpg", "titulo": "Girassóis", "descricao": "Van Gogh pintou uma série de 11 quadros de girassóis (quatro em Paris e sete em Arles), que se tornaram algumas das suas obras mais icónicas, simbolizando para ele felicidade, gratidão, força e resistência." },
    { "id": "2", "imagem": "img/noiteestrelada.jpg", "titulo": "Noite Estrelada", "descricao": "  A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A obra retrata a vista da janela de um quarto do hospício de Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição de um vilarejo idealizado pelo artista.<br>&nbsp; A tela faz parte da coleção permanente do Museu de Arte Moderna de Nova Iorque desde 1941." },
    { "id": "3", "imagem": "img/autoretrato.jpg", "titulo": "Autorretrato", "descricao": " O Autorretrato com Chapéu de Feltro é um óleo sobre tela, pintado por Vincent van Gogh em 1888.<br>&nbsp; Van Gogh pintou esta tela no inverno europeu de 1887-1888, quando viveu em Paris por dois anos." },
    { "id": "4", "imagem": "img/vaso.jpg", "titulo": "Vaso com Iríses", "descricao": " Vaso com íris contra um fundo amarelo é uma pintura a óleo sobre tela feita em 1889 pelo pintor Vincent Van Gogh. Está preservado no Museu Van Gogh em Amsterdã.<br> &nbsp; É um dos trabalhos realizados enquanto ele estava internado na clínica psiquiátrica de Saint-Rémy, cidade próxima a Arles." },
    { "id": "5", "imagem": "img/oscomedores.jpg", "titulo": "Os Comedores de Batatas", "descricao": " Os comedores de batata é um quadro do pintor Vincent van Gogh, terminado em abril de 1885.<br>&nbsp;o retrato de uma época, da classe trabalhadora e sua base alimentar." }

]

//Conteúdo do Aside
const asd = { "id": "s1", "titulo": "Vincent van Gogh", "descricao": "Vincent van Gogh foi um pintor pós-impressionista holandês (1853-1890) que produziu mais de 2.000 obras, incluindo 900 pinturas, em menos de uma década, mas vendeu apenas uma em vida. Antes de se dedicar à arte aos 27 anos, trabalhou como vendedor de arte, professor e pastor, levando uma vida emocionalmente turbulenta marcada por problemas de saúde mental e pobreza. &nbsp; Após sua morte no anonimato, Van Gogh tornou-se um dos artistas mais influentes da história, conhecido por sua obra vibrante e emotiva, hoje avaliada em milhões de dólares." };

const asideSubdescricoes =
    [{ "id": "sub1", "subtitulo": "Carreira Artística", "descricao": "Pós-Impressionismo: Van Gogh é um dos principais expoentes do pós-impressionismo." },
    { "id": "sub2", "subtitulo": "Estilo e Técnica", "descricao": "Sua obra é marcada pelo uso expressivo da cor, beleza e emoção, influenciando a arte do século XX." },
    { "id": "sub3", "subtitulo": "Reconhecimento Póstumo", "descricao": "Hoje, Van Gogh é celebrado como um dos maiores artistas de todos os tempos, com suas obras exibidas em museus ao redor do mundo, porém o reconhecimento de suas obras vieram após sua morte, e hoje é considerado um dos maiores pintores da história." },
    { "id": "sub4", "subtitulo": "Producao", "descricao": "Produziu mais de 2.000 obras, incluindo cerca de 900 pinturas, em menos de uma década." },
    { "id": "sub5", "subtitulo": "Vida Pessoal", "descricao": "Lutou contra problemas de saúde mental, incluindo depressão e psicose, culminando em sua morte por suicídio aos 37 anos." }]

//Conteúdo extra do Aside

const extras =
    [{ "id": "extra1", "link": "https://pt.wikipedia.org/wiki/Vincent_van_Gogh", "descricao": "Bibliografia" },
    { "id": "extra2", "link": "https://arteref.com/arte/curiosidades/20-fatos-curiosos-sobre-van-gogh-que-voce-nao-sabia/", "descricao": "Curiosidades" }]


//Função para criar os cards dinamicamente

function criarCards() {
    const container = document.getElementById("tela");
    container.innerHTML = "";

    for (let i = 0; i < obras.length; i++) {
        var obra = obras[i];
        container.innerHTML += `<article class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  text-center border border-light   " >
    <img src="${obra.imagem}" alt="${obra.titulo}" class="img-fluid">
    <h2>${obra.titulo}</h2>
    <p>${obra.descricao}</p>
    <button class="btn " ">Ver mais</button>
    </article>`;
    }
}


//Função para criar o Aside dinamicamente

function criarAside() {
    const asideContainer = document.getElementById("as");
    asideContainer.innerHTML = "";


    asideContainer.innerHTML += `<aside>
    <div class="col-12">
    <h1>${asd.titulo}</h1>
    <p>&nbsp;&nbsp;${asd.descricao}</p>
     </div>
     `;

    for (let i = 0; i < asideSubdescricoes.length; i++) {
        asideContainer.innerHTML += `<div class="col-12">
        <h4>${asideSubdescricoes[i].subtitulo}</h4>
        <p>&nbsp;&nbsp;${asideSubdescricoes[i].descricao}</p>
        </div>
        `;
    }

    for (let i = 0; i < extras.length; i++) {
    asideContainer.innerHTML += 
    `<nav>
    <ul class="extras">
    <li><a href="${extras[i].link}" target="_blank">${extras[i].descricao}</a></li>
    </ul>
    </nav></aside>`;
    }


    



 
}





document.addEventListener("DOMContentLoaded", function () {
    criarCards();
});

document.addEventListener("DOMContentLoaded", function () {
    criarAside();
});