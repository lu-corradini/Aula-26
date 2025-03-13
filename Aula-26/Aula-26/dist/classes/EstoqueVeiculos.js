"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueVeiculos = void 0;
class EstoqueVeiculos {
    constructor() {
        this.estoque = [];
    }
    adicionarEstoque(modelo, quantidade) {
        const item = this.estoque.find(v => v.modelo === modelo);
        if (item) {
            item.quantidade += quantidade;
        }
        else {
            this.estoque.push({ modelo, quantidade });
        }
    }
    removeEstoque(modelo, quantidade) {
        const item = this.estoque.find(v => v.modelo === modelo);
        if (item) {
            item.quantidade -= quantidade;
            if (item.quantidade <= 0) {
                this.estoque = this.estoque.filter(v => v.modelo === modelo);
            }
        }
    }
    consultaEstoque(modelo) {
        const item = this.estoque.find(v => v.modelo === modelo);
        return item ? item.quantidade : 0;
    }
}
exports.EstoqueVeiculos = EstoqueVeiculos;
