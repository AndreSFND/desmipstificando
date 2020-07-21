const Index = './src';
const Password = './src/Password';
const Mode = './src/Mode';
const Question = './src/Question';
const Level = './src/Level';
const Win = './src/Win';

let timer;

function LoadPage(page) {

    clearInterval(timer);
    $("#root").load( page );

}

$(document).ready(() => {

    LoadPage(Index);

});