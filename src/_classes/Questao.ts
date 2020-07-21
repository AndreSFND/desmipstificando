// Temos uma classe Questao abstrata, pois ela eh so a base para os varios tipos de questoes
// No nosso programa
abstract class Questao {

    //Todas as questoes tem um enunciado, obrigatoriamente
    private enunciado: string;
    private acertou: boolean;

    public getEnunciado(): string {
        return this.enunciado;
    }

    public setEnunciado(enunciado: string): void {
        this.enunciado = enunciado;
    }

    public isAcertou(): boolean {
        return this.acertou;
    }

    protected setAcertou(acertou: boolean): void {
        this.acertou = acertou;
    }

    constructor(enunciado: string) {
        this.setEnunciado(enunciado);
        this.setAcertou(false); // Todas as questoes comecam como erradas, caso alguma seja pulada
    }

}