/// <reference path="../../classes/Tela.ts" />
/// <reference path="../../classes/Questoes/Alternativa.ts" />
/// <reference path="../../classes/Questoes/perguntas.ts" />

class Question extends Tela {

    public static corretas: number;
    public static atual: number;
    public static totalQuestoes: number;

    OnEnter() {

        Question.corretas = 0;
        Question.atual = 0;
        Question.totalQuestoes = 0;

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

            perguntasMatrix.map( (value, index) => {
                Question.addQuestaoAlternativa(value.enunciado, value.dificuldade, value.alternativas, value.correta);
            } );

            Question.totalQuestoes = perguntasMatrix.length;

            Question.mostraQuestao(Question.atual);
        });
    }

    OnExit() {

    }

    public static addQuestaoAlternativa(enunciado: string, dificuldade: number, alternativas: string[], certa: number) {
        let pergunta = new Alternativa(enunciado, dificuldade, alternativas, certa);
        Main.partida.addUltimaQuestoesAlternativa(pergunta);

        console.log("Adicionado questao de alternativa.");
    }

    public static mostraQuestao(numQuestao: number)
    {
        let questaoAtual: Alternativa = Main.partida.getQuestoesAlternativa()[numQuestao];

        // @ts-ignore
        $("#contador").html(`0x${Question.corretas}/0x${Main.partida.getMode() * 2}`);

        // @ts-ignore
        $("#enunciado").html(questaoAtual.getEnunciado());

        console.log("Colocado enunciado - "+questaoAtual.getEnunciado()+" - no HTML");

        for(let i:number = 0 ; i < (questaoAtual.getAlternativas()).length; i++)
        {
            // @ts-ignore
            $("#alternativas").append(`<li> <a onClick="Question.validarResposta(${ numQuestao }, ${ i })"><span class="alternativa">$a${ i } </span>${questaoAtual.getAlternativas()[i]}</a> </li>`);
            //console.log("Colocado alternativa "+i+" no HTML");
        }
    }

    public static proxima() {
        console.log("Questao "+Question.atual+". Acertos "+Question.corretas+"/"+Main.partida.getMode() * 2);
        if(Question.atual < Question.totalQuestoes-1)
        {
            Question.atual += 1
            console.log("Proxima questao");
        }
        else
        {
            Question.atual = 0;
            console.log("Restart das questoes por muito erro");
        }

        // @ts-ignore
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");

        if( Question.corretas < Main.partida.getMode() * 2) {

            // @ts-ignore
            $("#alternativas").html("");

            Question.mostraQuestao(Question.atual);
        } else {

            // @ts-ignore
            $('#win').get(0).play();
                
            Main.LoadPage("Level");

        }
    }

    public static validarResposta(questao: number, respostaDada: number) {

        let respostaCerta: number = Main.partida.getQuestoesAlternativa()[questao].getCorreta();

        // @ts-ignore
        if( $("#resposta").css("margin-top") != "0px" ) {

            if( respostaDada == respostaCerta ) { // Resposta correta

                // @ts-ignore
                $("#respostaErrada").hide();
                // @ts-ignore
                $("#mensagem").html("Você <b>acertou</b>, parabéns!");
                // @ts-ignore
                $('#correct').get(0).play();

                Question.corretas++;

            } else { // Resposta incorreta

                // @ts-ignore
                $("#respostaErrada").show();
                // @ts-ignore
                $("#mensagem").html(`A alternativa correta era <b>$a${ respostaCerta }</b>`);
                // @ts-ignore
                $('#incorrect').get(0).play();

            }

            // @ts-ignore
            $("#resposta").animate({ "margin-top": "0vh" }, "fast");

        }

    }
}