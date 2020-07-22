"use strict";
exports.__esModule = true;
/// <reference path="./Questoes/Alternativa.ts" />
var Alternativa_1 = require("./Questoes/Alternativa");
var Partida = /** @class */ (function () {
    function Partida(nivel, mode) {
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
    // A funcao advNivel eh inutil considerando a existencia de setNivel, mas ela da um aviso
    // No console para testar
    Partida.prototype.advNivel = function (novoNivel) {
        console.log("O nivel foi alterado. De " + this.getNivel() + " voce foi para...");
        this.setNivel(novoNivel);
        console.log(this.getNivel());
    };
    return Partida;
}());
// Teste da classe
var usuarioFake = 0; // Ele acha q eh biscoito
var partidinha = new Partida(1, 1);
var pergunta1 = new Alternativa_1.Alternativa("Biscoito ou bolacha?", 2, ['1) biscuit', '2) boule'], 1); // O certo eh bolacha
console.log(pergunta1.getEnunciado());
console.log(pergunta1.getAlternativas()[0]);
console.log(pergunta1.getAlternativas()[1]);
console.log("A resposta dada foi " + usuarioFake);
if (usuarioFake == pergunta1.getCorreta()) {
    console.log("Voce acertou!");
    partidinha.advNivel(2);
}
else {
    console.log("Voce errou!");
}
