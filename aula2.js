class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);            /*class e a definição do que deve ser aquele objeto.*/
    }
}

const rodrigo = new Pessoa('Rodrigo', 24);
const iza = new Pessoa();

console.log(rodrigo);