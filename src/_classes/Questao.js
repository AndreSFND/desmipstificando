var Questao = (function () {
    function Questao(enunciado, dificuldade) {
        this.setEnunciado(enunciado);
        this.setDificuldade(dificuldade);
        this.setAcertou(false);
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
