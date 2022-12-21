const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJson: function (arrayDeTareas) {
        let data = JSON.stringify(arrayDeTareas);
        fs.writeFileSync(this.archivo, data, 'utf-8');
    },
    guardarTarea: function (tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJson(tareas);
    },
    filtrarPorEstado: function(estado) {
        let listaDeTareas = this.leerArchivo();
        let tareasFiltradas = listaDeTareas.filter((tarea) => tarea.estado === estado);
        return tareasFiltradas;
    }
}
module.exports = archivoTareas;
