
let valorTest1 = ''

document.addEventListener("DOMContentLoaded", function() {

    //solucion al boton "x" del modal por conflictos con el botstrap y el jquery ui
    var bootstrapButton = $.fn.button.noConflict()
    $.fn.bootstrapBtn = bootstrapButton;
    //fin solucion

    document.querySelector('#fechaRegistro').value = obtenerFechaActual()

    llenarComboBusqueda()
    listarTabla()

});

function listarTabla(){
    let strCuerpo = ''

    for (let i = 0; i < 20; i++) {
        strCuerpo +=    `
                        <tr>
                            <td>${i+1}</td>
                            <td>14-03-2001</td>
                            <td>Comentario de Prueba </td>
                            <td title="Editar" class="info" style="text-align: center;"><i onclick="abrirModalRegistro(2)" class="fa fa-pencil" aria-hidden="true" style="color:#33fd10;cursor:pointer"></i></td>
                            <td title="Eliminar" class="info" style="text-align: center"><i onclick="abrirModalEliminacion()" class="fa fa-trash" aria-hidden="true" style="color: red;cursor:pointer"></i></td>
                        </tr>
                        `
    }

    document.querySelector('#tablaRegistro').getElementsByTagName('tbody')[0].innerHTML = strCuerpo

    $('.info').tooltipster();
}

function abrirModalEliminacion(){
    $('#divModalEliminacion').dialog({
        title: 'Confirmar eliminación',
        closeOnEscape: true,
        autoOpen: false,
        show:'fold',
        hide:'fold',
        modal: true,
        width: 325,
        height:'auto',
        buttons:{
            'Si':function(){

            },
            'No':function(){
                $('#divModalEliminacion').dialog('close')
            }
        }
    })
    $('#divModalEliminacion').dialog('open')
}


function llenarComboBusqueda(){
    let strOptions = `  <option value="0">--ELIJA UNA OPCION--</option>
                        <option value="1">Cambio de Aceite</option>
                        <option value="2">Mantenimiento</option>
                        <option value="3">Afinamiento</option>`

    document.querySelector('#busquedaSelect').innerHTML = strOptions
    $('#busquedaSelect').select2()
}


function abrirModalRegistro(){
    $('#divModalRegistro').dialog({
        title: 'Nuevo Registro',
        closeOnEscape: true,
        autoOpen: false,
        show:'fold',
        hide:'fold',
        modal: true,
        width: 550,
        height:'auto',
        buttons:{
            'Guardar':function(){
                registrarNuevoRegistro()

            },
            'Cerrar':function(){
                $('#divModalRegistro').dialog('close')
            }
        }
    })
    $('#divModalRegistro').dialog('open')

    document.querySelector('#fechaRegistro').value = obtenerFechaActual()
    document.querySelector('#txtRegistro').value = ''

    console.log('fecha del registro: ',document.querySelector('#fechaRegistro').value)
}

function obtenerFechaActual(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes //agrega cero si el menor de 10

    return `${ano}-${mes}-${dia}`
}

function registrarNuevoRegistro(){
    let fecha = document.querySelector('#fechaRegistro').value  
    let comentario = document.querySelector('#txtRegistro').value

    console.log("se envia como parametros: ",fecha,"-",comentario)

    $('#divModalRegistro').dialog('close')
}

