"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this.impuesto = impuesto;
  }
  _createClass(Cliente, [{
    key: "getNombre",
    value: function getNombre() {
      return this._nombre;
    }
  }, {
    key: "setNombre",
    value: function setNombre(nombre) {
      return this._nombre = nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      //((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
      //Queda exonerado de Impuestos Anuales
      if (this.impuesto.getMontoBrutoAnual() == null || this.impuesto.getDeducciones() == null) {
        return "No se puede calculara el impuesto, no se ingresaron valores correctos.";
      } else if (this.impuesto.getMontoBrutoAnual() <= this.impuesto.getDeducciones()) {
        return "Queda exonerado de Impuestos Anuales";
      } else {
        return "Impuesto a pagar: ".concat((this.impuesto.getMontoBrutoAnual() - this.impuesto.getDeducciones()) * 0.21);
      }
    }
  }]);
  return Cliente;
}();
var _default = Cliente;
exports["default"] = _default;