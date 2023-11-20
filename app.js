const autosImportados = require('./autos');

const concesionaria = {
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
    },
    totalDeVentas: function () {
        return this.listaDeVentas().reduce((acum, valor) => acum += valor, 0)
    },
    puedeComprar: function ({precio, cuotas}, {capacidadDePagoEnCuotas, capacidadDePagoTotal}) {
        const valorCuota = precio / cuotas
        return !(precio > capacidadDePagoTotal) && capacidadDePagoEnCuotas > valorCuota
    },
    autosQuePuedeComprar: function (persona) {
        return this.autosParaLaventa().filter((auto) => this.puedeComprar(auto, persona))
    }
};
const persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
};

// console.log(concesionaria.buscarAuto("JJK116"));
// console.log(concesionaria.venderAuto("APL123"));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.puedeComprar(concesionaria.autos[1], persona));
// console.log(concesionaria.buscarAuto("APL123"))