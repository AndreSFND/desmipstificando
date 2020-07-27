/**
 * Classe responsavel pelo controle de dados da tela de Password
 * 
 * @author Andre Santana Fernandes <andre_sfnd@usp.br>
 * @author Diogo Castanho Emidio <diogo.c@usp.br>
 * @author Gabriel Monteiro Ferracioli <ferracioligabriel@usp.br>
 * @author Leonardo Antonetti da Motta <l.a.motta@usp.br>
 */
/// <reference path="../../classes/Tela.ts" />

/**
 * Interface de uma password
 */
interface Pass {

    password: string,
    level: number,
    mode: number,

}

class Password extends Tela {

    private static passwords: Pass[];

    OnEnter() {

        // @ts-ignore
        var el = $('<div></div>').load("./src/pages/Password", () => {

            // @ts-ignore
            $("#root").append(el);
            
            Main.moveRight();

            /**
             * Define a interacao do PIN (avancar apos inserir um valor)
             */
            // @ts-ignore
            $("input").on('input', function (event) {

                // @ts-ignore
                let element = $(event.target);
                let index = parseFloat(element.attr('data-index'));

                if(element.val() != "" && index < 3) {
                    
                    // @ts-ignore
                    $('[data-index="' + (index + 1).toString() + '"]').focus();

                } else if(element.val() != "" && index == 3) {

                    Password.Validar();

                }
                
            });

        });

        Password.getPasswords();

    }

    OnExit() {

        Password.passwords = [];

    }

    /**
     * Retorna as passwords disponiveis
     */
    public static getPasswords()
    {
        return Password.passwords = [

            { password: "B318", level: 1, mode: 1 },
            { password: "B4GR", level: 1, mode: 2 },
            { password: "4578", level: 1, mode: 3 },
            { password: "ICMC", level: 2, mode: 1 },
            { password: "L1NK", level: 2, mode: 2 },
            { password: "D1D1", level: 2, mode: 3 },
            { password: "C3PO", level: 3, mode: 1 },
            { password: "D3C0", level: 3, mode: 2 },
            { password: "C1C9", level: 3, mode: 3 },
            { password: "R2D2", level: 4, mode: 1 },
            { password: "B0T4", level: 4, mode: 2 },
            { password: "2D14", level: 4, mode: 3 }
        
        ];
    }

    /**
     * Valida a password
     */
    public static Validar() {

        let password = "";
        for(let i=0; i<4; i++) {

            // @ts-ignore
            password += $(`[data-index='${ i }']`).val();

        }

        for(let i=0; i<this.passwords.length; i++) {

            if(password == this.passwords[i].password) {
                Main.comecaPartida(this.passwords[i].level-1, this.passwords[i].mode);
                Main.LoadPage('Level');
                // @ts-ignore
                $('#password').get(0).play();

            }

        }

    }

}