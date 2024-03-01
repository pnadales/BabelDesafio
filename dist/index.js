"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuestos["default"](500, 100);
var cliente1 = new _clientes["default"]("Pablo", impuesto1);
var impuesto2 = new _impuestos["default"](-4, "ads");
var cliente2 = new _clientes["default"]("Aldo", impuesto2);
var impuesto3 = new _impuestos["default"](500, 600);
var cliente3 = new _clientes["default"]("Alejandra", impuesto3);
console.log(cliente1.getNombre(), cliente1.calcularImpuesto(), "deducción :", impuesto1.getDeducciones(), "Monto bruto Anual: ", impuesto1.getMontoBrutoAnual());
console.log(cliente2.getNombre(), cliente2.calcularImpuesto(), "deducción :", impuesto2.getDeducciones(), "Monto bruto Anual: ", impuesto2.getMontoBrutoAnual());
console.log(cliente3.getNombre(), cliente3.calcularImpuesto(), "deducción :", impuesto3.getDeducciones(), "Monto bruto Anual: ", impuesto3.getMontoBrutoAnual());