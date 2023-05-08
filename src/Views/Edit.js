import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ nombre, setNombre ] = useState('')
    const [ apellido, setApellido ] = useState('')
    const [ edad, setEdad ] = useState(0)
    const [ ciudad, setCiudad ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    //funcion para actualizar 
    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "personas", id)
        const data = {nombre: nombre, apellido: apellido, edad:edad, ciudad:ciudad}
        await updateDoc(product, data)
        navigate('/')
    }

        //capturamos el id de la persona para de acuerdo a eso actualizar

    const getPersonaById = async (id) => {
        const persona = await getDoc( doc(db, "personas", id) )
        if(persona.exists()) {
            //console.log(product.data())
            setNombre(persona.data().nombre)    
            setApellido(persona.data().apellido)
            setEdad(persona.data().edad)
            setCiudad(persona.data().ciudad)
        }else{
            console.log('La persona no existe')
        }
    }

    useEffect( () => {
        getPersonaById(id)
        // eslint-disable-next-line
    }, [])

    //retornamos la vista de formulario para el ingreso de datos
    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar Persona</h1>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Apellido</label>
                        <input
                            value={apellido}
                            onChange={ (e)=> setApellido(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> setEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div> 

                    <div className='mb-3'>
                        <label className='form-label'>Ciudad</label>
                        <input
                            value={ciudad}
                            onChange={ (e)=> setCiudad(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div> 
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                    
                 </form>   
            </div>
        </div>
    </div> 
    )


}

export default Edit