// Selectores

// Existen dos formas de inferir el tipo de dato en ts:

//La primera es usando la palabra reservada "as"

export const pacienteInput = document.querySelector('#paciente') as HTMLInputElement // Le asigna como unico tipo de dato el HTMLInputElement y asegura que existira dicho valor
export const propietarioInput = document.querySelector('#propietario') as HTMLInputElement
export const emailInput = document.querySelector('#email') as HTMLInputElement
export const fechaInput = document.querySelector('#fecha') as HTMLInputElement
export const sintomasInput = document.querySelector('#sintomas') as HTMLTextAreaElement

export const formulario = document.querySelector('#formulario-cita') as HTMLFormElement
export const formularioInput = document.querySelector('#formulario-cita input[type="submit"]') as HTMLInputElement
export const contenedorCitas = document.querySelector('#citas') as HTMLDivElement

// La segunda es usando la sintaxis de Generics

// export const pacienteInput = document.querySelector<HTMLInputElement>('#paciente') // Le asigna como unico tipo de dato el HTMLInputElement o null
// export const propietarioInput = document.querySelector<HTMLInputElement>('#propietario')
// export const emailInput = document.querySelector<HTMLInputElement>('#email')
// export const fechaInput = document.querySelector<HTMLInputElement>('#fecha')
// export const sintomasInput = document.querySelector<HTMLTextAreaElement>('#sintomas')

// export const formulario = document.querySelector<HTMLFormElement>('#formulario-cita')
// export const formularioInput = document.querySelector<HTMLInputElement>('#formulario-cita input[type="submit"]')
// export const contenedorCitas = document.querySelector<HTMLDivElement>('#citas')
