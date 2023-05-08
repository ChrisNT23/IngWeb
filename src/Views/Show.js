//Importacion de react y hooks
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//
import { traerPersonas, borrarPersonas } from '../Controllers/userController'
//
import { doc } from 'firebase/firestore'
//importacion de swal para la notificacion al eliminar un documento
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)
//



export const Show = () => {
    
    // 1-----    configuracion de los hooks
    // hooks son una api de react que permite gestionar los estados en los componentes
    // funcionales

    //useState devuelve una funcion con un estado (personas) para actualizarla

    const [personas, setPersonas] = useState([])

    const getPersonas = async () => {
        const data = await traerPersonas()
        setPersonas(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        console.log(personas)
    }

    const deletePersonas = async (id) => {
        borrarPersonas(id);
        getPersonas()
    }
  

    // 5-----funcion de confirmacion para Sweer alert 2
        //codigo copiado de la pagina de sweet alert
        const confirmDelete = (id) => {
            Swal.fire({
                title: '¿Está seguro de eliminar la persona seleccionada?',
                text: "No se podrá revertir esta acción",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    deletePersonas(id)
                  Swal.fire(
                    'Borrado!',
                    'La persona ha sido eliminada con éxito.',
                    'success'
                  )
                }
              })
        }


    // 6-----se usa useEffect

    useEffect(() => {
        getPersonas()
        // eslint-disable-next-line
    }, [])

    // 7-----debemos devolver la vista del componente
    return (

        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-grid gap-2'>
                            
                            
                            <div>
                                <table className='table table-dark table-hover'>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Edad</th>
                                            <th>Ciudad</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {personas.map((persona) => (
                                            <tr key={persona.id}>
                                                <td>{persona.nombre}</td>
                                                <td>{persona.apellido}</td>
                                                <td>{persona.edad}</td>
                                                <td>{persona.ciudad}</td>
                                                <td>
                                                    <Link to={`/edit/${persona.id}`} className='btn btn-light'><i className="fa-sharp fa-solid fa-pen-to-square fa-xs"></i></Link>
                                                    <button onClick={() => { confirmDelete(persona.id) }} className='btn btn-danger'><i className="fa-sharp fa-solid fa-trash fa-xs"></i></button>
                                                </td>


                                            </tr>
                                        ))}


                                    </tbody>


                                </table>
                                <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Crear</Link>

                            </div>


                        </div>


                    </div>


                </div>


            </div>

        </>
    )
}

export default Show