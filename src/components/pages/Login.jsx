import { useState } from "react";
import Button from '../generalComponents/cards/Button'
import Input from "../generalComponents/form/Input";
import useLoginUser from "../../hooks/user/useLoginUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/user/AuthContext";

function Login() {

  const navigate = useNavigate()

  const {login} = useAuth()

  const [form, setForm] = useState({
    email:"",
    password:""
  })

  const {error, loginUser} = useLoginUser()

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value

    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const userData = await loginUser(form.email, form.password)

    if (userData) {
      login(userData)
      alert("Sesión Iniciada")
      setForm({
            email:"",
            password:""
      })
      navigate("/")
    }
    
  }

  return (
    <>
      <h2 className="faculty-glyphic-regular">Iniciar la sesión del usuario</h2>

      <form action="#" onSubmit={handleFormSubmit}> 

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
            buttonText="Iniciar sesión como usuario"
            className="faculty-glyphic-regular"
          />
        </div>

        {error && (
          <h3 className="faculty-glyphic-regular warning">{error?.message || error}</h3>
        )}
      </form>
    </>
  );
}

export default Login;
