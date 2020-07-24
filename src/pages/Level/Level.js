var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Level = (function (_super) {
    __extends(Level, _super);
    function Level() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level.prototype.OnEnter = function () {
        var el = $('<div></div>').load("./src/pages/Level", function () {
            $("#root").append(el);
            Main.moveRight();
            Main.SetTimer(setTimeout(function () { return Main.LoadPage('Question'); }, 4000));
            Level.setNivelProx();
        });
        Level.passwords = [
            { password: "1234", level: "1" },
            { password: "2222", level: "2" },
            { password: "3333", level: "3" },
            { password: "4444", level: "4" }
        ];
    };
    Level.prototype.OnExit = function () {
    };
    Level.setNivelProx = function () {
        Main.partida.advNivel(Main.partida.getNivel() + 1);
        $("#currentLevel").html("LEVEL " + Main.partida.getNivel());
        for (var cont = 0; cont < 4; cont++) {
            if (cont == Main.partida.getNivel() - 1) {
                $("#code").html("PASS: " + Level.passwords[Main.partida.getNivel() - 1].password);
            }
        }
    };
    return Level;
}(Tela));
