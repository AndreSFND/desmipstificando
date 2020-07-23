/// <reference path="../../_classes/Tela.ts" />

class Mode extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Mode", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

        });

    }

    OnExit() {

    }
}