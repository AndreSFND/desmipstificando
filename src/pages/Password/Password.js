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
var Password = (function (_super) {
    __extends(Password, _super);
    function Password() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Password.prototype.OnEnter = function () {
        var el = $('<div></div>').load("./src/pages/Password", function () {
            $("#root").append(el);
            Main.moveRight();
            $("input").on('input', function (event) {
                var element = $(event.target);
                var index = parseFloat(element.attr('data-index'));
                if (element.val() != "" && index < 3) {
                    $('[data-index="' + (index + 1).toString() + '"]').focus();
                }
                else if (element.val() != "" && index == 3) {
                    Password.Validar();
                }
            });
        });
        Password.getPasswords();
    };
    Password.prototype.OnExit = function () {
        Password.passwords = [];
    };
    Password.getPasswords = function () {
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
    };
    Password.Validar = function () {
        var password = "";
        for (var i = 0; i < 4; i++) {
            password += $("[data-index='" + i + "']").val();
        }
        for (var i = 0; i < this.passwords.length; i++) {
            if (password == this.passwords[i].password) {
                Main.comecaPartida(this.passwords[i].level - 1, this.passwords[i].mode);
                Main.LoadPage('Level');
                $('#password').get(0).play();
            }
        }
    };
    return Password;
}(Tela));
