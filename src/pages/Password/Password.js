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
        $("#root").load("./src/pages/Password", function () {
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
        Password.passwords = [
            { password: "1234", level: "1" },
            { password: "3333", level: "2" },
            { password: "4444", level: "4" }
        ];
    };
    Password.prototype.OnExit = function () {
        Password.passwords = [];
    };
    Password.Validar = function () {
        var password = "";
        for (var i = 0; i < 4; i++) {
            password += $("[data-index='" + i + "']").val();
        }
        for (var i = 0; i < this.passwords.length; i++) {
            if (password == this.passwords[i].password) {
                Main.LoadPage('Level');
            }
        }
    };
    return Password;
}(Tela));
