import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

let impuesto1 = new Impuesto(500, 100);
let cliente1 = new Cliente("Pablo", impuesto1);

let impuesto2 = new Impuesto(-4, "ads");
let cliente2 = new Cliente("Aldo", impuesto2);

let impuesto3 = new Impuesto(500, 600);
let cliente3 = new Cliente("Alejandra", impuesto3);

console.log(cliente1.getNombre(), cliente1.calcularImpuesto(), "deducción :", impuesto1.getDeducciones(), "Monto bruto Anual: ", impuesto1.getMontoBrutoAnual());
console.log(cliente2.getNombre(), cliente2.calcularImpuesto(), "deducción :", impuesto2.getDeducciones(), "Monto bruto Anual: ", impuesto2.getMontoBrutoAnual());
console.log(cliente3.getNombre(), cliente3.calcularImpuesto(), "deducción :", impuesto3.getDeducciones(), "Monto bruto Anual: ", impuesto3.getMontoBrutoAnual());