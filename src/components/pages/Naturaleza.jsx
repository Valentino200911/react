//Sería el equivalente a un Product.jsx

import { useNavigate } from "react-router-dom";
import useGetNature from "../../hooks/nature/useGetNature";
import Button from '../generalComponents/cards/Button'
import GeneralError from "../generalComponents/messages/GeneralError";
import GeneralLoading from "../generalComponents/messages/GeneralLoading";
import NatureCard from "../generalComponents/cards/NatureCard"
import useDeleteNature from "../../hooks/nature/useDeleteNature";
import { useAuth } from "../../hooks/user/AuthContext";

function Naturaleza() {
  const { error, loading, bioelements } = useGetNature();
  const { error: deleteError, deleteNature } = useDeleteNature();
  const {user, isAuthenticated} = useAuth()

  const navigate = useNavigate();

  //Los handle se escriben aquí debido a que NatureCard.jsx y Button.jsx son componentes, la acción se dispara aquí

  const handleCreateNature = () => {
    navigate(`/naturaleza/indice`);
  };

  const handleEditNature = (event, bioelementId) => {
    event.stopPropagation();

    navigate(`/naturaleza/editor/${bioelementId}`);
  };

  const handleDeleteNature = async (event, bioelementId) => {

    event.stopPropagation();

    if (
      window.confirm("¿Desea eliminar el elemento?, el borrado será permanente")
    ) {
      const response = await deleteNature(bioelementId);

      console.log(response);

      if (response) {
        window.location.reload();
      }
      return;
    }
    //Es distinto el return con if(error) que con if(deleteError) -- (error al eliminar)
    if (deleteError) {
      return (
        <>
        
        <GeneralError />
        
        </>
      )
    }
  };

  if (error) {
    return (
      <>
        <GeneralError />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <GeneralLoading />
      </>
    );
  }

  return (
    <>
    {isAuthenticated && (

      <div className="buttonContainer">
        <Button
          type="#"
          id="send"
          className="faculty-glyphic-regular"
          onClick={handleCreateNature}
          buttonText="Indexar nuevo elemento"
        />
      </div>

    )}

      <div className="cardContainer">
        {bioelements.map((bioelement) => (
          <div className="cardNature" key={bioelement.id}>
            <NatureCard
              cardTitleNature={bioelement.name}
              cardSecondTitle={bioelement.binomialName}
              natureDescription={bioelement.description}
              src={bioelement.image}
              href={bioelement.info}
              onClickEdit={(event) => handleEditNature(event, bioelement.id)}
              onClickDelete={(event) => handleDeleteNature(event, bioelement.id)
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Naturaleza;
