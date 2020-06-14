const argv = require('./config/yargs').argv;
const colors = require('colors')

const porHacer = require('./por-hacer/toDo');



console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea)
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let updated = porHacer.update(argv.description, argv.complete)
        console.log(updated);
        break;

    case 'borrar':
        let borrado = porHacer.deleted(argv.description);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}