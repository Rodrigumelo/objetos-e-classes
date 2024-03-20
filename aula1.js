
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);            /*class e a definição do que deve ser aquele objeto.*/
    }
}

const rodrigo = new Pessoa();
rodrigo.nome = 'Rodrigo S De Melo';
rodrigo.idade = 24;

const iza = new Pessoa();
iza.nome = 'Izaclara Cristine';                                                          /*Instancia e uma ocorrencia daquele objeto.*/
iza.idade = 23;

console.log(rodrigo);
console.log(iza);

rodrigo.descrever();
iza.descrever();