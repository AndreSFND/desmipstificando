var Partida = (function () {
    function Partida(nivel, mode) {
        this.setNivel(nivel);
        this.setMode(mode);
        this.questoesAlternativa = [];
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
        return this.questoesAlternativa.pop();
    };
    Partida.prototype.advNivel = function (novoNivel) {
        console.log("O nivel foi alterado. De " + this.getNivel() + " voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel());
    };
    return Partida;
}());
