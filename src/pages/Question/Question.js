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
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Question.prototype.OnEnter = function () {
        var el = $('<div></div>').load("./src/pages/Question", function () {
            $("#root").append(el);
            Main.moveRight();
        });
        Question.addAlternativa();
    };
    Question.prototype.OnExit = function () {
    };
    Question.addAlternativa = function () {
        var pergunta = new Alternativa("Biscoito ou bolacha?", 2, ['biscuit', 'boule'], 1);
        $("#alternativas").append("<li> <a class=\"option\">" + pergunta.getAlternativas()[0] + "</a> </li>");
    };
    return Question;
}(Tela));
