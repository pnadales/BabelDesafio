class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this.impuesto = impuesto;
  }

  getNombre() {
    return this._nombre;
  }

  setNombre(nombre) {
    return (this._nombre = nombre);
  }

  //Método para calcular el impuesto a pagar
  calcularImpuesto() {
    return `Impuesto a pagar: ${(this.impuesto.getMontoBrutoAnual() - this.impuesto.getDeducciones()) * 0.21}`;
  }

}
export default Cliente;
