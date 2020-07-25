/// <reference path="../../classes/Tela.ts" />
/// <reference path="../../classes/Questoes/Alternativa.ts" />
/// <reference path="../../classes/Questoes/perguntas.ts" />

class Question extends Tela {

    public static corretas: number;
    public static atual: number;
    public static totalQuestoes: number;
    public static minAcertos: number;

    OnEnter() {

        Question.corretas = 0;
        Question.atual = 0;
        Question.totalQuestoes = 0;
        Question.minAcertos = Main.partida.getMode() * 2;

        // Mapeamento de perguntas, cada posicao X do perguntasMatrix eh um assunto diferente, 
        // cada Y eh uma pergunta que eh tratada pelo .map()
        perguntasMatrix[Main.partida.getNivel()-1].map( (value, index) => {
            Question.addQuestaoAlternativa(value.enunciado, value.dificuldade, value.alternativas, value.correta);
        } );

        Question.totalQuestoes = perguntasMatrix[Main.partida.getNivel()-1].length;

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

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
        $("#contador").html(`0x${Question.corretas}/0x${Question.minAcertos}`);

        // @ts-ignore
        $("#enunciado").html(questaoAtual.getEnunciado());

        for(let i:number = 0 ; i < (questaoAtual.getAlternativas()).length; i++)
        {
            // @ts-ignore
            $("#alternativas").append(`<li> <a onClick="Question.validarResposta(${ numQuestao }, ${ i })"><span class="alternativa">$a${ i } </span>${questaoAtual.getAlternativas()[i]}</a> </li>`);
            //console.log("Colocado alternativa "+i+" no HTML");
        }
    }

    public static proxima() {
        console.log("Questao "+(Question.atual+1)+"/"+Question.totalQuestoes+". Acertos "+Question.corretas+"/"+Question.minAcertos);
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

        if( Question.corretas < Question.minAcertos) 
        {

            // @ts-ignore
            $("#alternativas").html("");

            Question.mostraQuestao(Question.atual);
        } 
        else 
        {
            if(Main.partida.getNivel() >= perguntasMatrix.length) // Se acabaram os niveis (max de 4 por enquanto)
            {
                // @ts-ignore
                $('#win').get(0).play();
                        
                Main.LoadPage("Win");
            }
            else
            {
                let a = perguntasMatrix[Main.partida.getNivel()-1].length
                while(a > 0)
                {
                    a--;
                    Main.partida.removeUltimaQuestoesAlternativa();
                }
                // @ts-ignore
                $('#win').get(0).play();
                    
                Main.LoadPage("Level");
            }
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