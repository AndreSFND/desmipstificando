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
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Question.prototype.OnEnter = function () {
        var el = $('<div></div>').load("./src/pages/Question", function () {
            $("#root").append(el);
            Main.moveRight();
            Question.addAlternativa();
        });
    };
    Question.prototype.OnExit = function () {
    };
    Question.addAlternativa = function () {
        var pergunta = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'boule'], 1);
        $("#enunciado").html(pergunta.getEnunciado());
        for (var i = 0; i < 2; i++) {
            $("#alternativas").append("<li> <a onClick=\"Question.validarResposta(" + i + ")\"><span class=\"alternativa\">$a" + i + " </span>" + pergunta.getAlternativas()[i] + "</a> </li>");
        }
    };
    Question.validarResposta = function (resposta) {
        if ($("#resposta").css("margin-top") != "0px") {
            if (resposta == 0) {
                $("#respostaErrada").hide();
                $("#mensagem").html("Você <b>acertou</b>, parabéns!");
            }
            else {
                $("#respostaErrada").show();
                $("#mensagem").html("A alternativa correta era <b>$a0</b>");
            }
            $("#resposta").animate({ "margin-top": "0vh" }, "fast");
        }
    };
    Question.proxima = function () {
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");
        $("#alternativas").html("");
        var pergunta = new Alternativa("pergunta 2???", 2, ['nenene', 'nanana', 'ninini', 'nonono'], 1);
        $("#enunciado").html(pergunta.getEnunciado());
        for (var i = 0; i < 4; i++) {
            $("#alternativas").append("<li> <a onClick=\"Question.validarResposta(" + i + ")\"><span class=\"alternativa\">$a" + i + " </span>" + pergunta.getAlternativas()[i] + "</a> </li>");
        }
    };
    return Question;
}(Tela));
