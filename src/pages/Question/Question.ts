/// <reference path="../../classes/Tela.ts" />
/// <reference path="../../classes/Questoes/Alternativa.ts" />

class Question extends Tela {

    public static corretas: number;

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

            Question.addQuestaoAlternativa("pergunta 1?", 3, ['nenene', 'nanana', 'ninini', 'nonono'], 0);
            Question.mostraAlternativas(0);
            Question.addQuestaoAlternativa("pergunta 2?", 2, ['aaa', 'bbb', 'ccc', 'ddd'], 1);
            //Question.addQuestaoAlternativa("pergunta 3?", 1, ['ooo', 'ppp', 'qqq', 'rrr'], 2);
        });

        Question.corretas = 0;
        
    }

    OnExit() {

    }

    public static addQuestaoAlternativa(enunciado: string, dificuldade: number, alternativas: string[], certa: number) {
        let pergunta = new Alternativa(enunciado, dificuldade, alternativas, certa);
        Main.partida.addUltimaQuestoesAlternativa(pergunta);
        console.log("Adicionado questao de alternativa.");
    }

    public static mostraAlternativas(numQuestao: number)
    {
        let questaoAtual: Alternativa = Main.partida.getQuestoesAlternativa()[numQuestao];

        // @ts-ignore
        $("#enunciado").html(questaoAtual.getEnunciado());
        console.log("Adicionado enunciado - "+questaoAtual.getEnunciado()+" - no HTML");
        for(let i:number = 0 ; i < (questaoAtual.getAlternativas()).length; i++)
        {
            // @ts-ignore
            $("#alternativas").append(`<li> <a onClick="Question.validarResposta(${ numQuestao }, ${ i })"><span class="alternativa">$a${ i } </span>${questaoAtual.getAlternativas()[i]}</a> </li>`);
            console.log("Adicionado alternativa "+i+" no HTML");
        }
    }

    public static proxima(antiga: number) {

        // @ts-ignore
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");

        if( Question.corretas < 2 ) {

            // @ts-ignore
            $("#alternativas").html("");

            Question.mostraAlternativas(antiga+1);

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