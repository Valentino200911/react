import { useState } from "react"
import { RequestApi } from "../../utils/RequestApi"
import { readSession, userPublicModel } from "../../utils/readSession"

// devuelve { user } si salio bien, o { message } si salio mal
function useRegisterUser() {

    const [error, setError] = useState(null)

    const registerUser = async (formData) => {

        setError(null)

        try {
            // el formulario usa nombres en ingles, el back en español.
            // ⚠️ el rol NO se manda: lo decide el back (todo registro es comprador)
            const data = await RequestApi("POST", "auth/register", {
                body: userPublicModel(formData),
                defaultMessage: "Ocurrió un error al crear la cuenta"
            })

            // si el back devuelve token, el registro ya deja la sesion iniciada
            return { user: readSession(data) }

        } catch (error) {
          
            console.error("Error al registrar usuario", error)
            setError(error)
            return { message: error.message }
        }
    }

    return { registerUser, error }
}

export default useRegisterUser
