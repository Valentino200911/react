import Images from "./Images"

function SecondGallery({title, description}) {
  return (
    <>
    <h3 className="faculty-glyphic-regular">{title}</h3>

    <div className="divStyle">

        <Images
        src="/cabaña2/Cabaña 2.2.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="/cabaña2/Cabaña 2.2.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="/cabaña2/Cabaña 2.3.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="/cabaña2/Cabaña 2.4.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />


    </div>

    <p className="faculty-glyphic-regular specTitle">{description}</p>
    
    </>
  )
}

export default SecondGallery