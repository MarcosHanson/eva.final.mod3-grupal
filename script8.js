//Script Formulario para visualizar el cupo restante para ingresar caracteres en el cuadro de texto

$(document).ready(function(){

    var max_chars = 250;

    $('#max').html(max_chars);

    $('#comment').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars - chars;
        $('#contador').html(diff);   
    });
});