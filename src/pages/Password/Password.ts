/// <reference path="../../classes/Tela.ts" />

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

    public static getPasswords()
    {
        return Password.passwords = [

            { password: "1234", level: "1" },
            { password: "2222", level: "2" },
            { password: "3333", level: "3" },
            { password: "4444", level: "4" }
        
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
                Main.comecaPartida(parseInt(this.passwords[i].level)-1, 1);
                Main.LoadPage('Level');
                // @ts-ignore
                $('#password').get(0).play();

            }

        }

    }

}