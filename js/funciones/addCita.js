import {
    ui,
    $form,
    citas,
    cita,
} from '../declaraciones.js';

import { modoEdicion, idEdicion } from './editarCita.js';

function addCita(){
    event.preventDefault();
    let nombre = document.getElementById('mascota').value;
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;
    let id;

    if(!modoEdicion){
        id = Date.now();
    }else{
        id = idEdicion;
    }

    cita[0] = {
        nombre,
        propietario,
        telefono,
        fecha, 
        hora,
        sintomas,
        id
    };

    ui.validarCita(cita[0]);
}

export default addCita;