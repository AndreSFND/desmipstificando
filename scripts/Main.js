var Main = (function () {
    function Main() {
    }
    Main.LoadPage = function (page) {
        clearInterval(this.timer);
        if (this.paginaAtual != null)
            this.paginaAtual.OnExit();
        this.telas[page].OnEnter();
        this.paginaAtual = this.telas[page];
    };
    Main.AdicionaTela = function (id, tela) {
        this.telas[id] = tela;
    };
    Main.SetTimer = function (timer) {
        this.timer = timer;
    };
    Main.moveRight = function () {
        if ($("#root").children().length > 1) {
            $("#root").css("right", "0vw").animate({ right: "100vw" }, "slow", function () {
                $("#root").find('div:first').remove();
                $("#root").css("right", "0vw");
            });
        }
    };
    Main.moveLeft = function () {
        if ($("#root").children().length > 1) {
            $("#root").css("right", "100vw").animate({ right: "0vw" }, "slow", function () {
                $("#root").children()[1].remove();
            });
        }
    };
    Main.comecaPartida = function (mode) {
        Main.partida = new Partida(0, mode);
        console.log("V1.9 - Partida comecada, nivel 0 modo " + Main.partida.getMode());
    };
    Main.telas = {};
    return Main;
}());
Main.AdicionaTela("Index", new Index());
Main.AdicionaTela("Password", new Password());
Main.AdicionaTela("Mode", new Mode());
Main.AdicionaTela("Level", new Level());
Main.AdicionaTela("Question", new Question());
Main.AdicionaTela("Win", new Win());
Main.LoadPage('Index');
