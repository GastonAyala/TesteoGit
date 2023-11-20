const autosImportados = require('./autos');

const consecionaria = {
    autos: autosImportados,
    buscarAuto: function (ptnt) {
        const auto = this.autos.find(({ patente }) => ptnt === patente)
        return auto ? auto : null
    },
};

// console.log(consecionaria.buscarAuto("APL123"));