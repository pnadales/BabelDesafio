"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  _createClass(Impuesto, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  }, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(montoBrutoAnual) {
      return this._montoBrutoAnual = montoBrutoAnual;
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return this._deducciones;
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(deducciones) {
      return this._deducciones = deducciones;
    }
  }]);
  return Impuesto;
}();
var _default = Impuesto;
exports["default"] = _default;