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
var Mode = (function (_super) {
    __extends(Mode, _super);
    function Mode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mode.prototype.OnEnter = function () {
        var el = $('<div></div>').load("./src/pages/Mode", function () {
            $("#root").append(el);
            Main.moveRight();
        });
    };
    Mode.prototype.OnExit = function () {
    };
    return Mode;
}(Tela));
