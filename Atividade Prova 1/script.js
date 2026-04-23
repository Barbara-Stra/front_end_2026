const img = document.getElementById("tabela");

function MostraTabela() {
    img.style.display = "block";
}

function revelar() {
    const imagem = document.getElementById("imgJogador");
    imagem.src = "_vinicius_junior.png";

    document.getElementById("Nome").innerHTML =
        'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-secondary">9,5</span>';

    document.getElementById("Data_Nas").textContent = "12/07/2000 (25 anos)";
    document.getElementById("Alutra").textContent = "1,76 m";
    document.getElementById("Posicao").textContent = "Ponta-esquerda / Atacante";

    const elementos = [
        document.getElementById("Nome"),
        document.getElementById("Data_Nas"),
        document.getElementById("Alutra"),
        document.getElementById("Posicao")
    ];
        document.getElementById("Data_Nas").classList.replace("placeholder", "card-text");
        document.getElementById("Alutra").classList.replace("placeholder", "card-text");
        document.getElementById("Posicao").classList.replace("placeholder", "card-text");
        document.getElementById("Rank").classList.replace("placeholder", "card-text");
        document.getElementById("imgJogador").classList.replace("placeholder", "card-text");
    
}
