export class ApiError extends Error {
    constructor(mensaje, status) {
        super(mensaje)
        this.name = "ApiError"
        this.status = status
    }
}