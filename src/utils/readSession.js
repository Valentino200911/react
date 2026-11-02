const userModel = (user, token) => ({

    name: user.name,
    surname: user.surname,
    birthDate: user.birthDate,
    phoneNumber: user.phoneNumber ,
    email: user.email,
    password: user.password,
    role: user.role,
    token,

  })

export const userPublicModel = (user) => ({

    name: user.name,
    surname: user.surname,
    birthDate: user.birthDate,
    phoneNumber: user.phoneNumber ,
    email: user.email,
    password: user.password,

  })

export const readSession = (data) => {
    
    const user = data.user

    const token = data.token

    return userModel(user, token)

}