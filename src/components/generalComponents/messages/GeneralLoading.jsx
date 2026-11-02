import Images from "../galleries/essentialsGalleries/Images"

function GeneralLoading() {
  return (
    <>
    
    <h2 className="faculty-glyphic-regular loadingElements ">Cargando, por favor espere</h2>

    <Images
    src="./loadingImage.gif"
    className="loadingElements"
    alt="Cargando, por favor espere"
    />

    </>

  )

}

export default GeneralLoading