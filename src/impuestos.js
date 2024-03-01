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
    //En caso de ser un número negativo o un string retorna false
    if (montoBrutoAnual >= 0) {
      return (this._montoBrutoAnual = montoBrutoAnual);
    } else {
      return (this._montoBrutoAnual = null);
    }

  }
  getDeducciones() {
    return this._deducciones;
  }
  setMontoBrutoAnual(deducciones) {
    if (deducciones >= 0) {
      return (this._deducciones = deducciones);
    } else {
      return (this._deducciones = null);
    }

  }
}

export default Impuesto;
