import React from 'react';

const Contacto = ({contacto, setContacto, eliminarContacto}) => {

const { nombre, telefono, fecha, direccion, email, id } = contacto;

const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este contacto?')

    if(respuesta) {
        eliminarContacto(id)
    }
}

function calcularEdad(fecha) {
    let fechaActual = new Date();
    let fechaNac = new Date(fecha);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    let m = fechaActual.getMonth() - fechaNac.getMonth();

    if (m < 0 || (m === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

  return (
    <div className="mr-5 my-3 shadow-md bg-gray-200 w-full px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:  {''}
            <span className="font-normal normal-case"> {nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Teléfono:  {''}
            <span className="font-normal normal-case"> {telefono}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de Nacimiento:
            <span className="font-normal normal-case"> {fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Dirección:  {''}
            <span className="font-normal normal-case"> {direccion}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email:  {''}
            <span className="font-normal normal-case"> {email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Edad: 
            <span className="font-normal normal-case"> {  calcularEdad(fecha)  } </span>
        </p>
            <div className="flex justify-between mt-10">
            <button 
              type="button"
              className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-bold uppercase"
              onClick={()=>setContacto(contacto)}
            >Editar</button>
            <button 
              type="button"
              className="py-2 px-10 bg-pink-500 hover:bg-pink-700 rounded-lg text-white font-bold uppercase"
              onClick={handleEliminar}
            >Eliminar</button>
          </div>
    </div>
  )
}

export default Contacto