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

    public static setNivelProx()
    {
        Main.partida.advNivel(Main.partida.getNivel()+1);

        // @ts-ignore
        $("#currentLevel").html(`LEVEL ${Main.partida.getNivel()}`);

        for(let cont: number = 0; cont < 4; cont++)
        {
            if(cont == Main.partida.getNivel()-1)
            {
                // @ts-ignore
                $("#code").html(`PASS: ${Password.passwords[Main.partida.getNivel()-1].password}`);
            }
        }
        
    }

}