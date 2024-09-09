function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
       section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }
    if (/^\s*$/.test(campoPesquisa)) {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado e cria HTML para cada resultado
    for(let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase( )
        // se titulo includes campoPesquisa
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
<div class="item-resultado">
    <h2>
        <a href="#" target="_blank">${dado.nome}</a>
    </h2>
    <p class="descricao-meta"> ${dado.descricao}</p>
    <a href= ${dado.fonte} target="_blank">Mais informações</a>
</div>`; 
        }
    }
    if(!resultados) {
        resultados= "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}