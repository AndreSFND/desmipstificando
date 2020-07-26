/**
 * Classe responsavel pelo controle de dados da tela de Modo
 * 
 * @author Andre Santana Fernandes <andre_sfnd@usp.br>
 * @author Diogo Castanho Emidio <diogo.c@usp.br>
 * @author Gabriel Monteiro Ferracioli <ferracioligabriel@usp.br>
 * @author Leonardo Antonetti da Motta <l.a.motta@usp.br>
 */
/// <reference path="../../classes/Tela.ts" />

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