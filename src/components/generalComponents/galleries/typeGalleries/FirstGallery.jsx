import Images from "../essentialsGalleries/Images"

function FirstGallery({title, description}) {
  return (
    <>
    <h3 className="faculty-glyphic-regular">{title}</h3>

    <div className="divStyle">

        <Images
        src="public/images/cabañas/cabaña1/cabaña 1.1.jpg"
        alt="Fotografía de Cabaña 1"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña1/cabaña 1.2.jpg"
        alt="Fotografía de Cabaña 1"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña1/cabaña 1.3.jpg"
        alt="Fotografía de Cabaña 1"
        className="picture"
        />

        <Images
        src="public/images/cabañas/cabaña1/cabaña 1.4.jpg"
        alt="Fotografía de Cabaña 1"
        className="picture"
        />

    </div>

    <p className="faculty-glyphic-regular specTitle">{description}</p>
    
    </>
  )
}

export default FirstGallery