import Images from "../essentialsGalleries/Images"


function SecondGallery({title, description}) {
  return (
    <>
    <h3 className="faculty-glyphic-regular">{title}</h3>

    <div className="divStyle">

        <Images
        src="public/images/cabañas/cabaña2/cabaña 2.1.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña2/cabaña 2.2.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña2/cabaña 2.3.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña2/cabaña 2.4.jpg"
        alt="Fotografía de Cabaña 2"
        className="picture"
        />


    </div>

    <p className="faculty-glyphic-regular specTitle">{description}</p>
    
    </>
  )
}

export default SecondGallery