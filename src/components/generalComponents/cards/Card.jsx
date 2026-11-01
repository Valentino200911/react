import Button from "./Button"
import Images from "../galleries/Images"

function Card({cardTitle, src, alt, cardText, href}) {
  return (
    <>
      <div className="card">
        <h3 className="domine-bold cardTitle">{cardTitle} </h3>

        <Images
        src={src}
        alt={alt}
        className="cardImage"
        />

        <p className="cardText">{cardText}</p>

        <a href={href} target="_blank">
          
          <Button
          type="#"
          id="infoTuristicalCard"
          className="faculty-glyphic-regular"
          buttonText="Más Información"
          />
          
        </a>
      </div>
    </>
  );
}

export default Card;
