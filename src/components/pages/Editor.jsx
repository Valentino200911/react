import Input from "../generalComponents/form/Input";
import Textarea from "../generalComponents/form/Textarea";
import Button from "../generalComponents/cards/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Images from "../generalComponents/galleries/Images";
import NatureCard from "../generalComponents/cards/NatureCard";
import usePostNature from "../../hooks/nature/usePostNature";
import useGetNatureById from "../../hooks/nature/useGetNatureById";
import usePatchNature from "../../hooks/nature/usePatchNature";

//Sería el equivalente a un EditProductPage.jsx
//Consideré que sería mejor tener el formulario controlado con inputs componetizados aquí en vez de en generalComponents/form

function Editor() {
  const [form, setForm] = useState({
    name: "",
    binomialName: "",
    description: "",
    image: "",
    info: "",
  });

  const { error, patchNature } = usePatchNature();

  const { error: getNatureByIdError, getNatureById } = useGetNatureById();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadElement = async () => {
      const response = await getNatureById(id);

      if (response) {
        setForm({
          name: response.name,
          binomialName: response.binomialName,
          description: response.description,
          image: response.image,
          info: response.info,
        });
      }
    };

    if (id) {
      loadElement();
    } else {
      console.log({ id });
    }
  }, [id]);

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

    const success = patchNature(form, id);

    if (success) {
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
        Editar los registros de Naturaleza
      </h2>

      <div className="editorLayout">
        <form onSubmit={handleFormSubmit}>
          <Input
            inputText="Nombre del Elemento"
            type="text"
            name="Nombre del Elemento"
            id="name"
            value={form.name}
            placeholder="Escriba aquí el nombre del elemento"
            onChange={handleInputChange}
          />

          <Input
            inputText="Nombre Binomial del elemento"
            type="text"
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
            name="URL e Imagen del elemento"
            inputText="URL e Imagen del elemento"
            id="image"
            value={form.image}
            placeholder="Escriba aquí la URL de la imagen del elemento"
            onChange={handleInputChange}
          />

          <h4 className="faculty-glyphic-regular">
            Previsualización de la imagen (Insterte la URL)
          </h4>

          <div className="previewImageContainer">
            <Images src={form.image} alt={form.name} className="previewImage" />
          </div>

          <Input
            type="text"
            inputText="URL y Más información sobre el elemento"
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
              buttonText="Editar elemento"
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

              {/* Preview de Card */}
              
              <h4 className="faculty-glyphic-regular">
                Previsualización de la Tarjeta (llene todos los campos)
              </h4>

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

export default Editor;
