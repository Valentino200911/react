import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import useReservation from "../../../../hooks/reservation/useReservation";
import SelectorInput from "../essentialsForm/SelectorInput";
import Input from "../essentialsForm/Input";
import Textarea from "../essentialsForm/Textarea";
import Button from "../../cards/essentialsCard/Button";

function ReservationForm() {
  
    const [form, setForm] = useState({
      cottage: "",
      passangerNumber: "",
      entryDate: "",
      exitDate: "",
      methodOfPayment: "",
      reservationComment: ""
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
      cottage: "",
      passangerNumber: "",
      entryDate: "",
      exitDate: "",
      reservationComment: ""
      })
      alert("Reservación realizada")
    }else {
      return error
    }
    
  }

  return (
    <>
      <form action="#" method="get" onSubmit={handleFormSubmit} >

        <h4 className="faculty-glyphic-regular">Cabaña</h4>

        <div className="selectorContainer textSelector">

          <SelectorInput 
          selectorText="Cabaña 1"
          id="cabaña 1" 
          name="cottage" 
          value="cabaña 1"  
          onChange={handleInputChange}/>

          <SelectorInput 
          selectorText="Cabaña 2"
          id="cabaña 2" 
          name="cottage" 
          value="cabaña 2"  
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
          id="0" 
          name="passangerNumber" 
          value="0" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="1"
          id="1" 
          name="passangerNumber" 
          value="1" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="2"
          id="2" 
          name="passangerNumber" 
          value="2" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="3"
          id="3" 
          name="passangerNumber" 
          value="3" 
          onChange={handleInputChange}/>


          <SelectorInput
          selectorText="4"
          id="4" 
          name="passangerNumber" 
          value="4" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="5"
          id="5" 
          name="passangerNumber" 
          value="5" 
          onChange={handleInputChange}/>

          <SelectorInput
          selectorText="6"
          id="6" 
          name="passangerNumber" 
          value="6" 
          onChange={handleInputChange}/>


        </div>

        <div className="formGroup">

        <label for="reasonOfContact" className="faculty-glyphic-regular">Motivo de Contacto</label>
        
        <select
          name="methodOfPayment"
          id="methodOfPayment"
          required
          onChange={handleInputChange}
          value={form.methodOfPayment}
          className="faculty-glyphic-regular">
          


          <Option 
          value="#"
          optionText="Seleccione una de las siguientes opciones"
          isDisabled={true}
          isSelected={true}
          />

          <Option 
          name="bankTransfer"
          id="bankTransfer"
          value="bankTransfer"
          optionText="Transferencia Electrónica"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          name="cash"
          id="cash"
          value="cash"
          optionText="Efectivo"
          isDisabled={false}
          isSelected={false}
          />

        </select>

        </div>

        <Textarea
        name="reservationComment"
        id="reservationComment"
        value={form.reservationComment}
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
