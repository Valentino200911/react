import { useState } from "react";
import { API_URL } from "../../config";

function useGetNatureById() {
  const [error, setError] = useState(null);

  const getNatureById = async (bioelementId) => {
    try {
      setError(null);

      const response = await fetch(`${API_URL}naturalElement/${bioelementId}`);

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
    }
  };

  return { error, getNatureById };
}

export default useGetNatureById;
