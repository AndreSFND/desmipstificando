/// <reference path="../../../scripts/Main.ts" />
/// <reference path="../../_classes/Tela.ts" />

class Win extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Win", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();
            Main.SetTimer( setTimeout(() => Main.LoadPage('Level'), 4000) );

        });

    }

    OnExit() {

    }

}