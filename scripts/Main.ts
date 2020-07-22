/// <reference path="../src/_classes/Tela.ts" />
/// <reference path="../src/Index.ts" />
/// <reference path="../src/pages/Win/Win.ts" />
/// <reference path="../src/pages/Mode/Mode.ts" />
/// <reference path="../src/pages/Level/Level.ts" />
/// <reference path="../src/pages/Password/Password.ts" />
/// <reference path="../src/pages/Question/Question.ts" />

class Main {

    private static telas: { [id: string] : Tela; } = {};    
    private static timer: number;
    private static paginaAtual: Tela;

    public static LoadPage(page: string): void {

        clearInterval(this.timer);

        if(this.paginaAtual != null) this.paginaAtual.OnExit();
        this.telas[page].OnEnter();

        this.paginaAtual = this.telas[page];

    
    }

    public static AdicionaTela(id: string, tela: Tela) {

        this.telas[id] = tela;

    }

    public static SetTimer(timer: number) {

        this.timer = timer;

    }

    public static moveRight() {

        // @ts-ignore
        if( $("#root").children().length > 1 ) {

            // @ts-ignore
            $("#root").css("right", "0vw");

            setTimeout(() => {

                // @ts-ignore
                $("#root").addClass("moving-right");

                setTimeout(() => {

                    // @ts-ignore
                    $("#root").find('div:first').remove();
                    // @ts-ignore
                    $("#root").removeClass("stationary-left").removeClass("moving-right");

                }, 1000);

            }, 10);

        }

    }

    public static moveLeft() {

        // @ts-ignore
        if($("#root").children().length > 1) {

            // @ts-ignore
            $("#root").css("right", "100vw");

           setTimeout(() => {

               // @ts-ignore
               $("#root").addClass("moving-left");

               setTimeout(() => {

                   // @ts-ignore
                   $("#root").children()[1].remove();
                   // @ts-ignore
                   $("#root").removeClass("stationary-left").removeClass("moving-left");
                   // @ts-ignore
                   $("#root").css("right", "0vw");

               }, 1000);

           }, 10);

       }

    }

}

/**
 * Define as telas que o jogo possui
 */

Main.AdicionaTela("Index", new Index());
Main.AdicionaTela("Password", new Password());
Main.AdicionaTela("Mode", new Mode());
Main.AdicionaTela("Level", new Level());
Main.AdicionaTela("Question", new Question());
Main.AdicionaTela("Win", new Win());

/**
 * Carrega a index
 */
Main.LoadPage('Index');