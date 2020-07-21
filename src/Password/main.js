/**
 * Define a interacao do PIN (avancar apos inserir um valor)
 */
$("input").on('input', function (event) {

    let element = $(event.target);
    let index = parseFloat(element.attr('data-index'));

    if(element.val() != "" && index < 3) {
        
        $('[data-index="' + (index + 1).toString() + '"]').focus();

    } else if(element.val() != "" && index == 3) {

        Validate();

    }
    
});

const passwords = [

    {
        password: "1234",
        level: "1"
    },
    {
        password: "3333",
        level: "2"
    },
    {
        password: "4444",
        level: "4"
    }

];

/**
 * Valida a password
 */
function Validate() {

    let password = "";
    for(let i=0; i<4; i++) {

        password += $(`[data-index='${ i }']`).val();

    }

    for(i=0; i<passwords.length; i++) {

        if(password == passwords[i].password) {

            LoadPage(Level);

        }

    }

}