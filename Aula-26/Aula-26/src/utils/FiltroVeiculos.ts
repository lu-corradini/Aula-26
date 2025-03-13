import { Veiculo } from "../interface/Veiculo";

export function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[]{
    return veiculos.filter(v => v.ano === ano);
}

export function filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[]{
    return veiculos.filter(v => v. marca === marca);
}

export function filtrarPorModelo(veiculos: Veiculo[], modelo: string): Veiculo[]{
    return veiculos.filter(v => v.modelo === modelo);
}