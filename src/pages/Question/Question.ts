/// <reference path="../../_classes/Tela.ts" />
/// <reference path="../../_classes/Questoes/Alternativa.ts" />

class Question extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

            Question.addAlternativa();

        });
        
    }

    OnExit() {

    }

    public static addAlternativa() {
        let pergunta = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'boule'], 1);
        
        // @ts-ignore
        $("#enunciado").html(pergunta.getEnunciado());
        for(let i:number = 0 ; i < 2; i++)
        {
            // @ts-ignore
            $("#alternativas").append(`<li> <a onClick="Question.validarResposta(${ i })"><span class="alternativa">$a${ i } </span>${pergunta.getAlternativas()[i]}</a> </li>`);
        }
    }

    public static validarResposta(resposta: number) {

        // @ts-ignore
        if( $("#resposta").css("margin-top") != "0px" ) {

            if( resposta == 0 ) { // Resposta correta

                // @ts-ignore
                $("#respostaErrada").hide();
                // @ts-ignore
                $("#mensagem").html("Você <b>acertou</b>, parabéns!");

            } else { // Resposta incorreta

                // @ts-ignore
                $("#respostaErrada").show();
                // @ts-ignore
                $("#mensagem").html("A alternativa correta era <b>$a0</b>");

            }

            // @ts-ignore
            $("#resposta").animate({ "margin-top": "0vh" }, "fast");

        }

    }

    public static proxima() {

        // @ts-ignore
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");

        // @ts-ignore
        $("#alternativas").html("");

        let pergunta = new Alternativa("pergunta 2???", 2, ['nenene', 'nanana', 'ninini', 'nonono'], 1);

        // @ts-ignore
        $("#enunciado").html(pergunta.getEnunciado());
        for(let i:number = 0 ; i < 4; i++)
        {
            // @ts-ignore
            $("#alternativas").append(`<li> <a onClick="Question.validarResposta(${ i })"><span class="alternativa">$a${ i } </span>${pergunta.getAlternativas()[i]}</a> </li>`);
        }

    }

}