/// <reference path="../../../scripts/Main.ts" />
/// <reference path="../../classes/Tela.ts" />

class Level extends Tela {

    private static passwords: Pass[];

    OnEnter() {
        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Level", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();
            Main.SetTimer( setTimeout(() => Main.LoadPage('Question'), 4000) );

            Level.setNivelProx();
        });

        // Essas passwords so servem para aparecer na tela, nao para realmente levar o usuario para o nivel certo
        Level.passwords = [

            { password: "1234", level: "1" },
            { password: "2222", level: "2" },
            { password: "3333", level: "3" },
            { password: "4444", level: "4" }
        
        ];
        
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
                $("#code").html(`PASS: ${Level.passwords[Main.partida.getNivel()-1].password}`);
            }
        }
        
    }

}