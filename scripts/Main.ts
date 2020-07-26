/**
 * Classe principal, responsavel por controlar o jogo
 * 
 * @author Andre Santana Fernandes <andre_sfnd@usp.br>
 * @author Diogo Castanho Emidio <diogo.c@usp.br>
 * @author Gabriel Monteiro Ferracioli <ferracioligabriel@usp.br>
 * @author Leonardo Antonetti da Motta <l.a.motta@usp.br>
 */

/// <reference path="../src/classes/Tela.ts" />
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
    public static partida: Partida;

    /**
     * Carrega uma pagina. 
     * (Chama o metodo OnEnter da nova pagina e o metodo OnExit da pagina antiga)
     * 
     * @param page nome da pagina a ser carregada
     */
    public static LoadPage(page: string): void {

        clearInterval(this.timer);

        if(this.paginaAtual != null) this.paginaAtual.OnExit();
        this.telas[page].OnEnter();

        this.paginaAtual = this.telas[page];

    
    }

    /**
     * Adiciona uma tela ao dicionario de telas
     * 
     * @param id identificador da tela
     * @param tela objeto da tela
     */
    public static AdicionaTela(id: string, tela: Tela) {

        this.telas[id] = tela;

    }

    /**
     * Define o timer
     * (O timer eh salvo nesta classe para evitar conflitos entre diferentes timers)
     * 
     * @param timer 
     */
    public static SetTimer(timer: number) {

        this.timer = timer;

    }

    /**
     * Executa a animacao de mover uma tela para a direita
     */
    public static moveRight() {

        // @ts-ignore
        if( $("#root").children().length > 1 ) {

            // @ts-ignore
            $("#root").css("right", "0vw").animate({ right: "100vw" }, "slow", () => {

                 // @ts-ignore
                 $("#root").find('div:first').remove();

                 // @ts-ignore
                 $("#root").css("right", "0vw");

            });

        }

    }

    /**
     * Executa a animacao de mover uma tela para a esquerda
     */
    public static moveLeft() {

        // @ts-ignore
        if($("#root").children().length > 1) {

            // @ts-ignore
            $("#root").css("right", "100vw").animate({ right: "0vw" }, "slow", () => {

                // @ts-ignore
                $("#root").children()[1].remove();

           });

       }

    }

    /**
     * Inicia uma partida
     * 
     * @param level 
     * @param mode dificuldade
     */
    public static comecaPartida(level: number, mode: number)
    {
        Main.partida = new Partida(level, mode); // nivel e modo escolhido
        console.log("V1.9 - Partida comecada, nivel "+Main.partida.getNivel()+"/"+perguntasMatrix.length+". Modo "+Main.partida.getMode());
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