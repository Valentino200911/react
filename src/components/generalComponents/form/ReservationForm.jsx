import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import SelectorInput from "./SelectorInput";
import Textarea from "./Textarea";
import Button from "../cards/Button";
import { useState } from "react";
import useReservation from "../../../hooks/reservation/useReservation";



function ReservationForm() {
  
    const [form, setForm] = useState({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",   
      cabaña: "",
      passangerNumber: "",
      entryDate: "",
      exitDate: "",
      comment: ""
  })

  const {error, reservation} = useReservation()

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value

    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const success = await reservation(form)
    console.log(success);

    if (success) {
      setForm({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",   
      cabaña: "",
      passangerNumber: "",
      entryDate: "",
      exitDate: "",
      comment: ""
      })
      alert("Reservación realizada")
    }
    
  }

  return (
    <>
      <form action="#" method="get" onSubmit={handleFormSubmit} >

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

        <h4 className="faculty-glyphic-regular">Cabaña</h4>

        <div className="selectorContainer textSelector">

          <SelectorInput 
          selectorText="Cabaña 1"
          nameId="cabaña" 
          name="cabaña" 
          value="1"  
          onChange={handleInputChange}/>

          <SelectorInput 
          selectorText="Cabaña 2"
          nameId="cabaña"
          value="2" 
          onChange={handleInputChange}/>
          
        </div>

        <Input
        inputText="Fecha de Ingreso" 
        name="entryDate" 
        id="entryDate" 
        value={form.entryDate}
        type="date" 
        onChange={handleInputChange}/>

        <Input 
        inputText="Fecha de Egreso"
        name="exitDate" 
        id="exitDate" 
        value={form.exitDate}
        type="date" 
        onChange={handleInputChange}/>

        <h4 className="faculty-glyphic-regular">Número de Pasajeros</h4>

        <p className="warning faculty-glyphic-regular">
          
          <FontAwesomeIcon
            icon={faTriangleExclamation}/>
          

          Verifique la Capacidad Máxima de cada Cabaña en el Apartado "Cabañas"
        </p>

        <div className="selectorContainer textSelector">

          <SelectorInput
          selectorText="0"
          nameId="passangerNumber" 
          name="0" 
          value="0" 
          onChange={handleInputChange}/>

          <SelectorInput 
          selectorText="1"
          nameId="passangerNumber" 
          name="1" 
          value="1"
          onChange={handleInputChange} />

          <SelectorInput 
          selectorText="2"
          nameId="passangerNumber" 
          name="2" 
          value="2" 
          onChange={handleInputChange}/>

          <SelectorInput 
          selectorText="3"
          nameId="passangerNumber" 
          name="3" 
          value="3" 
          onChange={handleInputChange}/>

          <SelectorInput 
          selectorText="4"
          nameId="passangerNumber" 
          name="4"
          value="4" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="5" 
          nameId="passangerNumber" 
          name="5" 
          value="5" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="6" 
          nameId="passangerNumber" 
          name="6" 
          value="6"
          onChange={handleInputChange} />

        </div>

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

export default ReservationForm;
