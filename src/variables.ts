import { generarId } from "./funciones"

let editando = {
    value: false
}

// Objeto de Cita
const citaObj : Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}

// Primitive Types
// let number : number | boolean; // Esto se le conoce como Unions (|)

// interface Producto {
//     price: number;
//     producto: string;
//     existencia: boolean;
// }

// const producto : Producto ={
//     price:50,
//     producto:'TV',
//     existencia: true
// }

// console.log(producto)

