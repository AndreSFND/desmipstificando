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
            $("#root").css("right", "0vw");
            setTimeout(function () {
                $("#root").addClass("moving-right");
                setTimeout(function () {
                    $("#root").find('div:first').remove();
                    $("#root").removeClass("stationary-left").removeClass("moving-right");
                }, 1000);
            }, 10);
        }
    };
    Main.moveLeft = function () {
        if ($("#root").children().length > 1) {
            $("#root").css("right", "100vw");
            setTimeout(function () {
                $("#root").addClass("moving-left");
                setTimeout(function () {
                    $("#root").children()[1].remove();
                    $("#root").removeClass("stationary-left").removeClass("moving-left");
                    $("#root").css("right", "0vw");
                }, 1000);
            }, 10);
        }
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