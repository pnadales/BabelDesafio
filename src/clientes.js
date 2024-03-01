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
  calcularImpuesto() {
    //((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
    //Queda exonerado de Impuestos Anuales
    if (this.impuesto.getMontoBrutoAnual() == null || this.impuesto.getDeducciones() == null) {
      return "No se puede calculara el impuesto, no se ingresaron valores correctos.";
    } else if (this.impuesto.getMontoBrutoAnual() <= this.impuesto.getDeducciones()) {
      return "Queda exonerado de Impuestos Anuales";

    }
    else {
      return `Impuesto a pagar: ${(this.impuesto.getMontoBrutoAnual() - this.impuesto.getDeducciones()) * 0.21}`;
    }
  }


}
export default Cliente;
