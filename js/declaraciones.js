import UI from './clases/UI.js';
import Citas from './clases/Citas.js';
import editarCita from './funciones/editarCita.js';
    
    const $form = document.getElementById('nueva-cita');
    // let modoEdicion = false;
    // let idEdicion;
    let cita = [
        {
            nombre: '',
            propietario: '',
            telefono: '',
            fecha: '',
            hora: '',
            sintomas: '',
            id: ''
        }
    ];
    
    
    const ui = new UI();
    const citas = new Citas();

    export { $form, cita, ui, citas };