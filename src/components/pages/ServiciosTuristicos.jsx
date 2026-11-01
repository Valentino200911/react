import Card from "../generalComponents/cards/Card"

function ServiciosTuristicos() {
  return (
    <>
      <h3 className="faculty-glyphic-regular">Ubicación</h3>

      <section>
        <p className="faculty-glyphic-regular introText">
          Valle del San Javier, Ruta Provincial 340, Kilómetro 16.
        </p>

        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.9891692490146!2d-65.39125697974957!3d-26.73956627199294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94226bb4295448a9%3A0x287d041a047b8920!2sCaba%C3%B1as%20Aguaribay!5e1!3m2!1ses-419!2sar!4v1776812145365!5m2!1ses-419!2sar"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="embedMap"
          />
        </div>
      </section>

      <section>
        <h3 className="faculty-glyphic-regular">Servicios Turísticos</h3>

        <div className="cardContainer">
          <Card
            cardTitle="Bosque de la Memoria"
            src="/cardImages/BOSQUE DE LA MEMORIA.jpg"
            alt="Bosque de la Memoria"
            cardText=" A 5 km: Abierto en 1996 para conmemorar a las Víctimas del Terrorismo de Estado."
            href="https://www.argentina.gob.ar/cultura/monumentos/cristo-redentor-tucuman"
          />

          <Card
            cardTitle="Sendero El Funicular"
            src="/cardImages/SENDERO EL FUNICULAR.jpg"
            cardText=" A 8 km: Senderos para la realización de trekking, atravesando la Selva de Yungas."
            href="https://www.tripadvisor.com.ar/Attraction_Review-g1020804-d10749628-Reviews-Sendero_del_Funicular-Yerba_Buena_Province_of_Tucuman_Northern_Argentina.html"
          />

          <Card
            cardTitle="El Cristo Bendicente"
            src="/cardImages/CRISTO BENDICENTE.jpg"
            cardText=" A 5 km: Abierto en 1996 para conmemorar a las Víctimas del Terrorismo de Estado."
            href="https://www.argentina.gob.ar/cultura/monumentos/cristo-redentor-tucuman"
          />

          <Card
            cardTitle="Cascada del Río Noque"
            src="/cardImages/CASCADA DEL RIO NOQUE.jpg"
            cardText=" A 5 km: Cascada rodeada de naturaleza con senderos para caminatas."
            href="https://www.tucumanturismo.gob.ar/articulos/articulo/523/cascada-del-rio-noque"
          />

        </div>

        <ul className="activitiesList">
          
          <li className="faculty-glyphic-regular">Senderismo.</li>

          <li className="faculty-glyphic-regular">Ciclismo.</li>

          <li className="faculty-glyphic-regular">
            Equitación (Costo Adicional).
          </li>
        </ul>
      </section>
    </>
  );
}

export default ServiciosTuristicos