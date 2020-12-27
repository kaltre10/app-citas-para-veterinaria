// import { idEdicion, modoEdicion } from '../declaraciones.js';
import addCita from './addCita.js';

let modoEdicion = false;
let idEdicion;

function editarCita(updateCita){
    //agregando al formulario
    document.getElementById('mascota').value = updateCita.nombre;
    document.getElementById('propietario').value = updateCita.propietario;
    document.getElementById('telefono').value = updateCita.telefono;
    document.getElementById('fecha').value = updateCita.fecha;
    document.getElementById('hora').value = updateCita.hora;
    document.getElementById('sintomas').value = updateCita.sintomas;
    idEdicion = updateCita.id;
    modoEdicion = true;
    let submit = document.querySelector('button[type="submit"]');
    submit.textContent = 'Editar Cita';
    submit.onclick = addCita;
}

//funcion para modificar la variable "modoEdicion" desde afuera del modulo
function setModoEdicion(valor){
    modoEdicion = valor;
    return modoEdicion;
}

export { modoEdicion, idEdicion, setModoEdicion };
export default editarCita;