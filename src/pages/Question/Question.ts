/// <reference path="../../_classes/Tela.ts" />
/// <reference path="../../_classes/Questoes/Alternativa.ts" />

class Question extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

        });

        Question.addAlternativa();
        
    }

    OnExit() {

    }

    public static addAlternativa() {
        let pergunta = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'boule'], 1);
        // @ts-ignore
        $("#alternativas").append(`<li> <a class="option">${pergunta.getAlternativas()[0]}</a> </li>`);
        
    }

}