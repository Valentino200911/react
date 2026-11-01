import Button from "../../cards/essentialsCard/Button";
import Textarea from "../essentialsForm/Textarea";
import useContact from "../../../../hooks/contact/useContact";
import { useState } from "react";
import Option from "../essentialsForm/Option";

function ContactForm() {
  
    const [form, setForm] = useState({
      reasonOfContact:"",    
      contactComment: ""
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
      reasonOfContact:"",    
      contactComment: ""
      })
      alert("Contacto realizado")
    } else {
      return error
    }
  }
  return (
    <>
      <form action="#" method="get" onSubmit={handleFormSubmit}>

      <div className="formGroup">

        <label for="reasonOfContact" className="faculty-glyphic-regular">Motivo de Contacto</label>
        
        <select
          name="reasonOfContact"
          id="reasonOfContact"
          required
          onChange={handleInputChange}
          value={form.reasonOfContact}
          className="faculty-glyphic-regular">
          


          <Option 
          value="#"
          optionText="Seleccione una de las siguientes opciones"
          isDisabled={true}
          isSelected={true}
          />

          <Option 
          name="business"
          id="business"
          value="business"
          optionText="Razones comerciales"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          name="prom"
          id="prom"
          value="prom"
          optionText="Promoción"
          isDisabled={false}
          isSelected={false}
          />

          <Option
          name="problem"
          id="problem" 
          value="problem"
          optionText="Problemáticas"
          isDisabled={false}
          isSelected={false}
          />

          <Option
          name="suggest"
          id="suggest" 
          value="suggest"
          optionText="Sugerencia"
          isDisabled={false}
          isSelected={false}
          />

        </select>

      </div>

        <Textarea
        name="contactComment"
        id="contactComment"
        value={form.contactComment}
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