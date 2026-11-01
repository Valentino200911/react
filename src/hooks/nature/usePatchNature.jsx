import { useState } from "react";
import { API_URL } from "../../config";

function usePatchNature() {
  const [error, setError] = useState(null);

  const patchNature = async (formData, bioelementId) => {
    try {
      setError(null);

      const response = await fetch(`${API_URL}naturalElement/${bioelementId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
         `Error al traer el elemento de Naturaleza,
          ${response.status}`,
        );
      }

      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
      setError(error);
      return null;
    }
  };

  return { error, patchNature };
}

export default usePatchNature;
