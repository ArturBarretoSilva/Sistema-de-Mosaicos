class Parede {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        let area = this.largura * this.altura;
        return area;
    }

    calcularAreaComPerda() {
        let areaComPerda = this.calcularArea() * 1.15;
        return areaComPerda;
    }

    calcularQuantidadePecas(areaMosaico) {
        let quantidade = this.calcularAreaComPerda() / areaMosaico;
        return Math.ceil(quantidade);
    }
}
module.exports = Parede