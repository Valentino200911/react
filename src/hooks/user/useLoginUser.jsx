import { useState } from "react";
import { readSession } from "../../utils/readSession";
import { RequestApi } from "../../utils/RequestApi";

// Antes: se bajaban TODOS los usuarios y se comparaba la password en el navegador.
// Ahora: se le manda email + password al back, el back compara contra el hash (bcrypt)
// y si esta bien devuelve el usuario (sin password) y un token JWT.
function useLoginUser() {

  const [error, setError] = useState(null);

  // devuelve { user } si salio bien, o { message } si salio mal

   // devuelve { user } si salio bien, o { message } si salio mal
    const loginUser = async (email, password) => {

        setError(null)

        try {

            const data = await RequestApi("POST", "auth/login", {

                body: { email, password },

                defaultMessage: "Credenciales incorrectas"

            })
            
            return { user: readSession(data) }
            
        } catch (error) {

            console.error("Error al loggear usuario", error)

            setError(error)
            
            return { message: error.message }
        }
    }
    return { error, loginUser }
}

export default useLoginUser