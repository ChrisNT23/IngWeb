import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { collection, addDoc } from 'firebase/firestore'

import { db } from '../firebaseConfig/firebase'
import { async } from '@firebase/util'

//configuracion de los hooks
const Create = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState(0)
    const [ciudad, setCiudad] = useState('')
    const navigate = useNavigate()

    //hacemos referencia a la colleccion que esta en firebase
    const personasCollection = collection(db, "personas")

    //funcion para almacenar
    const store = async (e) => {
        e.preventDefault()
        await addDoc(personasCollection, { nombre: nombre, apellido: apellido, edad: edad, ciudad: ciudad })
        //Enviamos a la ruta raiz que es show por ahora
        navigate('/')
        console.log(e)
    }

    // para ingresar informacion desde pantalla, formulario
    return (
        <div className='container' >
            <div className='row' >
                <div className='col'>

                    <h1>Crear Persona </h1>

                    <form onSubmit={store}>

                        <div>
                            <label className='form-label'>Nombre </label>
                            <input value={nombre}
                                //toma el evento tomado de consola y actualiza el valor con setNombre
                                onChange={(e) => setNombre(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div>
                            <label className='form-label'>Apellido </label>
                            <input value={apellido}
                                //toma el evento y actualiza el valor con setNombre
                                onChange={(e) => setApellido(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div>
                            <label className='form-label'>Edad </label>
                            <input value={edad}
                                //toma el evento y actualiza el valor con setNombre
                                onChange={(e) => setEdad(e.target.value)}
                                type="number"
                                className='form-control'
                            />
                        </div>

                        <div>
                            <label className='form-label'>Ciudad </label>
                            <input value={ciudad}
                                //toma el evento y actualiza el valor con setNombre
                                onChange={(e) => setCiudad(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        
                        <button type='submit' className='btn btn-primary'> Guardar </button>
                        


                    </form>

                </div>
            </div>
        </div>
    )
}

export default Create

