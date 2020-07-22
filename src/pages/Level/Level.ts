/// <reference path="../../../scripts/Main.ts" />
/// <reference path="../../_classes/Tela.ts" />

class Level extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Level", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();
            Main.SetTimer( setTimeout(() => Main.LoadPage('Question'), 4000) );

        });
        
    }

    OnExit() {

    }

}