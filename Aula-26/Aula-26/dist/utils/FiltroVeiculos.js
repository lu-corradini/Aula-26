"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarPorModelo = exports.filtrarPorMarca = exports.filtrarPorAno = void 0;
function filtrarPorAno(veiculos, ano) {
    return veiculos.filter(v => v.ano === ano);
}
exports.filtrarPorAno = filtrarPorAno;
function filtrarPorMarca(veiculos, marca) {
    return veiculos.filter(v => v.marca === marca);
}
exports.filtrarPorMarca = filtrarPorMarca;
function filtrarPorModelo(veiculos, modelo) {
    return veiculos.filter(v => v.modelo === modelo);
}
exports.filtrarPorModelo = filtrarPorModelo;
