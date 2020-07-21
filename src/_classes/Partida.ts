/// <reference path="./Questoes/Alternativa.ts" />
import { Alternativa } from "./Questoes/Alternativa";

class Partida {

    private nivel: number;
    private mode: number;

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

    constructor(nivel: number, mode: number) {
        this.setNivel(nivel);
        this.setMode(mode);
    }

    // A funcao advNivel eh inutil considerando a existencia de setNivel, mas ela da um aviso
    // No console para testar
    public advNivel(novoNivel: number)
    {
        console.log("O nivel foi alterado. De "+ this.getNivel() +" voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel());
    }
}

// Teste da classe

let usuarioFake = 0;// Ele acha q eh biscoito
let partidinha = new Partida(1, 1);
let pergunta1 = new Alternativa("Biscoito ou bolacha?", 2, ['1) biscuit', '2) boule'], 1);// O certo eh bolacha
console.log(pergunta1.getEnunciado());
console.log(pergunta1.getAlternativas()[0]);
console.log(pergunta1.getAlternativas()[1]);
console.log("A resposta dada foi "+usuarioFake);
if(usuarioFake == pergunta1.getCorreta())
{
    console.log("Voce acertou!");
    partidinha.advNivel(2);
}
else
{
    console.log("Voce errou!");
}  
