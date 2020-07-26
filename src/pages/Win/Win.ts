/**
 * Classe responsavel pelo controle de dados da tela de Win
 * 
 * @author Andre Santana Fernandes <andre_sfnd@usp.br>
 * @author Diogo Castanho Emidio <diogo.c@usp.br>
 * @author Gabriel Monteiro Ferracioli <ferracioligabriel@usp.br>
 * @author Leonardo Antonetti da Motta <l.a.motta@usp.br>
 */
/// <reference path="../../../scripts/Main.ts" />
/// <reference path="../../classes/Tela.ts" />

class Win extends Tela {

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Win", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();
            Main.SetTimer( setTimeout(() => Main.LoadPage('Index'), 4000) );

        });

    }

    OnExit() {

    }

}