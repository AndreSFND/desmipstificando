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
    level: string

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

            { password: "4578", level: "1" },
            { password: "B0C2", level: "2" },
            { password: "C1C9", level: "3" },
            { password: "0802", level: "4" }
        
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
                Main.comecaPartida(parseInt(this.passwords[i].level)-1, 2);
                Main.LoadPage('Level');
                // @ts-ignore
                $('#password').get(0).play();

            }

        }

    }

}