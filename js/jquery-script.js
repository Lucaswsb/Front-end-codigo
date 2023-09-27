//efeito de esconder formulário de cadastro

$(document).ready(function(){
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#sectionLogin").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });
});