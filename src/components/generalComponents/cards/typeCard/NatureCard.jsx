
import Button from "./essentialsCard/Button"
import Images from "../../galleries/Images"
import { useAuth } from "../../../../hooks/user/AuthContext";

function NatureCard({cardTitleNature, cardSecondTitle, natureDescription, src, href, onClickEdit, onClickDelete}) {

  const {user, isAdmin} = useAuth()

  return (
          <>

            <h3 className="domine-bold cardTitleNature">{cardTitleNature}</h3>

            <h4 className="domine-bold cardSecondTitle">{cardSecondTitle}</h4>

            <p className="cardTextNature">{natureDescription} </p>

            <Images
              src={src}
              alt={cardTitleNature}
              className="cardImageNature" />

            <div className="buttonNatureContainer">

            {isAdmin && (

              <Button
              type="#"
              id="edit"
              buttonText="Editar"
              className="faculty-glyphic-regular"
              onClick={onClickEdit}
              />

            )}


            <a href={href} target="_blank">

            <Button
            type="#"
            id="infoNature"
            buttonText="Más Información"
            className="faculty-glyphic-regular"
            />

            </a>

            {isAdmin && (

              <Button
              type="#"
              id="delete"
              buttonText="Borrar"
              className="faculty-glyphic-regular"
              onClick={onClickDelete}
              />

            )}


            </div>

          </>
  )
}

export default NatureCard