// Script para las funciones de validacion de l formulario
function validapago() {
        
     
     var monto = document.getElementById("monto").value;
     var rut = document.getElementById("rutc").value;
     var anio = document.getElementById("an").value;
     var mes = document.getElementById("mes").value;

        if ( monto=="" || monto < 0 || monto > 99999999) {
        document.getElementById("monto").setAttribute("style", "border: 5px; border-color: red; border-style: groove; background-color: grey;");
       return;
        } 
        if (mes==""){
                 document.getElementById("mes").setAttribute("style", "border: 5px; border-color: red; border-style: groove; background-color: grey;");
        return;
        }
         if(anio==""){
                document.getElementById("an").setAttribute("style", "border: 5px; border-color: red; border-style: groove; background-color: grey;");
        return;
         }
         if (rut==""){
                document.getElementById("rutc").setAttribute("style", "border: 5px; border-color: red; border-style: groove; background-color: grey;");
        return;
        }
        else{
            alert ("Los datos ingresesados son Válidos")
         }
    
      
}



function datos(){
        var fecha = new Date();
        document.getElementById("fechac").value = fecha.toLocaleDateString();

 
}

function combo2(){
        
        var sel = document.getElementById("an");
        
                for (let i = 2010; i <= 2050; i++){
                var option = document.createElement("option");
                     option.setAttribute("value",i);
                     option.setAttribute("label",i);
                     sel.appendChild(option);
                    
                 }
                
                
              };


        





