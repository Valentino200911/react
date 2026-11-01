import Input from "../generalComponents/form/Input";
import usePostNature from "../../hooks/nature/usePostNature";
import Textarea from "../generalComponents/form/Textarea";
import Button from '../../components/generalComponents/cards/Button'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../generalComponents/galleries/Images";
import NatureCard from "../generalComponents/cards/NatureCard"

//Sería el equivalente a un CreateProductPage.jsx
//Consideré que sería mejor tener el formulario controlado con inputs componetizados aquí en vez de en generalComponents/form

function Indice() {
  const [form, setForm] = useState({
    name: "",
    binomialName: "",
    description: "",
    image: "",
    info: "",
  });

  const navigate = useNavigate();

  const { error, postNature } = usePostNature();

  const handleInputChange = (event) => {
    const { id, value, type } = event.target;

    setForm({
      ...form,

      [id]: type === "number" ? parseInt(value) || 0 : value,
    });

    console.log(form);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const sucess = await postNature(form);

    if (sucess) {
      setForm({
        name: "",
        binomialName: "",
        description: "",
        image: "",
        info: "",
      });

      navigate("/naturaleza");
    }
  };

  return (
    <>
      <h2 className="faculty-glyphic-regular">
        Indexar y Crear registros para Naturaleza
      </h2>

      <div className="editorLayout">

      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          inputText="Nombre del Elemento"
          name="Nombre del Elemento"
          id="name"
          value={form.name}
          placeholder="Escriba aquí el nombre del elemento"
          onChange={handleInputChange}
        />

        <Input
          type="text"
          inputText="Nombre Binomial del elemento"
          name="Nombre Binomial del elemento"
          id="binomialName"
          value={form.binomialName}
          placeholder="Escriba aquí el nombre binomial del elemento"
          onChange={handleInputChange}
        />

        <Textarea
          id="description"
          label="Descripción del elemento"
          placeholder="Escriba aquí la descripción del elemento"
          value={form.description}
          onChange={handleInputChange}
        />

        <Input
          type="text"
          inputText="URL e Imagen del elemento"
          name="URL e Imagen del elemento"
          id="image"
          value={form.image}
          placeholder="Escriba aquí la URL de la imagen del elemento"
          onChange={handleInputChange}
        />

        <div>

        <h4 className="faculty-glyphic-regular">Previsualización de la imagen (Insterte la URL)</h4>

        <div className="previewImageContainer">

        <Images
        src={form.image}
        alt={form.name}
        className="previewImage"
        />

        </div>
          
        </div>


        <Input
          inputText="URL y Más información sobre el elemento"
          type="text"
          name="URL y Más información sobre el elemento"
          id="info"
          value={form.info}
          placeholder="Escriba aquí la URL de la información del elemento"
          onChange={handleInputChange}
        />


        <div className="buttonContainer">
          <Button
            type="submit"
            id="send"
            buttonText="Indexar elemento"
            className="faculty-glyphic-regular"
          />

          <Button
            type="reset"
            id="reset"
            buttonText="Limpiar el Índice"
            className="faculty-glyphic-regular"
          />

        </div>

          {error && (
            <h3 className="faculty-glyphic-regular warning">
              {error?.message || error}
            </h3>
          )}

      </form>

      <div className="previewPanel">

       <div>

        <h4 className="faculty-glyphic-regular">Previsualización de la Tarjeta (llene todos los campos)</h4>

        <div className="cardContainer">

          <div className="cardNature">

            <NatureCard
            cardTitleNature={form.name}
            cardSecondTitle={form.binomialName}
            natureDescription={form.description}
            src={form.image}
            info={form.info}
            />

          </div>

        </div>

      </div>

      </div>

      </div>

    </>
  );
}

export default Indice;
