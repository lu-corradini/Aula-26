import { Veiculo } from "./interface/Veiculo";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";

const veiculos: Veiculo[] =[
    {modelo: "Celta", ano: 1999, marca: "Ford"},
    {modelo: "Hb20", ano: 2016, marca: "Hyndai"},
    {modelo: "Civic", ano: 2022, marca: "Honda"},
];

console.log("Relátprop de Veículos: \n", gerarRelatorio(veiculos));