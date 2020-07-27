/// <reference path="./Questoes/Alternativa.ts" />

class Partida {

    private nivel: number;
    private mode: number;
    private questoesAlternativa: Alternativa[];

    public getNivel(): number {
        return this.nivel;
    }

    public setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    public getMode(): number {
        return this.mode;
    }

    public setMode(mode: number): void {
        this.mode = mode;
    }

    public getQuestoesAlternativa(): Alternativa[] {
        return this.questoesAlternativa;
    }

    public addUltimaQuestoesAlternativa(questoesAlt: Alternativa): void {
        this.questoesAlternativa.push(questoesAlt);
    }

    public removeUltimaQuestoesAlternativa(): Alternativa {
        return this.questoesAlternativa.pop();
    }

    constructor(nivel: number, mode: number) {
        this.setNivel(nivel);
        this.setMode(mode);
        this.questoesAlternativa = [];
    }

    /** 
     * A funcao advNivel eh inutil considerando a existencia de setNivel, mas ela da um aviso
     * No console para testar
    */
    public advNivel(novoNivel: number)
    {
        console.log("O nivel foi alterado. De "+ this.getNivel() +" voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel());
    }
}

// Teste da classe

/*let usuarioFake = 1;// Ele acha q eh bolacha e pera
let partidinha = new Partida(1, 1);
let pergunta1 = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'bolache'], 1);// O certo eh bolacha
let pergunta2 = new Alternativa("Leite ou pêra?", 1, ['leite', 'pêra'], 0);// O certo eh leite
partidinha.addUltimaQuestoesAlternativa(pergunta1);
partidinha.addUltimaQuestoesAlternativa(pergunta2);

// Primeira questao, ele acerta
console.log(partidinha.getQuestoesAlternativa()[0].getEnunciado());
console.log(partidinha.getQuestoesAlternativa()[0].getAlternativas()[0]);
console.log(partidinha.getQuestoesAlternativa()[0].getAlternativas()[1]);
console.log("A resposta dada foi "+usuarioFake);
if(usuarioFake == partidinha.getQuestoesAlternativa()[0].getCorreta())
{
    console.log("Voce acertou!");
    partidinha.advNivel(2);
}
else
{
    console.log("Voce errou!");
}

console.log(" ");

// Segunda questao ele erra
console.log(partidinha.getQuestoesAlternativa()[1].getEnunciado());
console.log(partidinha.getQuestoesAlternativa()[1].getAlternativas()[0]);
console.log(partidinha.getQuestoesAlternativa()[1].getAlternativas()[1]);
console.log("A resposta dada foi "+usuarioFake);
if(usuarioFake == partidinha.getQuestoesAlternativa()[1].getCorreta())
{
    console.log("Voce acertou!");
    partidinha.advNivel(3);
}
else
{
    console.log("Voce errou!");
}*/
