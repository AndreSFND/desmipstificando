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
        var el = $('<div></div>').load("./src/pages/Question", function () {
            $("#root").append(el);
            Main.moveRight();
            Question.addQuestaoAlternativa("pergunta 1?", 3, ['nenene', 'nanana', 'ninini', 'nonono'], 0);
            Question.addQuestaoAlternativa("pergunta 2?", 2, ['aaa', 'bbb', 'ccc', 'ddd'], 1);
            Question.addQuestaoAlternativa("pergunta 3?", 1, ['ooo', 'ppp', 'qqq', 'rrr'], 2);
            Question.addQuestaoAlternativa("pergunta 4?", 3, ['1111', '2222', '3333', '4444'], 3);
            Question.mostraQuestao(Question.atual);
            $("#resposta").append("<button id=\"botaoProxima\" onClick=\"Question.proxima(" + Question.atual + ")\">Proxima</button>");
            console.log("Appended button for Proxima");
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
        $("#enunciado").html(questaoAtual.getEnunciado());
        console.log("Colocado enunciado - " + questaoAtual.getEnunciado() + " - no HTML");
        for (var i = 0; i < (questaoAtual.getAlternativas()).length; i++) {
            $("#alternativas").append("<li> <a onClick=\"Question.validarResposta(" + numQuestao + ", " + i + ")\"><span class=\"alternativa\">$a" + i + " </span>" + questaoAtual.getAlternativas()[i] + "</a> </li>");
            console.log("Colocado alternativa " + i + " no HTML");
        }
    };
    Question.proxima = function () {
        Question.atual += 1;
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");
        if (Question.corretas < 2) {
            $("#alternativas").html("");
            Question.mostraQuestao(Question.atual);
        }
        else {
            $('#win').get(0).play();
            Main.LoadPage("Level");
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
