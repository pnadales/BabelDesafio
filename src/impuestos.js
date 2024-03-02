class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
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

  setDeducciones(deducciones) {
    return (this._deducciones = deducciones);
  }
}

export default Impuesto;
