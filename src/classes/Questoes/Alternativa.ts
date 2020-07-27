/// <reference path="./../Questao.ts" />

class Alternativa extends Questao {
    private alternativas: string[];
    private correta: number;

    public getAlternativas(): string[] {
        return this.alternativas;
    }

    public setAlternativas(alternativas: string[]): void {
        this.alternativas = alternativas;
    }

    public getCorreta(): number {
        return this.correta;
    }

    public setCorreta(correta: number): void {
        this.correta = correta;
    }

    constructor(enunciado: string, dificuldade:number, alternativas: string[], correta: number) {
        super(enunciado, dificuldade);
        this.setAlternativas(alternativas);
        this.setCorreta(correta);
    }

    /**
     * Checa se a alternativa sugerida eh a correta
     */
    public checa(sugerido: number) {
        sugerido == this.correta ? super.setAcertou(true) : super.setAcertou(false);
    }

}