import ContactForm from "../generalComponents/form/ContactForm";
import ReservationForm from "../generalComponents/form/ReservationForm";


function Contacto() {
  return (
    <>
      <section className="contact">

        <h2 className="faculty-glyphic-regular"> Para reservar por medio de esta página, llene el siguiente formulario:</h2>

        <ReservationForm/>

      </section>

        <hr />

        <section>

        <h2 className="faculty-glyphic-regular"> Para contactarnos por otros motivos, llene el siguiente formulario:</h2>

        <ContactForm/>

        </section>

    </>
  );
}

export default Contacto