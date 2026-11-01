export const NatureModify = (naturalElement) => ({

        id: naturalElement._id,
        name: naturalElement.name,
        binomialName: naturalElement.binomialName,
        description: naturalElement.description,
        //type
        image: naturalElement.image,
        info: naturalElement.info

})

export const UserModify = (user) => ({
    id: user._id,
    name: user.name,
    surname: user.surname,
    birthDate: Date(user.birthDate), // Modificar el register para eso,
    phoneNumber: user.phoneNumber, // Modificar el register para eso,
    email: user.email,
    password: user.password,
    role: user.role, // Modificar el register para eso,
    token,
})


export const ContactModify = (user, contact) => ({

    id: contact._id,
    name: UserModify(user.name),
    surname: UserModify(user.surname),
    phoneNumber: UserModify(user.phoneNumber),
    email: UserModify(user.email),
    reasonOfContact: contact.reasonOfContact,
    comment: contact.contactComment

})

//Modificaciones para agregar la cabaña
// - Consultas http de la cabaña en el front

// Reservación

// Lectura del error
export const readError = async (response, standard) => {
    try {
        const data = await response.json()
        const details = Array.isArray(data.detail) ? `: ${data.detail.join(" · ")}` : ""
        return (data.error ?? data.message ?? standard) + details
    } catch {
        return standard
    }
}
