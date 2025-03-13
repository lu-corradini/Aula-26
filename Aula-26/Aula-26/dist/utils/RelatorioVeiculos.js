"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarRelatorio = void 0;
function gerarRelatorio(veiculos) {
    if (veiculos.length === 0) {
        return "Nenhum veículo cadastrado.";
    }
    return veiculos.map(v => `Modelo: ${v.modelo} | Ano: ${v.ano} | Marca: ${v.marca}.`).join("\n");
}
exports.gerarRelatorio = gerarRelatorio;
