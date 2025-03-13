import { Veiculo } from "../interface/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo> {

    private listaVeiculos: T[] = []; 
    adicionar(veiculo:T): void{
        this.listaVeiculos.push(veiculo);
    }
    
    remover(modelo: string): void {
        this.listaVeiculos = this.listaVeiculos.filter(v => modelo !== modelo);
    }

    listarVeiculos(): T[]{
        return this.listaVeiculos;
    }
}