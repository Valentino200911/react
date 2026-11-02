import { SESSION_KEY } from "./constants"

export function readToken() {

    try {
        
         const token = JSON.parse(sessionStorage.getItem(SESSION_KEY))?.token ?? null

         return token

    } catch {
        return null
    }}