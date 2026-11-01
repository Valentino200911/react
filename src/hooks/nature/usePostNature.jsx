import { useState } from "react";
import { API_URL } from "../../config";

function usePostNature() {
  const [error, setError] = useState(null);

  const postNature = async (formData) => {
    setError(null);

    try {
      const response = await fetch(`${API_URL}naturalElements`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Error al enviar los registros desde el Índice,
          ${response.status}`,
        );
      }

      const data = await response.json();

      //Para poder visualizar el envío en consola
      console.log({ data });

      return data;
    } catch (error) {
      console.error("Error al crear el elemento desde el Índice", error);
      setError(error);
      return null;
    } finally {
    }
  };
  return { error, postNature };
}

export default usePostNature;
