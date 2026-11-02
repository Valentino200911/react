export const readError = async (response, defaultMessage) => {
    try {
        const data = await response.json()
        const detail = Array.isArray(data.detail) ? `: ${data.detail.join(" · ")}` : ""
        return (data.error ?? data.message ?? defaultMessage) + detail
    } catch {
        return defaultMessage
    }
}
