import React from 'react'
import Contacto from './Contacto'


const ListaContactos = ({contactos, setContacto, eliminarContacto}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      { contactos && contactos.length ? (
          
            <div>
            <h2 className="font-black text-3xl text-center">Lista de Contactos</h2>
        
            <p className="text-lg mt-5 text-center mb-5">
              Administra tus {" "}
                <span className="text-orange-600 font-bold ">Contactos</span>
            </p>  
            
            <div className="m-3 bg-white rounded-xl shadow-md px-5 py-5">
              

              { contactos.map( contacto => 
            <Contacto 
                contacto = { contacto }
                key={contacto.id}
                setContacto={setContacto}
                eliminarContacto={eliminarContacto}
            />        
              ) }
            </div>
            </div>
        ) : (
            <>
                <h2 className="font-black text-3xl text-center">No hay contactos</h2>
            <p className="text-lg mt-5 text-center mb-5">
            Comienza agregando contactos {" "}
            <span className="text-orange-600 font-bold ">a tu Agenda</span>
          </p>
            </>   

        ) }
        
        
        
        
        
    
    </div>
  )
}

export default ListaContactos