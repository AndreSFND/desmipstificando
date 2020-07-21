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

    // Sim, eu sei, eh uma funcao inutil visto o setNivel. Eh pra testar so
    advNivel(novoNivel: number)
    {
        console.log("O nivel foi alterado. De "+ this.getNivel +" voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel);
    }

}

// Teste
let partidinha = new Partida(1, 1);
partidinha.advNivel(3);