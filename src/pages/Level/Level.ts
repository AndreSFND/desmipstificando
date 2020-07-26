/**
 * Classe responsavel pelo controle de dados da tela de Nivel
 * 
 * @author Andre Santana Fernandes <andre_sfnd@usp.br>
 * @author Diogo Castanho Emidio <diogo.c@usp.br>
 * @author Gabriel Monteiro Ferracioli <ferracioligabriel@usp.br>
 * @author Leonardo Antonetti da Motta <l.a.motta@usp.br>
 */
/// <reference path="../../../scripts/Main.ts" />
/// <reference path="../../classes/Tela.ts" />

class Level extends Tela {

    OnEnter() {
        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Level", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();
            Main.SetTimer( setTimeout(() => Main.LoadPage('Question'), 4000) );

            Level.setNivelProx();
        });

        Password.getPasswords();
        
    }

    OnExit() {
    }

    /**
     * BOTTA COMENTE AQUI
     */
    public static setNivelProx()
    {
        Main.partida.advNivel(Main.partida.getNivel()+1);

        // @ts-ignore
        $("#currentLevel").html(`LEVEL ${Main.partida.getNivel()}`);

        for(let cont: number = 0; cont < perguntasMatrix.length; cont++)
        {
            if(cont == Main.partida.getNivel()-1)
            {
                // @ts-ignore
                $("#code").html(`PASS: ${Password.passwords[Main.partida.getNivel()-1].password}`);
            }
        }
        
    }

}