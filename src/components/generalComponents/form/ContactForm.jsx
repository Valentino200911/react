import Button from "../cards/Button";
import Select from "./Select";
import Textarea from "./Textarea";
import useContact from "../../../hooks/contact/useContact";
import { useState } from "react";
import Input from "./Input";

function ContactForm() {
  
    const [form, setForm] = useState({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",  
      reasonOfContact:"",    
      comment: ""
  })

  const {error, contact} = useContact()

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value

    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const success = await contact(form)
    console.log(success);
  

    if (success) {
      setForm({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      reasonOfContact:"",   
      comment: ""
      })
      alert("Contacto realizado")
    }
  }
  return (
    <>
      <form action="#" method="get" onSubmit={handleFormSubmit}>

        <Input
          inputText="Nombre"
          name="name"
          id="name"
          value={form.name}
          type="text"
          placeholder="Escriba aquí"
          onChange={handleInputChange}
        />

        <Input
          inputText="Apellido"
          name="surname"
          id="surname"
          value={form.surname}
          type="text"
          placeholder="Escriba aquí"
          onChange={handleInputChange}
        />

        <Input
          inputText="E-mail"
          name="email"
          id="email"
          value={form.email}
          type="email"
          placeholder="Escriba aquí"
          onChange={handleInputChange}
        />

        <Input
          inputText="Número Telefónico"
          name="phoneNumber"
          id="phoneNumber"
          value={form.phoneNumber}
          type="number"
          placeholder="+5491234567890"
          onChange={handleInputChange}
        />

        <Select
        name="reasonOfContact"
        id="reasonOfContact"
        onChange={handleInputChange}
        value={form.reasonOfContact} />

        <Textarea
        name="comment"
        id="comment"
        value={form.comment}
        label="Comentario"
        placeholder="Escriba aquí"
        onChange={handleInputChange}
        />

        <div className="buttonContainer">

        <Button
        type="submit"
        id="send"
        buttonText="Enviar"
        className="faculty-glyphic-regular"/>

        <Button
        type="reset"
        id="reset"
        buttonText="Limpiar"
        className="faculty-glyphic-regular"/>

        </div>        
      </form>
    </>
  );
}


export default ContactForm