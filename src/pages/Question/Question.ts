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

            Question.addAlternativa();

        });

        Question.corretas = 0;
        
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
                // @ts-ignore
                $('#correct').get(0).play();

                Question.corretas++;

            } else { // Resposta incorreta

                // @ts-ignore
                $("#respostaErrada").show();
                // @ts-ignore
                $("#mensagem").html("A alternativa correta era <b>$a0</b>");
                // @ts-ignore
                $('#incorrect').get(0).play();

            }

            // @ts-ignore
            $("#resposta").animate({ "margin-top": "0vh" }, "fast");

        }

    }

    public static proxima() {

        // @ts-ignore
        $("#resposta").animate({ "margin-top": "50vh" }, "fast");

        if( Question.corretas < 2 ) {

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

        } else {

            // @ts-ignore
            $('#win').get(0).play();
            
            Main.LoadPage("Level");

        }

    }

}