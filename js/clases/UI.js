import {
    cita,
    ui,
    $form,
    citas,
} from '../declaraciones.js';

import eliminarCita from '../funciones/eliminarCita.js';
import editarCita from '../funciones/editarCita.js';
import { modoEdicion, idEdicion, setModoEdicion } from '../funciones/editarCita.js';

class UI{
    validarCita(cita){
        let {nombre, propietario, telefono, fecha, hora, sintomas, id} = cita;
        
        if(nombre == '' || propietario == '' || telefono == ''||
           fecha == '' || hora == '' || sintomas == ''){
               this.imprimirAlert('Todos los campos son obligados', 'error');
               return
            }else{
                if(modoEdicion){
                    this.imprimirAlert('Cita Actualizada');
                    let citasUpdate = citas.citas.map((element, i) => {
                    if(element.id == id){
                        citas.citas[i].nombre = nombre;
                        citas.citas[i].propietario = propietario;
                        citas.citas[i].telefono = telefono;
                        citas.citas[i].fecha = fecha;
                        citas.citas[i].hora = hora;
                        citas.citas[i].sintomas = sintomas;
                        citas.citas[i].id = id;
                    }
                });
                this.imprimirCita();
                document.querySelector('button[type="submit"]').textContent = 'Crear Cita';

                setModoEdicion(false);
                return
                
            }else{

                this.imprimirAlert('Cita Registrada');
                citas.citas = [...citas.citas, cita];
                this.imprimirCita();
                return;
                
            }
            
            
        }
        
    }

    imprimirCita(){
        let $ul = document.getElementById('citas');
        
        
        
        let fragment = document.createDocumentFragment();
        
        // Limpiamos HTML
        while($ul.firstChild){
            $ul.removeChild($ul.firstChild);
        }
        
        citas.citas.forEach(citaItem => {

            let {nombre, propietario, telefono, fecha, hora, sintomas, id} = citaItem;
            
            let $div = document.createElement('div');
            $div.classList.add('cita','p-3');
            $div.dataset.id = id;
            
            let $h2 = document.createElement('h2');
            $h2.classList.add('card-title', 'font-weight-bolder');
            $h2.textContent = `Mascota: ${nombre}`;

            let $propietario = document.createElement('p');
            $propietario.textContent = `Propietario: ${propietario}`;

            let $telefono = document.createElement('p');
            $telefono.textContent = `Telefono: ${telefono}`;
            
            let $fecha = document.createElement('p');
            $fecha.textContent = `Fecha: ${fecha}`;

            let $hora = document.createElement('p');
            $hora.textContent = `Hora: ${hora}`;

            let $sintomas = document.createElement('p');
            $sintomas.textContent = `Sintomas: ${sintomas}`;

            let $btnDelete = document.createElement('button');
            $btnDelete.classList.add('btn', 'btn-danger', 'mr-2');
            $btnDelete.innerHTML = `Eliminar &times`;
            $btnDelete.onclick = () => eliminarCita(id);


            let $btnUpdate = document.createElement('button');
            $btnUpdate.classList.add('btn', 'btn-info');
            $btnUpdate.innerHTML = `Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`;
            $btnUpdate.onclick = () => editarCita(citaItem);

            $div.appendChild($h2);
            $div.appendChild($propietario);
            $div.appendChild($telefono);
            $div.appendChild($fecha);
            $div.appendChild($hora);
            $div.appendChild($sintomas);
            $div.appendChild($btnDelete);
            $div.appendChild($btnUpdate);
            fragment.appendChild($div);
        });
        

        $ul.appendChild(fragment);
        
        $form.reset();
    }

    imprimirAlert(mensaje, tipo){
        let $div = document.createElement('div');
        $div.classList.add('text-center', 'alert', 'd-block', 'col-12');
        if(tipo == 'error'){
            $div.classList.add('alert-danger');
        }else{
            $div.classList.add('alert-success');
        }
        let $p = document.createElement('p');
        $p.textContent = mensaje;
        $div.appendChild($p);
        $form.parentNode.insertBefore($div, $form);
        setTimeout(() => {
            $div.remove();
        }, 3000)
    }
}

export default UI;