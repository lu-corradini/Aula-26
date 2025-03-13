"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorVeiculos = void 0;
class GerenciadorVeiculos {
    constructor() {
        this.listaVeiculos = [];
    }
    adicionar(veiculo) {
        this.listaVeiculos.push(veiculo);
    }
    remover(modelo) {
        this.listaVeiculos = this.listaVeiculos.filter(v => modelo !== modelo);
    }
    listarVeiculos() {
        return this.listaVeiculos;
    }
}
exports.GerenciadorVeiculos = GerenciadorVeiculos;
