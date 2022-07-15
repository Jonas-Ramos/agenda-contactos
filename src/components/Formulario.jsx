import React from 'react';
import Error from './Error';
import { useState, useEffect } from 'react';


const Formulario = ({
    contactos, setContactos, contacto, setContacto 
}) => {    
    const [ nombre, setNombre ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ fecha, setFecha ] = useState("");
    const [ direccion, setDireccion ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState(false)
  
    useEffect( () => {
        if(Object.keys(contacto).length > 0){
            setNombre(contacto.nombre)
            setTelefono(contacto.telefono)
            setFecha(contacto.fecha)
            setDireccion(contacto.direccion)
            setEmail(contacto.email)
        }
    }, [contacto])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación del formulario
        if([nombre, telefono, fecha, direccion, email].includes('')){
            setError(true)
            return;
        }
        setError(false)

        //CREAR OBJETO CONTACTO

        const objetoContacto = {
            nombre,
            telefono,
            fecha,
            direccion,
            email,
        }
        if(contacto.id){
            //EDITAR EL REGISTRO
            objetoContacto.id = contacto.id

            const contactosActualizados = contactos.map (contactoState => contactoState.id === contacto.id ? objetoContacto : contactoState)
            setContactos(contactosActualizados)
            setContacto({})
        } else {
            //NUEVO REGISTRO
            objetoContacto.id = generarId()
            setContactos([...contactos, objetoContacto])
        }
        //REINICIAR FORMULARIO

        setNombre('')
        setTelefono('')
        setFecha('')
        setDireccion('')
        setEmail('')


    }
  
  
 
    return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Agregar Contacto</h2>

        <p className="text-lg mt-5 text-center mb-5">
          Agrega Contactos y {" "} <span className="text-orange-600">Adminístralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">
            { error && <Error>
            <p>Todos los campos son obligatorios</p>
            </Error>
            }    
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre</label>
                    <input 
                        type="text" 
                        id='nombre'
                        placeholder='Nombre del contacto'
                        value={nombre}
                        onChange = {(e) => setNombre(e.Object.values(obj))}
                        className="border-2 w-full p-2 mt-2 placeholder-orange-600 rounder-md"
                        />
                </div>

                <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">Teléfono</label>
                    <input 
                        type="number" 
                        id='telefono'
                        placeholder='Teléfono de contacto'
                        value={telefono}
                        onChange = {(e) => setTelefono(e.Object.values(obj))}
                        className="border-2 w-full p-2 mt-2 placeholder-orange-600 rounder-md"
                        />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="fechaNac" className="block text-gray-700 uppercase font-bold">Fecha De Nacimiento</label>
                    <input 
                        type="date" 
                        id='fecha'
                        placeholder='Fecha de Nacimiento'
                        value={fecha}
                        onChange = {(e) => setFecha(e.Object.values(obj))}
                        className="border-2 w-full p-2 mt-2 placeholder-orange-600 rounder-md"
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="direccion" className="block text-gray-700 uppercase font-bold">Dirección</label>
                    <input 
                        type="text" 
                        id='direccion'
                        placeholder='Dirección'
                        value={direccion}
                        onChange = {(e) => setDireccion(e.Object.values(obj))}
                        className="border-2 w-full p-2 mt-2 placeholder-orange-600 rounder-md"
                        />
                </div>
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Correo Electrónico
                    </label>
                    <input 
                        type="text" 
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange = {(e) => setEmail(e.Object.values(obj))}
                        className="border-2 w-full p-2 mt-2 placeholder-orange-600 rounder-md"
                        />
                        
                </div>
                <input type="submit"
                            className="bg-teal-500 p-3 rounded-md w-full text-white uppercase font-bold hover:bg-teal-600 cursor-pointer transition-all" 
                            value={contacto.id ? 'Editar Contacto ' : 'Agregar Contacto'}
                        />
        </form>
    </div>
  )
}

export default Formulario