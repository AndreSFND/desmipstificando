/// <reference path="../../_classes/Tela.ts" />

class Question extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Question", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

        });
        
    }

    OnExit() {

    }

}