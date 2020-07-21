class Alternativa extends Questao {
    private alternativas: string[];
    private correta: number;
    private acertou: boolean;

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

    public isAcertou(): boolean {
        return this.acertou;
    }

    public setAcertou(acertou: boolean): void {
        this.acertou = acertou;
    }

    constructor(enunciado: string, alternativas: string[], correta: number) {
        super(enunciado);
        this.setAlternativas(alternativas);
        this.setCorreta(correta);
    }

    public checa(sugerido: number) {
        if(sugerido == this.correta)
        {
            this.setAcertou(true);
        }
        else
        {
            this.setAcertou(false);
        }
    }

}