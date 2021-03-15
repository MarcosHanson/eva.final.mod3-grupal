//Script para realizar distintas validaciones a los campos del formulario

//código permite validar valor de ingreso en campo id accidente entre 1 - 9999
$(document).ready(function(){
    $("#formulario").submit (function(){
        if($('#idaccidente').val()<1 || $('#idaccidente').val()>9999){
            alert('Id Accidente debe ser valor entre 1 - 9999')
            return false
        }
       
    })

    $('#idaccidente').numeric();

    $('#fecha').datetimepicker({//codigo plugin datepicker para input de fecha
        timepicker: false,
        format:'d.m.Y',
        maxDate:true,
       
   })

 
    $('#hora').datetimepicker({//codigo plugin datepicker para input de hora
       datepicker:false,
       format:'H:i',
        

        })   
    

    $('#formulario').submit(function(){//codigo valida input de minimo 1 caracter y maximo 149 caracteres
        if($('#lugarAc').val()>149 || $('#lugarAc').val()<1 ){
            alert('Error en Lugar (caracteres min:1 / caracteres max:149) ')
            return false
        }

    })


    $('#formulario').submit(function(){//codigo valida input máximo 100 caracteres
        if($('#origenAc').val()>100  ){
            alert('Error en Origen (excede max. caracteres 100) ')
            return false
        }

    })

    $('#formulario').submit(function(){//codigo valida input máximo 100 caracteres
        if($('#consecuenciasAc').val()>100  ){
            alert('Error en Consecuencias (excede max. caracteres 100) ')
            return false
        }

    })
    })







