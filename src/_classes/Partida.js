var Partida = (function () {
    function Partida(nivel, mode) {
        this.questoesAlternativa = [];
        this.setNivel(nivel);
        this.setMode(mode);
    }
    Partida.prototype.getNivel = function () {
        return this.nivel;
    };
    Partida.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Partida.prototype.getMode = function () {
        return this.mode;
    };
    Partida.prototype.setMode = function (mode) {
        this.mode = mode;
    };
    Partida.prototype.getQuestoesAlternativa = function () {
        return this.questoesAlternativa;
    };
    Partida.prototype.addUltimaQuestoesAlternativa = function (questoesAlt) {
        this.questoesAlternativa.push(questoesAlt);
    };
    Partida.prototype.removeUltimaQuestoesAlternativa = function () {
        this.questoesAlternativa.pop();
    };
    Partida.prototype.advNivel = function (novoNivel) {
        console.log("O nivel foi alterado. De " + this.getNivel() + " voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel());
    };
    return Partida;
}());
var usuarioFake = 1;
var partidinha = new Partida(1, 1);
var pergunta1 = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'bolache'], 1);
var pergunta2 = new Alternativa("Leite ou pêra?", 1, ['leite', 'pera'], 0);
partidinha.addUltimaQuestoesAlternativa(pergunta1);
partidinha.addUltimaQuestoesAlternativa(pergunta2);
console.log(partidinha.getQuestoesAlternativa()[0].getEnunciado());
console.log(partidinha.getQuestoesAlternativa()[0].getAlternativas()[0]);
console.log(partidinha.getQuestoesAlternativa()[0].getAlternativas()[1]);
console.log("A resposta dada foi " + usuarioFake);
if (usuarioFake == partidinha.getQuestoesAlternativa()[0].getCorreta()) {
    console.log("Voce acertou!");
    partidinha.advNivel(2);
}
else {
    console.log("Voce errou!");
}
console.log("PROXIMA...");
console.log(partidinha.getQuestoesAlternativa()[1].getEnunciado());
console.log(partidinha.getQuestoesAlternativa()[1].getAlternativas()[0]);
console.log(partidinha.getQuestoesAlternativa()[1].getAlternativas()[1]);
console.log("A resposta dada foi " + usuarioFake);
if (usuarioFake == partidinha.getQuestoesAlternativa()[1].getCorreta()) {
    console.log("Voce acertou!");
    partidinha.advNivel(2);
}
else {
    console.log("Voce errou!");
}
