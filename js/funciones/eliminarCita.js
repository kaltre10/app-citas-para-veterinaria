import { citas, ui } from '../declaraciones.js';

function eliminarCita(id){
    let divCita = event.target.parentElement;
    citas.citas = citas.citas.filter(cita => cita.id !== id);
    divCita.remove();
    ui.imprimirAlert('Cita Eliminada', 'error');
}

export default eliminarCita;