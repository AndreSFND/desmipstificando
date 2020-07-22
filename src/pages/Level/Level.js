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
        });
    };
    Level.prototype.OnExit = function () {
    };
    return Level;
}(Tela));
