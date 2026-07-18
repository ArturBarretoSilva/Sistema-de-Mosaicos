
function principal(){

    let tipo = document.getElementById("opcoes").value;

    let areaMosaico = 0;

    switch(tipo){

        case "TriEquilatero":
            let lado = Number(document.getElementById("lado").value);

            let mosaico1 = new Mosaico(lado);
            areaMosaico = mosaico1.calcularTriEquilatero();
        break;

        case "TriIsoceles":
            let ladoI = Number(document.getElementById("lado").value);
            let base = Number(document.getElementById("base").value);

            let mosaico2 = new Mosaico(ladoI, base);
            areaMosaico = mosaico2.calcularTriIsoceles();
        break;

        case "TriEscaleno":
            let ladoA = Number(document.getElementById("ladoA").value);
            let ladoB = Number(document.getElementById("ladoB").value);
            let ladoC = Number(document.getElementById("ladoC").value);

            let mosaico3 = new Mosaico(0, 0, ladoA, ladoB, ladoC);
            areaMosaico = mosaico3.calcularTriEscaleno();
        break;
    }

    let largura = Number(document.getElementById("larguraP").value);
    let altura = Number(document.getElementById("alturaP").value);

    let parede = new Parede(largura, altura);

    let areaParede = parede.calcularArea();
    let areaComPerda = parede.calcularAreaComPerda();
    let quantidade = parede.calcularQuantidadePecas(areaMosaico);

    respostaP.innerHTML = `
        Área da parede: ${areaParede.toFixed(2)} m² <br>
        Área com perda: ${areaComPerda.toFixed(2)} m² <br>
        Área do mosaico: ${areaMosaico.toFixed(2)} m² <br>
        Quantidade de peças: ${quantidade}
    `;
}