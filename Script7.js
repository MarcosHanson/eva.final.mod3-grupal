//Script funciones de  Botones para cambio de formato de la tabla

    $(document).ready(function(){
        $("#button1").click(function(){
          $("table").css("background-color", "yellow");
          $("table").css("border-color", "purple");
          $("table").css("font-family", "Georgia");
          $("table").css("color","black")
                });
        $("#button2").click(function(){
          $("table").css("background-color", "red");
          $("table").css("border-color", "white");
          $("table").css("font-family", "helvetica");
                });
         $("#button3").click(function(){
          $("table").css("background-color", "green");
          $("table").css("border-color", "blue");
          $("table").css("font-family", "tahoma");
                });
        });







