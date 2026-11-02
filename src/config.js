// Este archivo .env va a ser un diccionario que va a contener todas las variables de entorno
const url = import.meta.env.VITE_API_URL

// ⚠️ Sin esto, si falta VITE_API_URL el build sale BIEN y todos los fetch van a
//    "undefinedlibros". No hay error, no hay warning: la página desplegada
//    simplemente no carga nada. Mejor que reviente acá y se vea el motivo.
if (!url) {
    throw new Error(
        'Falta VITE_API_URL.\n' +
        '  · En tu máquina: está en el .env (o .env.local).\n' +
        '  · En Vercel: Settings → Environment Variables, y volvé a desplegar.'
    )
}

// Tiene que terminar en barra, porque api.js arma `${API_URL}${ruta}`
export const API_URL = url.endsWith("/") ? url : url + "/"