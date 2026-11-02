import { API_URL } from "../config"
import { ApiError } from "./ApiError"
import { readError } from "./readError"
import { readToken } from "./readToken"

export async function RequestApi(method, route, { body, defaultMessage = "Error al conectar con el servidor" } = {}) {

    const token = readToken()


    const response = await fetch(`${API_URL}${route}`, {
        method: method,
        headers: {

            ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
            
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // el FormData viaja tal cual; un objeto comun se convierte a texto JSON
        
        body: JSON.stringify(body),
    })

    if (!response.ok) {
        throw new ApiError(await readError(response, defaultMessage), response.status)
    }

    // 204 (sin contenido) no trae JSON
    if (response.status === 204) return null

    return await response.json()
}