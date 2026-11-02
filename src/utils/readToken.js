import { SESSION_KEY } from "./constants"

export function readToken() {
    try {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY))?.token ?? null
    } catch {
        return null
    }}