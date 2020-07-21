// Temos uma classe Questao abstrata, pois ela eh so a base para os varios tipos de questoes
// No nosso programa
abstract class Questao {

    //Todas as questoes tem um enunciado, obrigatoriamente
    private enunciado: string;

    public getEnunciado(): string {
        return this.enunciado;
    }

    public setEnunciado(enunciado: string): void {
        this.enunciado = enunciado;
    }

    constructor(enunciado: string) {
        this.setEnunciado(enunciado);
    }

}