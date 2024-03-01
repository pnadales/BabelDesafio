class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    if (montoBrutoAnual >= 0) {
      this._montoBrutoAnual = montoBrutoAnual;
    } else {
      this._montoBrutoAnual = null;
    }

    if (deducciones >= 0) {
      this._deducciones = deducciones;
    } else {
      this._deducciones = null;
    }

  }
  getMontoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  setMontoBrutoAnual(montoBrutoAnual) {
    return (this._montoBrutoAnual = montoBrutoAnual);
  }
  getDeducciones() {
    return this._deducciones;
  }
  setMontoBrutoAnual(deducciones) {
    return (this._deducciones = deducciones);
  }
}

export default Impuesto;
