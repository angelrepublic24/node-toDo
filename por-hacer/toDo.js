const fs = require('fs')

let listadoPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err)
    })

}

const loadDb = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    loadDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    saveDB();

    return porHacer;
}

const getListado = () => {
    loadDb();
    return listadoPorHacer;
}

const update = (descripcion, completado = true) => {
    loadDb();

    let index = listadoPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleted = (descripcion) => {
    loadDb();
    let nuevoListado = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion !== descripcion;
    })
    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        saveDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    update,
    deleted
}