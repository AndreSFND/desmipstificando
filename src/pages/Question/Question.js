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
        Question.corretas = 0;
        Question.atual = 0;
        Question.totalQuestoes = 0;
        Question.minAcertos = Main.partida.getMode() * 2;
        perguntasMatrix[Main.partida.getNivel() - 1].map(function (value, index) {
            Question.addQuestaoAlternativa(value.enunciado, value.dificuldade, value.alternativas, value.correta);
        });
        Question.totalQuestoes = perguntasMatrix[Main.partida.getNivel() - 1].length;
        var el = $('<div></div>').load("./src/pages/Question", function () {
            $("#root").append(el);
            Main.moveRight();
            Question.mostraQuestao(Question.atual);
        });
    };
    Question.prototype.OnExit = function () {
    };
    Question.addQuestaoAlternativa = function (enunciado, dificuldade, alternativas, certa) {
        var pergunta = new Alternativa(enunciado, dificuldade, alternativas, certa);
        Main.partida.addUltimaQuestoesAlternativa(pergunta);
        console.log("Adicionado questao de alternativa.");
    };
    Question.mostraQuestao = function (numQuestao) {
        var questaoAtual = Main.partida.getQuestoesAlternativa()[numQuestao];
        $("#contador").html("0x" + Question.corretas + "/0x" + Question.minAcertos);
        $("#enunciado").html(questaoAtual.getEnunciado());
        for (var i = 0; i < (questaoAtual.getAlternativas()).length; i++) {
            $("#alternativas").append("<li> <a onClick=\"Question.validarResposta(" + numQuestao + ", " + i + ")\"><span class=\"alternativa\">$a" + i + " </span>" + questaoAtual.getAlternativas()[i] + "</a> </li>");
        }
    };
    Question.proxima = function () {
        console.log("Questao " + (Question.atual + 1) + "/" + Question.totalQuestoes + ". Acertos " + Question.corretas + "/" + Question.minAcertos);
        if (Question.atual < Question.totalQuestoes - 1) {
            Question.atual += 1;
            console.log("Proxima questao");
        }
        else {
            Question.atual = 0;
            console.log("Restart das questoes por muito erro");
        }
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");
        if (Question.corretas < Question.minAcertos) {
            $("#alternativas").html("");
            Question.mostraQuestao(Question.atual);
        }
        else {
            if (Main.partida.getNivel() >= perguntasMatrix.length) {
                $('#win').get(0).play();
                Main.LoadPage("Win");
            }
            else {
                var a = perguntasMatrix[Main.partida.getNivel() - 1].length;
                while (a > 0) {
                    a--;
                    Main.partida.removeUltimaQuestoesAlternativa();
                }
                $('#win').get(0).play();
                Main.LoadPage("Level");
            }
        }
    };
    Question.validarResposta = function (questao, respostaDada) {
        var respostaCerta = Main.partida.getQuestoesAlternativa()[questao].getCorreta();
        if ($("#resposta").css("margin-top") != "0px") {
            if (respostaDada == respostaCerta) {
                $("#respostaErrada").hide();
                $("#mensagem").html("Você <b>acertou</b>, parabéns!");
                $('#correct').get(0).play();
                Question.corretas++;
            }
            else {
                $("#respostaErrada").show();
                $("#mensagem").html("A alternativa correta era <b>$a" + respostaCerta + "</b>");
                $('#incorrect').get(0).play();
            }
            $("#resposta").animate({ "margin-top": "0vh" }, "fast");
        }
    };
    return Question;
}(Tela));
