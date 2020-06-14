var opt = {
    description: {
        alias: 'd',
        demand: true,
        desc: 'Marca como completado o pendiente la tarea'
    },
    complete: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualizar tarea', opt)
    .command('borrar', 'Borrar tareas', opt)
    .help()
    .argv;


module.exports = {
    argv
}