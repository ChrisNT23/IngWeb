//Importar esto para traer los documentos desde la base de datos
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
//importar la conexion con la base de datos
import { db } from '../firebaseConfig/firebase'


// 2-----    referenciamos a la bd de firestore
const personasCollection = collection(db, "personas")

// 3-----funcion para mostrar todos los documentos de la bd
export const getPersonas = async () => {
    const data = await getDocs(personasCollection)
    //console.log(data.docs)
    return data;
    
}

 // 4-----funcion para eliminar un documento

 export const deletePersonas = async (id) => {
    const personasDoc = doc(db, "personas", id)
    await deleteDoc(personasDoc)
    
}

