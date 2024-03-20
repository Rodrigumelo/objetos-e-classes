
class Carro {
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.consumoPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

