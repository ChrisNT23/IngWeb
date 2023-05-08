import { getPersonas, deletePersonas } from "../models/userModel";

//defino todas las validaciones que quiero :)
export const traerPersonas = async () =>{
    const rest = await getPersonas();
    return rest;
}

export const borrarPersonas = async (id) =>{
    const rest = await deletePersonas(id);
    return rest;
}
