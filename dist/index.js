"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Prueba con valores
var montoAnual = '500000a';
var montoDeducciones = 'nd50000';
//Validación de números negativos y letras
if (montoAnual <= 0 || montoDeducciones < 0 || isNaN(montoAnual || isNaN(montoDeducciones))) {
  console.log("Ambos valores deben ser positivos y no deben ser letras y caracteres");
  //Validar si las deducciones son mayores al monto anual
} else if (montoDeducciones > montoAnual) {
  console.log("usted está exonerado de impuestos");
} else {
  var impuesto1 = new _impuestos["default"](montoAnual, montoDeducciones);
  var cliente1 = new _clientes["default"]("Pablo", impuesto1);
  console.log(cliente1.getNombre(), cliente1.calcularImpuesto(), "deducción :", impuesto1.getDeducciones(), "Monto bruto Anual: ", impuesto1.getMontoBrutoAnual());
}