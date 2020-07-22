"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Alternativa = void 0;
/// <reference path="./../Questao.ts" />
var Questao_1 = require("./../Questao");
var Alternativa = /** @class */ (function (_super) {
    __extends(Alternativa, _super);
    function Alternativa(enunciado, dificuldade, alternativas, correta) {
        var _this = _super.call(this, enunciado, dificuldade) || this;
        _this.setAlternativas(alternativas);
        _this.setCorreta(correta);
        return _this;
    }
    Alternativa.prototype.getAlternativas = function () {
        return this.alternativas;
    };
    Alternativa.prototype.setAlternativas = function (alternativas) {
        this.alternativas = alternativas;
    };
    Alternativa.prototype.getCorreta = function () {
        return this.correta;
    };
    Alternativa.prototype.setCorreta = function (correta) {
        this.correta = correta;
    };
    Alternativa.prototype.checa = function (sugerido) {
        sugerido == this.correta ? _super.prototype.setAcertou.call(this, true) : _super.prototype.setAcertou.call(this, false);
    };
    return Alternativa;
}(Questao_1.Questao));
exports.Alternativa = Alternativa;
