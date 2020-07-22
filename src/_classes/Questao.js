"use strict";
exports.__esModule = true;
exports.Questao = void 0;
// Temos uma classe Questao abstrata, pois ela eh so a base para os varios 
// Tipos de questoes no nosso programa
var Questao = /** @class */ (function () {
    function Questao(enunciado, dificuldade) {
        this.setEnunciado(enunciado);
        this.setDificuldade(dificuldade);
        this.setAcertou(false); // Todas as questoes comecam como erradas, caso alguma seja pulada
    }
    Questao.prototype.getEnunciado = function () {
        return this.enunciado;
    };
    Questao.prototype.setEnunciado = function (enunciado) {
        this.enunciado = enunciado;
    };
    Questao.prototype.isAcertou = function () {
        return this.acertou;
    };
    Questao.prototype.setAcertou = function (acertou) {
        this.acertou = acertou;
    };
    Questao.prototype.getDificuldade = function () {
        return this.dificuldade;
    };
    Questao.prototype.setDificuldade = function (dificuldade) {
        this.dificuldade = dificuldade;
    };
    return Questao;
}());
exports.Questao = Questao;
