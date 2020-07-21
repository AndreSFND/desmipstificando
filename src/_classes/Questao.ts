// Temos uma classe Questao abstrata, pois ela eh so a base para os varios tipos de questoes
// No nosso programa
abstract class Questao {

    //Todas as questoes tem um enunciado, obrigatoriamente
    private enunciado: string;
    private acertou: boolean;
    private dificuldade: number;

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

    public getDificuldade(): number {
        return this.dificuldade;
    }

    public setDificuldade(dificuldade: number): void {
        this.dificuldade = dificuldade;
    }

    constructor(enunciado: string, dificuldade: number) {
        this.setEnunciado(enunciado);
        this.setDificuldade(dificuldade);
        this.setAcertou(false); // Todas as questoes comecam como erradas, caso alguma seja pulada
    }

}

export { Questao };