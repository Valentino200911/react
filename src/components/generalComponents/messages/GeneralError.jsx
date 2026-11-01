import useGetNature from "../../../hooks/nature/useGetNature"

function GeneralError() {

  const {error} = useGetNature() //Se requiere del error para dar el message

  return (
    <>
    <h1 className="faculty-glyphic-regular warning loadingElements">Error al traer los elementos</h1>

    <p className="loadingElements faculty-glyphic-regular warning">{error?.message || String(error)}</p>
    </>
  )
}

export default GeneralError