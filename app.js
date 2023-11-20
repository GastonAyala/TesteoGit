const autosImportados = require('./autos');

const consecionaria = {
    autos: autosImportados,
    buscarAuto: function (ptnt) {
        const auto = this.autos.find(({ patente }) => ptnt === patente)
        return auto ? auto : null
    },
    venderAuto: function (ptnt) {
        const auto = this.buscarAuto(ptnt)
        if (!auto) {
            return "El auto no existe."
        }
        if (auto.vendido) {
            return "El auto ya esta vendido."
        }
        auto.vendido = true
        return "Auto vendido con éxito"
    },
    autosParaLaVenta: function () {
        return this.autos.filter(({ vendido }) => !vendido)
    },
    autosNuevos: function () {
        return this.autosParaLaVenta().filter(({ km }) => km < 100)
    },
    listaDeVentas: function () {
        const autosVendidos = this.autos.filter(({ vendido }) => vendido)
        return autosVendidos.map(({ precio }) => precio)
    }

};

// console.log(consecionaria.buscarAuto("JJK116"));
// console.log(consecionaria.venderAuto("APL123"));
// console.log(consecionaria.autosParaLaVenta());
// console.log(consecionaria.autosNuevos());
// console.log(consecionaria.listaDeVentas());