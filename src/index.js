import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";


//Prueba con valores
let montoAnual = '500000a';
let montoDeducciones = 'nd50000';
//Validación de números negativos y letras
if (montoAnual <= 0 || montoDeducciones < 0 || isNaN(montoAnual || isNaN(montoDeducciones))) {
    console.log("Ambos valores deben ser positivos y no deben ser letras y caracteres");
    //Validar si las deducciones son mayores al monto anual
} else if (montoDeducciones > montoAnual) {
    console.log("usted está exonerado de impuestos");
} else {
    let impuesto1 = new Impuesto(montoAnual, montoDeducciones);
    let cliente1 = new Cliente("Pablo", impuesto1);
    console.log(cliente1.getNombre(), cliente1.calcularImpuesto(), "deducción :", impuesto1.getDeducciones(), "Monto bruto Anual: ", impuesto1.getMontoBrutoAnual());
}


