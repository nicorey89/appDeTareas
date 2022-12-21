const { Console } = require('console');
let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log();
        console.log('Listado de tareas');
        console.log('------------------------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
        console.log()
        });
        break;
    case 'crear':
        let titulo = process.argv[3];
        if(typeof titulo === 'undefined') {
            console.log('debes pasar un titulo');
            return;
        }
        let tarea = {
            titulo,
            estado: 'pendiente'
        }
        console.log('------------------------------------');
        console.log('nueva tarea creada' + ' - ' + titulo);
        console.log('------------------------------------');

        archivoTareas.guardarTarea(tarea);
        break;
    case 'filtrar':
        let estado = process.argv[3];
        if(typeof estado === 'undefined') {
            console.log('debes pasar un estado de tarea');
            return;
        }
        let tareasFiltradas = archivoTareas.filtrarPorEstado(estado);
        console.log('tareas filtradas por estado' + estado);
        console.log('------------------------------------');
        tareasFiltradas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea.titulo} - ${tarea.estado}`);
        })
        /* archivoTareas.filtrarPorEstado(estado); */
        break; 
    case undefined:
        console.log('----------------------------------------');    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        console.log('------------------------------------');
        break;
}


