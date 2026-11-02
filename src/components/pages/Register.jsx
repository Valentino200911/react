import { useState } from "react";
import Button from '../generalComponents/cards/essentialsCard/Button'
import Input from "../generalComponents/form/essentialsForm/Input";
import useRegisterUser from "../../hooks/user/useRegisterUser";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name:"",
    surname:"",
    birthDate:"",
    phoneNumber: "",
    email:"",
    password:""
  })

  const {error, registerUser} = useRegisterUser()

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value

    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const success = await registerUser(form)
    console.log(success);

    if (success) {

      setForm({

      name:"",
      surname:"",
      birthDate:"",
      phoneNumber: "",
      email:"",
      password:""

      })
      navigate("/user/login")
    }
    
  }

  return (
    <>
      <h2 className="faculty-glyphic-regular">Registrar usuario</h2>

      <form action="#" onSubmit={handleFormSubmit}> 
        <Input
          type="text"
          inputText="Nombre del Usuario"
          name="name"
          id="name"
          placeholder="Escriba aquí su Nombre"
          value={form.name}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          inputText="Apellido del Usuario"
          name="surname"
          id="surname"
          placeholder="Escriba aquí su Apellido"
          value={form.surname}
          onChange={handleInputChange}
        />

        <Input
          type="date"
          inputText="Escriba aquí su fecha de nacimiento"
          name="birthDate"
          id="birthDate"
          placeholder="Escriba aquí su Apellido"
          value={form.birthDate}
          onChange={handleInputChange}
        />

        <Input
          type="number"
          inputText="Número Telefónico"
          name="phoneNumber"
          id="phoneNumber"
          value={form.phoneNumber}
          placeholder="+5491234567890"
          onChange={handleInputChange}
        />

        <Input
          type="email"
          inputText="E-mail del Usuario"
          name="email"
          id="email"
          placeholder="Escriba aquí su E-mail"
          value={form.email}
          onChange={handleInputChange}
        />

        <Input
          type="password"
          inputText="Contraseña"
          name="password"
          id="password"
          placeholder="Escriba aquí su Contraseña"
          value={form.password}
          onChange={handleInputChange}
        />

        <div className="buttonContainer">
          <Button
            type="submit"
            id="send"
            buttonText="Registrarse como usuario"
            className="faculty-glyphic-regular"
          />
          <Button
            type="reset"
            id="reset"
            buttonText="Limpiar el formulario"
            className="faculty-glyphic-regular"
          />
        </div>

          {error && (
            <h3 className="faculty-glyphic-regular warning">
              {error?.message || error}
            </h3>
          )}
      </form>
    </>
  );
}

export default Register;
