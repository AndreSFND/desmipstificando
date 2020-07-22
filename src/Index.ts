/// <reference path="./_classes/Tela.ts" />

class Index extends Tela {

    OnEnter() {
        
        // @ts-ignore
        var el = $('<div></div>').load("./src", () => {

            // @ts-ignore
            $("#root").prepend(el);
            
            Main.moveLeft();

        });

    }

    OnExit() {

    }

}