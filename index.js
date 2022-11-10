/*Importación de clases*/
import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/Director.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
 
// const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '12663738', 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'));

const gerente = new Gerente('Pedro Rivas', '12736362782', 12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente, '6556'))
// const director = new Director('Elena Moreno', '63637828', 15000);

const cliente = new Cliente('Leonardo','13804050','123224');

cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'));

