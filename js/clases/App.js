import addCita from '../funciones/addCita.js';

import UI from './UI.js';
import Citas from './Citas.js';
import {
    cita,
    ui,
    
    $form,
    
    citas,
} from '../declaraciones.js';

class App{

    constructor(){
        this.appInit();
    }

    appInit(){
        //evento
        $form.addEventListener('submit', addCita);
    }

}

export default App;