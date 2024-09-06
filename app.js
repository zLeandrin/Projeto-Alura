// Seleciona o elemento HTML com o ID "jogo-pesquisado" para exibir os resultados
let controle = document.getElementById("jogo-pesquisado");

// Função para gerar uma sugestão de jogo aleatória
function surpreenda() {
    // Obtém o gênero escolhido pelo usuário (se houver), convertendo para minúsculas para facilitar a comparação
    let generoEscolhido = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Filtra os jogos do banco de dados com base no gênero escolhido
    // Se nenhum gênero foi escolhido, retorna todos os jogos
    let jogosFiltrados = bancoJogos.filter(jogo => {
        if (generoEscolhido) {
            return jogo.genero.toLowerCase().includes(generoEscolhido); // Verifica se o gênero do jogo contém o gênero escolhido
        } else {
            return true; // Retorna todos os jogos
        }
    });

    // Verifica se foram encontrados jogos para o gênero escolhido
    if (jogosFiltrados.length === 0) {
        controle.innerHTML = "Nenhum jogo encontrado para este gênero.";
        return;
    }

    // Sorteia um jogo aleatório dentre os jogos filtrados
    const indiceAleatorio = Math.floor(Math.random() * jogosFiltrados.length);
    const jogoSorteado = jogosFiltrados[indiceAleatorio];

    // Exibe as informações do jogo sorteado no HTML
    controle.innerHTML = `
        <h3>${jogoSorteado.titulo}</h3>
        <p>${jogoSorteado.descricao}</p>
        <p>${jogoSorteado.data}</p>
        <img src="${jogoSorteado.imagem}">
        <br>
        <a href="${jogoSorteado.link}" target="_blank">Saiba mais</a>
    `;
}