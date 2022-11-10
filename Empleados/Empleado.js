export class Empleado
{
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor (nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave (clave) {
        this.#clave = clave;
    }

    autenticable (clave) {
        return this.#clave == clave;
    }

    verBonificacion () {
        return this.#salario; //No tiene bonificación
        
        /*Método abstracto
        throw new Error ('Debes definir este método en tu clase');*/
    }

    _verBonificacion (bono) {
        return this.#salario + (this.#salario * (bono / 100));
    }
}