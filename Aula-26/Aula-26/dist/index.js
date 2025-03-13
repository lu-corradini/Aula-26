"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RelatorioVeiculos_1 = require("./utils/RelatorioVeiculos");
const veiculos = [
    { modelo: "Celta", ano: 1999, marca: "Ford" },
    { modelo: "Hb20", ano: 2016, marca: "Hyndai" },
    { modelo: "Civic", ano: 2022, marca: "Honda" },
];
console.log("Relátprop de Veículos: \n", (0, RelatorioVeiculos_1.gerarRelatorio)(veiculos));
