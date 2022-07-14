import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaContactos from './components/ListaContactos';
import { useEffect, useState } from 'react';

function App() {

  const [ contactos, setContactos ] = useState([]);
  const [contacto, setContacto ] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
     const contactosLS = JSON.parse(localStorage.getItem('contactos'))
  
      setContactos(contactosLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos))
  }, [contactos])

  const eliminarContacto = id => {
    const contactosActual = contactos.filter ( contacto => contacto.id !== id)
    setContactos(contactosActual)
  }



    return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        //TRAER DATOS DE CONTACTOS
        contactos = { contactos }
        setContactos = {setContactos}
        contacto = { contacto }
        setContacto = { setContacto }
        />
        <ListaContactos 
          contactos =  { contactos }
          setContacto = { setContacto }
          eliminarContacto = { eliminarContacto }
        />
      </div>

    </div>
  )
}

export default App
