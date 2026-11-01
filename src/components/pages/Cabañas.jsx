import FirstGallery from "../generalComponents/galleries/FirstGallery";
import SecondGallery from "../generalComponents/galleries/SecondGallery";

function Cabañas() {
  return (
    <>
      <FirstGallery
        title="Cabaña 1"
        description="Esta Cabaña, con gran capacidad, es perfecta para hospedajes cortos en familia o amigos, además desde la galería posee una hermosa vista hacia las montañas."
      />

      <h3 className="faculty-glyphic-regular">Servicios</h3>

      <ul className="servicesList">
        <li className="faculty-glyphic-regular">
          Capacidad Máxima: 7 personas.
        </li>

        <li className="faculty-glyphic-regular">Precio: ARS ##.### x 1 Persona x 1 Noche.</li>

        <li className="faculty-glyphic-regular">2 Cuchetas (2 personas cada una).</li>

        <li className="faculty-glyphic-regular">Cama Matrimonial.</li>

        <li className="faculty-glyphic-regular">Agregable: 1 Colchón.</li>

        <li className="faculty-glyphic-regular">WIFI Gratis.</li>

        <li className="faculty-glyphic-regular">Parrilla (Llevar alimentos y materiales correspondientes).</li>

        <li className="faculty-glyphic-regular">Horno Eléctrico.</li>

        <li className="faculty-glyphic-regular">Horno a Gas.</li>

        <li className="faculty-glyphic-regular">Parking Privado Gratis sin necesidad de Reserva.</li>

        <li className="faculty-glyphic-regular">Baño Privado.</li>

        <li className="faculty-glyphic-regular">Aire Acondicionado.</li>

        <li className="faculty-glyphic-regular">Calefacción.</li>

        <li className="faculty-glyphic-regular">Patio y Jardín.</li>

        <li className="faculty-glyphic-regular">Se reciben mascotas, gratis.</li>
      </ul>

      <SecondGallery
        title="Cabaña 2"
        description="Esta Cabaña, es perfecta para parejas que deseen pasar tiempo rodeados de naturaleza. Además, su galería es perfecta para sentarse, respirar el aire puro y apreciar el paisaje."
      />

      <h3 className="faculty-glyphic-regular">Servicios</h3>

      <ul className="servicesList">
        <li className="faculty-glyphic-regular">
          Capacidad Máxima: 2 personas.
        </li>

        <li className="faculty-glyphic-regular">Precio: ARS ##.### x 1 Persona x 1 Noche.</li>

        <li className="faculty-glyphic-regular">Cama Matrimonial.</li>

        <li className="faculty-glyphic-regular">WIFI Gratis.</li>

        <li className="faculty-glyphic-regular">Parrilla (Llevar alimentos y materiales correspondientes).</li>

        <li className="faculty-glyphic-regular">Horno Eléctrico.</li>

        <li className="faculty-glyphic-regular">Horno a Gas.</li>

        <li className="faculty-glyphic-regular">Parking Privado Gratis sin necesidad de Reserva.</li>

        <li className="faculty-glyphic-regular">Baño Privado.</li>

        <li className="faculty-glyphic-regular">Aire Acondicionado.</li>

        <li className="faculty-glyphic-regular">Calefacción.</li>

        <li className="faculty-glyphic-regular">Patio y Jardín.</li>

        <li className="faculty-glyphic-regular">Se reciben mascotas, gratis.</li>
      </ul>
    </>
  );
}

export default Cabañas;
